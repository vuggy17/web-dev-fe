import CustomImage from "@components/Common/CustomImage";
import BrandImage from "@public/images/official/logo/DR DONG PHUONG - LOGO - FINAL WORK - BLACK.png";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { imageLoader } from "src/app/services";

function AboutmeBlock() {
  const aboutAuthor = useSelector((state) => state.common.aboutAuthor);
  return (
    <div className="w-full text-sm ">
      <div className="text-gray-800 flex flex-col items-center">
        <div className="bg-secondary w-full text-center uppercase tracking-wide mb-7 py-3">
          Chào các bạn !
        </div>
        <div className="w-52 lg:w-44 xl:w-56">
          <div className="rounded-full object-cover overflow-hidden  mb-7">
            <CustomImage
              alt="Bác sĩ Đông Phương"
              src={aboutAuthor?.avatar}
              loader={imageLoader}
              maxWidth="768px"
              maxHeight="768px"
            />
          </div>
        </div>
        {/* <div className="px-5 py-3">
          <CustomImage maxWidth="100px" src={BrandImage} />
        </div> */}
        <div className="text-center break-words w-10/12 lg:w-full mb-6">
          <p>{aboutAuthor?.description}</p>
        </div>
        <div className="cursor-pointer bg-next-btn max-w-md px-6 py-1 hover:bg-gray-800 transition duration-500">
          <Link href="/about-me" passHref>
            <div className="text-gray-100 text-center px-2 py-1">Về tôi</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutmeBlock;
