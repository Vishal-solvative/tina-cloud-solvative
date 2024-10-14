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
        <meta name="description" content="One of America’s Largest Private Companies challenged us to migrate them from an aging and traditional CMS to the new-age Salesforce Commerce Cloud to unlock powerful features. We Solved It." />
    <link rel="canonical" href="https://solvative.com/case-studies/commerce-cloud-sfra-migration-for-a-large-consumer-electronics-company/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Innovative E-Commerce Strategies Drive Efficiency For One of America&#039;s Largest Private Companies" />
    <meta property="og:description" content="One of America’s Largest Private Companies challenged us to migrate them from an aging and traditional CMS to the new-age Salesforce Commerce Cloud to unlock powerful features. We Solved It." />
    <meta property="og:url" content="https://solvative.com/case-studies/commerce-cloud-sfra-migration-for-a-large-consumer-electronics-company/" />
    <meta property="og:site_name" content="Solvative" />
    <meta property="article:publisher" content="https://www.facebook.com/solvative/" />
    <meta property="article:modified_time" content="2024-08-01T13:02:11+00:00" />
    <meta property="og:image" content="https://solvative.com/wp-content/uploads/2020/06/solvative-preview.png"/>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:description" content="One of America’s Largest Private Companies challenged us to migrate them from an aging and traditional CMS to the new-age Salesforce Commerce Cloud to unlock powerful features. We Solved It." />
    <meta name="twitter:site" content="@solvative" />
    <meta name="twitter:label1" content="Est. reading time" />
    <meta name="twitter:image" content="https://solvative.com/wp-content/uploads/2020/06/solvative-preview.png"/>

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
