import FilterByTags from "@containers/FilterByTags";
import React from "react";
import { BASE_URL_FE } from "@definitions/constants";
import { NextSeo } from "next-seo";

export default function FilterByTagsPage() {
  return (
    <div>
      <NextSeo
        title="Tag"
        description="Mô tả trên google"
        openGraph={{
          type: "website",
          url: `${BASE_URL_FE}/tag`,
          title: "LUNI STORIES",
          description: "TAG",
          images: [
            {
              url: "hinh_thumbnail_mac_dinh",
              alt: "Bác sĩ Đông Phương",
            },
          ],
        }}
      />
      <FilterByTags />
    </div>
  );
}
