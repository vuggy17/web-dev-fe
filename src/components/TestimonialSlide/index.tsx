import SliderWrapper from "@components/Common/CustomKeenSlider/SliderWrapper";
import { BannerModel, TestimonialModel } from "@definitions/definitions";
import React, { ReactElement } from "react";
import CardItem from "./CardItem";
import styles from "./style.module.scss";

interface Props {
  testimonials: TestimonialModel;
}

export default function TestimonialSlide({
  testimonials,
}: Props): ReactElement {
  const { banners } = testimonials || {};

  if (!testimonials) return <div></div>;

  return (
    <div className="w-full">
      <div className="bg-secondary w-full flex justify-center text-center items-center text-sm  sm:text-lg uppercase tracking-wide mb-8 px-4 h-11 py-2">
        <div>NHẬN XÉT CỦA KHÁCH HÀNG</div>
      </div>
      <div className={`${styles.container} `}>
        <SliderWrapper>
          {banners.map((banner: BannerModel) => (
            <CardItem key={banner.id} banner={banner} />
          ))}
        </SliderWrapper>
        <div className={`${styles.leftEdge} sm:visible invisible`}></div>
        <div className={`${styles.rightEdge} sm:visible invisible`}></div>
      </div>
    </div>
  );
}
