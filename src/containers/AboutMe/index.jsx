import Brand from "@components/Brand";
import CustomImage from "@components/Common/CustomImage";
import React from "react";
import { imageLoader } from "src/app/services";
import BrandImage from "@public/images/official/logo/DR DONG PHUONG - LOGO - FINAL WORK - BLACK.png";
export default function AboutmeContainer({ aboutmeData }) {
  return (
    <div className="pb-16">
      <div style={{ borderBottom: "1px solid #e9e9e9", marginBottom: "35px" }}>
        <Brand />
      </div>
      <div className="px-10" style={{ margin: "auto", maxWidth: "1200px" }}>
        <h1 className="text-center text-2xl pt-10 pb-20 ">VỀ TÔI</h1>
        <div className="flex flex-col-reverse gap-10 sm:grid sm:grid-cols-2">
          <div className="leading-7 text-md flex items-center">
            <div>
              <div className="flex-1">
                <div dangerouslySetInnerHTML={{ __html: aboutmeData?.about }} />
              </div>
              {/* <div className="flex justify-center mt-10">
                <CustomImage maxWidth="300px" src={BrandImage} />
              </div> */}
            </div>
          </div>

          <div className="flex flex-col sm:mb-0 mb-10">
            <div className="">
              <CustomImage
                src={aboutmeData?.avatar}
                alt={aboutmeData?.name}
                loader={imageLoader}
                maxWidth="100%"
              />
            </div>
            {/* <div className="h-10 text-center flex items-center bg-f7f7f7 italic text-textSecondary">
              <p className="w-full text-center">Xin chào các bạn</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
