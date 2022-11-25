import CustomImage from "@components/Common/CustomImage";
import { convertDateTime } from "@utils/myUtils";
import Link from "next/link";
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
            <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-full overflow-hidden flex items-center justify-center">
              {/* <Image
                src={testImage}
                layout="responsive"
                width={768}
                height={768}
              /> */}
              <CustomImage
                maxWidth="768px"
                src={url}
                loader={imageLoader}
                alt={alt}
              />
            </div>
            <div className="absolute rounded-full bg-primary text-gray-50 text-center align-middle w-6 h-6 ring-1 xl:w-7 xl:h-7 xl:border-2 xl:border-white ring-white">
              {index}
            </div>
          </div>
        </Link>
      </div>

      {/**content */}
      <div className="">
        <div className="text-l break-words mb-2 cursor-pointer uppercase">
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
