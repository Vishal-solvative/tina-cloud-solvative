import TinaComp from '../../components/TinaComp'
import {client} from '../../tina/__generated__/client'
import ClientPage from './client-page'
import {notFound} from 'next/navigation'


// Fetch the data for the page, including SEO fields
const fetchData = async slug => {
    try {
        if (slug == 'vite.svg.mdx' || slug == 'favicon.ico' || slug == '_next,static,css,app,styles.css.map') {
            return
        }
        const slugPath = slug.join('/')
        const data = await client.queries.page({
            relativePath: `/${slugPath}.mdx`
        })
        if (!data?.data) {
            return {notFound: true}
        }
        return {
            props: {
                data: JSON.parse(JSON.stringify(data.data)),
                query: data.query,
                variables: data.variables,
                seoFields: data.data.page.seoFields // Return SEO fields as part of props
            }
        }
    } catch (error) {
        console.error('Error fetching data:', error)
        return {notFound: true}
    }
}

// Generate the metadata for the page
export async function generateMetadata({params}, parent) {
    const {slug} = params
    const result = await fetchData(slug)
    const previousImages = (await parent).openGraph?.images || []
    if (result?.notFound) {
        return {
            title: 'Page Not Found',
            description: 'The page you are looking for could not be found.'
        }
    }

    if (
        slug[0] !== 'vite.svg' &&
        slug[0] !== 'favicon.ico' &&
        slug[0] !== '_next,static,css,app,styles.css.map' &&
        slug[0] !== '_next'
    ) {
        const result = await fetchData(slug)
        const seoFields = result?.props?.seoFields

        return {
            title: seoFields?.metaTitle || 'Solvative | Human-focused digital solutions.',
            description: seoFields?.metaDescription,
            openGraph: {
                title: seoFields?.ogTitle || seoFields?.metaTitle,
                description:
                    seoFields?.ogDescription ||
                    seoFields?.metaDescription ||
                    'Innovative E-Commerce Strategies Drive Efficiency For One of America&#039;s Largest Private Companies',
                url:
                    seoFields?.ogUrl ||
                    'https://solvative.com/case-studies/commerce-cloud-sfra-migration-for-a-large-consumer-electronics-company/',
                type: seoFields?.ogType || 'website',
                siteName: seoFields?.ogSiteName || 'Solvative',
                images: seoFields?.ogImage
                    ? [
                          {
                              url: seoFields.ogImage,
                              width: seoFields?.ogImageWidth || 600,
                              height: seoFields?.ogImageHeight || 600,
                              type: seoFields?.ogImageType,
                              alt: seoFields?.ogImageAlt
                          },
                          ...previousImages
                      ]
                    : ['https://solvative.com/wp-content/uploads/2020/06/solvative-preview.png'],
                locale: seoFields?.ogLocale
            },
            alternates: {
                canonical: seoFields?.canonicalUrl
            },
            twitter: {
                title: seoFields?.twitterTitle || seoFields?.metaTitle,
                description: seoFields?.twitterDescription || seoFields?.metaDescription,
                image: seoFields?.twitterImage
            }
        }
    }
}

export default async function Page({params}) {
    const {slug} = params
    const result = await fetchData(slug)
    if (result?.notFound) {
        // Handle not found case
        const res = await client.queries.page({
            relativePath: `pageNotFound.mdx`
        })
        return <TinaComp data={JSON.parse(JSON.stringify(res.data))} query={res.query} variables={res.variables} />
        // notFound()
    }

    return (
        <>
            {result?.props?.data && (
                <ClientPage
                    data={result?.props?.data}
                    query={result?.props?.query}
                    variables={result?.props?.variables}
                />
            )}
        </>
    )
}
