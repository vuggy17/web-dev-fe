import { convertDateTime } from "@utils/myUtils";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { imageLoader } from "src/app/services";

function Item({ postInfo, index }) {
  const { title, path, media, last_publish } = postInfo || {};
  const { url, alt } = media || {};
  return (
    <div className="flex items-center mb-4">
      {/**Image here */}
      <div className="cursor-pointer mr-4">
        <Link href={`/blogs/${path}`} passHref>
          <div className="flex relative">
            <div className="relative w-20 xl:w-20 rounded-full border border-product-border overflow-hidden  flex items-center justify-center" style={{
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
            <div
              className="absolute flex items-center justify-center rounded-full bg-next-primary text-next-btn text-gray-50 text-center align-middle w-6 h-6  xl:w-7 xl:h-7  "
              style={{
                fontSize: "0.8rem",
              }}
            >
              {index}
            </div>
          </div>
        </Link>
      </div>

      {/**content */}
      <div className="">
        <div className=" line-clamp-2 break-words mb-2 cursor-pointer uppercase">
          <Link href={`/blogs/${path}`} passHref>
            <div>{title}</div>
          </Link>
        </div>
        <div className="text-sm text-gray-700">
          {convertDateTime(last_publish)}
        </div>
      </div>
    </div>
  );
}

export default Item;
