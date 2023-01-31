import { fetchingPageData } from "@api/fetchingPageData";
import BlogPageContainer from "@containers/BlogPage";
import { NextSeo } from "next-seo";
import React from "react";
import { BASE_URL_FE } from "@definitions/constants";

export default function Blogs({ blogpageData }) {
  return (
    <>
      <NextSeo
        title="Bài Viết"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/blogs`,
          title: "LUNI STORIES| BÀI VIẾT",
          description:
            "Cung cấp những kiến thức chuẩn và đầy đủ để khách hàng có thể hiểu hơn về kiến thức làm đẹp",
          images: [
            {
              url: `${BASE_URL_FE}/images/official/others/woman-visiting-cosmetologist-making-rejuvenation-procedures_1303-26055.jpg.webp`,
              alt: "Cung cấp những kiến thức chuẩn và đầy đủ để khách hàng có thể hiểu hơn về kiến thức làm đẹp",
            },
          ],
        }}
      />
      <BlogPageContainer blogpageData={blogpageData} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetchingPageData.blogpage();
  return {
    props: {
      blogpageData: res,
    },
    revalidate: 60,
  };
}
