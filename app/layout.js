import { client } from "../tina/__generated__/client";
import Layout from "../components/layout/Layout";
import "../public/assets/css/style.css";
import "../public/assets/css/scroll-up-animation.css";
import "../public/assets/css/modal.css";
import "../public/assets/css/swiper-custom.css";
import ClientLayout from "./client-layout";

export const metadata = {
  title: "Solvative real",
  description: "Solvative real is a IT solutions provider",
};

export default async function RootLayout({ children }) {
  const globalQuery = await client.queries.global({
    relativePath: "global.mdx",
  });
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.4.0/animate.min.css"
        />
        <meta name="description" content="One of America’s Largest Private Companies challenged us to migrate them from an aging and traditional CMS to the new-age Salesforce Commerce Cloud to unlock powerful features. We Solved It." class="yoast-seo-meta-tag"/>
    <link rel="canonical" href="https://solvative.com/case-studies/commerce-cloud-sfra-migration-for-a-large-consumer-electronics-company/" class="yoast-seo-meta-tag"/>
    <meta property="og:locale" content="en_US" class="yoast-seo-meta-tag"/>
    <meta property="og:type" content="article" class="yoast-seo-meta-tag"/>
    <meta property="og:title" content="Innovative E-Commerce Strategies Drive Efficiency For One of America&#039;s Largest Private Companies" class="yoast-seo-meta-tag"/>
    <meta property="og:description" content="One of America’s Largest Private Companies challenged us to migrate them from an aging and traditional CMS to the new-age Salesforce Commerce Cloud to unlock powerful features. We Solved It." class="yoast-seo-meta-tag"/>
    <meta property="og:url" content="https://solvative.com/case-studies/commerce-cloud-sfra-migration-for-a-large-consumer-electronics-company/" class="yoast-seo-meta-tag"/>
    <meta property="og:site_name" content="Solvative" class="yoast-seo-meta-tag"/>
    <meta property="article:publisher" content="https://www.facebook.com/solvative/" class="yoast-seo-meta-tag"/>
    <meta property="article:modified_time" content="2024-08-01T13:02:11+00:00" class="yoast-seo-meta-tag"/>
    <meta property="og:image" content="https://solvative.com/wp-content/uploads/2023/08/salesforce-cc.png" class="yoast-seo-meta-tag"/>
    <meta name="twitter:card" content="summary_large_image" class="yoast-seo-meta-tag"/>
    <meta name="twitter:description" content="One of America’s Largest Private Companies challenged us to migrate them from an aging and traditional CMS to the new-age Salesforce Commerce Cloud to unlock powerful features. We Solved It." class="yoast-seo-meta-tag"/>
    <meta name="twitter:site" content="@solvative" class="yoast-seo-meta-tag"/>
    <meta name="twitter:label1" content="Est. reading time" class="yoast-seo-meta-tag"/>
      </head>

      <body>
        {globalQuery && (
          <Layout
            data={JSON.parse(JSON.stringify(globalQuery.data))}
            query={globalQuery.query}
            variables={globalQuery.variables}
          >
            {children}
          </Layout>
        )}
      </body>
    </html>
  );
}
