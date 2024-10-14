import Head from 'next/head'

const SeoComponent = ({seo}) => {
    if (!seo) return null

    return (
        <Head>
            {/* Meta Title and Description */}
            {seo.metaTitle && <title>{seo.metaTitle}</title>}
            {seo.metaDescription && <meta name='description' content={seo.metaDescription} />}
            {seo.metaKeywords && <meta name='keywords' content={seo.metaKeywords} />}

            {/* Open Graph / Facebook */}
            {seo.ogTitle && <meta property='og:title' content={seo.ogTitle} />}
            {seo.ogDescription && <meta property='og:description' content={seo.ogDescription} />}
            {seo.ogImage && <meta property='og:image' content={seo.ogImage} />}
            {seo.canonicalUrl && <meta property='og:url' content={seo.canonicalUrl} />}
            <meta property='og:type' content='website' />

            {/* Twitter */}
            {seo.twitterTitle && <meta name='twitter:title' content={seo.twitterTitle} />}
            {seo.twitterDescription && <meta name='twitter:description' content={seo.twitterDescription} />}
            {seo.twitterImage && <meta name='twitter:image' content={seo.twitterImage} />}
            <meta name='twitter:card' content='summary_large_image' />

            {/* Canonical URL */}
            {seo.canonicalUrl && <link rel='canonical' href={seo.canonicalUrl} />}
        </Head>
    )
}

export default SeoComponent
