import CartPageContainer from "@containers/CartPage";
import React from "react";
import { NextSeo } from "next-seo";
import { BASE_URL_FE } from "@definitions/constants";

export default function Cart() {
  return (
    <div>
      <NextSeo
        title="Giỏ Hàng"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/chinh-sach-doi-tra`,
          title: "DR ĐÔNG PHƯƠNG | Giỏ Hàng",
          description: "Giỏ Hàng",
          images: [
            {
              url: "hinh_thumbnail_mac_dinh",
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      <CartPageContainer />
    </div>
  );
}
