import React, { ReactElement } from "react";
import Image from "next/image";
import { BannerModel } from "@definitions/definitions";
import { BASE_URL_IMAGE } from "@definitions/constants";

interface Props {
  banner: BannerModel;
}

export default function CardItem({ banner }: Props): ReactElement {
  return (
    <div className="sm:mx-5 shadow-lg p-10 my-5">
      <div className="flex  flex-col ">
        <div className="mx-auto my-auto px-5 pb-5">
          <Image
            src={`${BASE_URL_IMAGE}${banner?.media?.url || "/undefine"}`}
            width="200"
            height="200"
            objectFit="cover"
            alt={banner.media?.alt}
          />
        </div>
        <div className="flex-1 text-center leading-8">
          <p className="text-lg font-bold text-primary">{banner.title}</p>
          <p className="text-textPrimary">{banner.sub_title}</p>
          <p className="italic text-gray-500">{banner.content}</p>
        </div>
      </div>
    </div>
  );
}
