import CustomImage from "@components/Common/CustomImage";
import { timeFromNow } from "@utils/parseTime";
import Image from "next/image";
import React from "react";
import { imageLoader } from "src/app/services";

function Comment({ name, time, content, avatar, type }) {
  return (
    <div className="flex w-full text-gray-600 mb-6">
      <div className="w-1/6 mr-1 sm:w-auto sm:mr-4">
        <div className="w-10/12 sm:w-14 rounded-full overflow-hidden">
          {type === "admin" ? (
            <CustomImage src={avatar} loader={imageLoader} maxHeight="300px" />
          ) : (
            <Image
              alt="user"
              src={avatar}
              layout="responsive"
              width={300}
              height={300}
            />
          )}
        </div>
      </div>
      <div className="text-sm w-full">
        <div className="mb-2">
          <span className="font-semibold mr-2">{name}</span>
          <span className="text-xs mr-2 font-light">{timeFromNow(time)}</span>
          <span className="hidden text-xs uppercase bg-primary text-white px-2 py-0 rounded-sm">
            author
          </span>
        </div>
        <div className="">
          <p className="text-xs leading-6">{content}</p>
        </div>
        <div className="flex justify-end w-full">
          <div className="uppercase text-xs tracking-wide underline cursor-pointer hover:no-underline">
            {/* reply */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
