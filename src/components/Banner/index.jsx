import React from "react";
import MyCarousel from "./MyCarousel";

export default function Banner({ listBanners }) {
  return (
    <>
      <MyCarousel listBanners={listBanners || []} />
    </>
  );
}
