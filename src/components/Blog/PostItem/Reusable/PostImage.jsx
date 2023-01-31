import CustomImage from "@components/Common/CustomImage";
import { convertDateTime } from "@utils/myUtils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { imageLoader } from "src/app/services";

function PostImage({ media, time, path }) {
  const { url, alt } = media || {};

  return (
    <div className="relative cursor-pointer overflow-hidden w-full">
      <Link href={`/blogs/${path}`} passHref>
        <div className="transition duration-500 ease-in transform hover:scale-105 object-cover">
          <div className=" relative   border border-product-border w-full min-h-[192px] overflow-hidden aspect-w-square" style={{
            aspectRatio: "1/1"
          }}>
            <Image
              className='w-full h-full transition duration-300 ease-in transform hover:scale-110 '
              alt={alt}
              src={url || placeHolderImage}
              loader={url ? imageLoader : undefined}
              layout='fill'
              objectFit='cover'
            />
          </div>

        </div>
      </Link>
      <div className="absolute bg-gray-100 bg-opacity-80 top-10 text-xs p-2">
        {convertDateTime(time)}
      </div>
    </div>
  );
}

export default PostImage;
