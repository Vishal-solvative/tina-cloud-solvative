import {fetchPages, fetchBlogPages} from '../util/pagesData'
export const runtime = 'edge'

export default async function robots() {
    const baseUrl = 'https://solvative.com'
    const pageData = await fetchPages()
    const blogsData = await fetchBlogPages()

    const transformedPageData = pageData.map(item => `/${item.filename}`)
    const transformedBlogData = blogsData.map(item => `/blogs/${item.filename}`)

    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/blogs', ...transformedPageData, ...transformedBlogData],
            disallow: '/admin'
        },
        sitemap: `${baseUrl}/sitemap.xml`
    }
}
