import Head from "next/head";
import TinaComp from "../../components/TinaComp";
import { client } from "../../tina/__generated__/client";
import ClientPage from "./client-page";

export const runtime = "edge";

export async function fetchData(slug) {
  try {
    if (
      slug == "vite.svg.mdx" ||
      slug == "favicon.ico" ||
      slug == "_next,static,css,app,styles.css.map"
    ) {
      return;
    }
    const data = await client.queries.page({
      relativePath: `${slug}.mdx`,
    });
    if (!data?.data) {
      return { notFound: true };
    }

    return {
      props: {
        data: JSON.parse(JSON.stringify(data.data)),
        query: data.query,
        variables: data.variables,
        seoFields: data.data.page.seoFields, // Return SEO fields as part of props
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
export default async function Page({ params }) {
  const { slug } = params;
  const result = await fetchData(slug);

  if (result?.notFound) {
    const res = await client.queries.page({
      relativePath: `pageNotFound.mdx`,
    });
    return (
      <TinaComp
        data={JSON.parse(JSON.stringify(res.data))}
        query={res.query}
        variables={res.variables}
      />
    );
  }
  const seoFields = result?.props?.seoFields;
  return (
    <>
      <Head>
        <title>{seoFields.metaTitle}</title>
        <meta name="description" content={seoFields.metaDescription} />
      </Head>
      <ClientPage
        data={result?.props?.data}
        query={result?.props?.query}
        variables={result?.props?.variables}
      />
    </>
  );
}
