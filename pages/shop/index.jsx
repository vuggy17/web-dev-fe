import { fetchingPageData } from "@api/fetchingPageData";
import ShopContainer from "@containers/Shop";
import { NextSeo } from "next-seo";
import React from "react";
import { BASE_URL_FE } from "@definitions/constants";

export default function Shop({ shopPageData }) {
  return (
    <div>
      <NextSeo
        title="Shop"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/shop`,
          title: "DR ĐÔNG PHƯƠNG | SHOP",
          description: "Nơi cung cấp các sản phẩm chính hãng giá tốt nhất ",
          images: [
            {
              url: `${BASE_URL_FE}/images/official/others/front-view-skin-oil-droppers-composition_23-2148761423.jpg (1).webp`,
              alt: "Nơi cung cấp các sản phẩm chính hãng giá tốt nhất",
            },
          ],
        }}
      />
      <ShopContainer shopPageData={shopPageData} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetchingPageData.shopPage();
  return {
    props: {
      shopPageData: res,
    },
    revalidate: 60,
  };
}
