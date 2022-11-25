import SearchContainer from "@containers/Search";
import React from "react";
import { NextSeo } from "next-seo";
import { BASE_URL_FE } from "@definitions/constants";
export default function SearchPage() {
  return (
    <div>
      <NextSeo
        title="Tìm kiếm"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/search`,
          title: "DR ĐÔNG PHƯƠNG",
          description: "Tìm kiếm",
          images: [
            {
              url: "hinh_thumbnail_mac_dinh",
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      <SearchContainer />
    </div>
  );
}
