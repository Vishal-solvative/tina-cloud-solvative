import {fetchPages, fetchBlogPages, FETCH_PAGES, FETCH_BLOGS} from '../util/pagesData'


export default async function sitemap() {
    const pageData = await FETCH_PAGES()
    const blogsData = await FETCH_BLOGS()
    const baseUrl = 'https://solvative.com'
    const ignoreList = ['home', 'test', 'pageNotFound']

    const blogItems = blogsData?.map(blogs => {
        return {
            url: `${baseUrl}/blogs/${blogs.filename}`,
            lastModified: new Date()
        }
    })

    const pageItems = pageData
        .filter(page => !ignoreList.includes(page.filename))
        .map(page => {
            return {
                url: `${baseUrl}/${page.filename}`,
                lastModified: new Date()
            }
        })

    return [
        {
            url: baseUrl,
            lastModified: new Date()
        },
        ...pageItems,
        ...blogItems
    ]
}
