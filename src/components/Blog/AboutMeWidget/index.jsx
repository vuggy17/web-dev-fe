import { imageLoader } from "@app/services";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

function AboutMeWidget() {
  const aboutAuthor = useSelector((state) => state.common.aboutAuthor);
  // if (!aboutAuthor || (aboutAuthor || []).length === 0) return <div></div>;
  if (aboutAuthor.length === 0) return <div></div>;
  return (
    //Sua width thanh full khi ghep lai!
    //Tham khao ae cai tracking wide the co on ko
    <div
      style={{ backgroundColor: "#f7f7f7" }}
      className=" py-1 w-full tracking-wide"
    >
      <div className="flex flex-col items-center m-4 ring-1 ring-gray-200 p-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-1">
          <Image
            loader={imageLoader}
            src={aboutAuthor?.avatar || "./images/official/logo/logo-white.png"}
            width={764}
            height={764}
            objectFit="cover"
          />
        </div>
        <div className="mb-2">
          <h4 className="uppercase text-2xl">{aboutAuthor?.name}</h4>
        </div>
        <div className="w-8/12 mb-2">
          <p className="break-words text-center text-gray-700">
            {aboutAuthor?.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeWidget;
