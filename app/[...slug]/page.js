import TinaComp from "../../components/TinaComp";
import { client } from "../../tina/__generated__/client";
import ClientPage from "./client-page";



// Fetch the data for the page, including SEO fields
const fetchData = async (slug) => {
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
};

// Generate the metadata for the page
export async function generateMetadata({ params }, parent) {
  const { slug } = params;
  const result = await fetchData(slug);
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  if (result?.notFound) {
    return {
      title: "Page Not Found",
      description: "The page you are looking for could not be found.",
    };
  }

  if (
    slug[0] !== "vite.svg" &&
    slug[0] !== "favicon.ico" &&
    slug[0] !== "_next,static,css,app,styles.css.map" &&
    slug[0] !== "_next"
  ) {
    const result = await fetchData(slug);
    const seoFields = result?.props?.seoFields;

    return {
      title:
        seoFields?.metaTitle || "Solvative | Human-focused digital solutions.",
      description: seoFields?.metaDescription,
      openGraph: {
        title: seoFields?.ogTitle || seoFields?.metaTitle,
        description:
          seoFields?.ogDescription ||
          seoFields?.metaDescription ||
          "Innovative E-Commerce Strategies Drive Efficiency For One of America&#039;s Largest Private Companies",
        url:
          seoFields?.ogUrl ||
          "https://solvative.com/case-studies/commerce-cloud-sfra-migration-for-a-large-consumer-electronics-company/",
        type: seoFields?.ogType || "website", // Default to 'website' if not provided
        site_name: seoFields?.ogSiteName || "Solvative",
        images: seoFields?.ogImage
          ? [
              {
                url: seoFields.ogImage,
                width: seoFields?.ogImageWidth || 600,
                height: seoFields?.ogImageHeight || 600,
                type: seoFields?.ogImageType,
              },
              ...previousImages,
            ]
          : [
              "https://solvative.com/wp-content/uploads/2020/06/solvative-preview.png",
            ],
      },
      twitter: {
        title: seoFields?.twitterTitle || seoFields?.metaTitle,
        description:
          seoFields?.twitterDescription || seoFields?.metaDescription,
        image: seoFields?.twitterImage,
      },
      link: [
        {
          rel: "canonical",
          href: seoFields?.canonicalUrl,
        },
      ],
    };
  }
}

export default async function Page({ params }) {
  const { slug } = params;
  const result = await fetchData(slug);

  if (result?.notFound) {
    // Handle not found case
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

  return (
    <>
      {/* Render the rest of the page */}
      <ClientPage
        data={result?.props?.data}
        query={result?.props?.query}
        variables={result?.props?.variables}
      />
    </>
  );
}
