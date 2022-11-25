import CustomImage from "@components/Common/CustomImage";
import { convertDateTime } from "@utils/myUtils";
import Link from "next/link";
import React from "react";
import { imageLoader } from "src/app/services";

function PostImage({ media, time, path }) {
  const { url, alt } = media || {};

  return (
    <div className="relative cursor-pointer overflow-hidden w-full">
      <Link href={`/blogs/${path}`} passHref>
        <div className="transition duration-500 ease-in transform hover:scale-105 object-cover">
          {/* <Image
            alt={alt}
            src={url ? `/upload/${url}` : `/qDmaPwS.jpg`}
            layout="responsive"
            // objectFit="contain"
            loader={imageLoader}
            // objectFit="cover"
            width={1028}
            height={720}
          /> */}
          <CustomImage
            alt={alt}
            loader={imageLoader}
            src={url ? `${url}` : null}
          />
        </div>
      </Link>
      <div className="absolute bg-gray-100 bg-opacity-80 top-10 text-xs p-2">
        {convertDateTime(time)}
      </div>
    </div>
  );
}

export default PostImage;
