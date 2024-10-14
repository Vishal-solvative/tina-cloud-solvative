import {
  fetchPages,
  fetchBlogPages,
  FETCH_PAGES,
  FETCH_BLOGS,
} from "../util/pagesData";
export const runtime = "edge";

export default async function robots() {
  const baseUrl = "https://solvative.com";
  const pageData = await FETCH_PAGES();
  const blogsData = await FETCH_BLOGS();

  const transformedPageData = pageData.map((item) => `/${item.filename}`);
  const transformedBlogData = blogsData.map(
    (item) => `/blogs/${item.filename}`
  );

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blogs", ...transformedPageData, ...transformedBlogData],
        disallow: "/admin",
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/", // Ensure Facebook can crawl everything
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}