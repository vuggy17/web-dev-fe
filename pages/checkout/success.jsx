import React, { useEffect } from "react";
import CheckoutSuccessContainer from "../../src/containers/CheckoutSuccess";
import { NextSeo } from "next-seo";
import { BASE_URL_FE } from "@definitions/constants";

export default function CheckoutSuccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NextSeo
        title="Đặt hàng thành công"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/checkout/success`,
          title: "DR ĐÔNG PHƯƠNG | Đặt hàng thành công",
          description: "Đặt hàng thành công",
          images: [
            {
              url: "hinh_thumbnail_mac_dinh",
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      <CheckoutSuccessContainer />
    </div>
  );
}
