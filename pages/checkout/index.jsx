import CheckoutContainer from "@containers/Checkout";
import React from "react";
import { NextSeo } from "next-seo";
import { BASE_URL_FE } from "@definitions/constants";

export default function Checkout() {
  return (
    <div>
      <NextSeo
        title="Hoàn tất đơn hàng"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/checkout`,
          title: "LUNI STORIES| Hoàn tất đơn hàng",
          description: "Hoàn tất đơn hàng",
          images: [
            {
              url: "hinh_thumbnail_mac_dinh",
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      <CheckoutContainer />
    </div>
  );
}
