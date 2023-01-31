import Banner from "@components/Banner";
import BlogCategoryBar from "@components/Blog/BlogCategoryBar";
import Brand from "@components/Brand/index";
import TestimonialSlide from "@components/TestimonialSlide";
import React from "react";
import BlogArea from "./BlogArea";

export default function BlogPageContainer({ blogpageData }) {
  const {
    tags,
    mainSlide,
    allBlogs,
    latestBlogs,
    currentCategory,
    testimonials,
  } = blogpageData || {};

  return (
    <>
      <div style={{borderBottom: "1px solid  rgb(233, 233, 233)", marginBottom: 35}}></div>
      <div>
        <div>
          <Brand />
        </div>
        <div
          className="mb-10 lg:mb-14"
          style={{ width: "100%", overflow: "hidden" }}
        >
          <Banner listBanners={mainSlide?.banners || []} />
        </div>
        <div style={{ margin: "auto", maxWidth: "1200px" }}>
          <div className="px-6 item mx-0 lg:px-20 w-full xl:px-0">
            {/* <div className="bg-secondary w-full text-center uppercase tracking-wide mb-9 py-3">
              TẤT CẢ BÀI VIẾT
            </div> */}
            <div className="w-full mb-9">
              <BlogCategoryBar
                currentCategory={currentCategory}
                title="Chọn lựa chủ đề"
                scrollWhenRedirect={false}
              />
            </div>
            <div className="lg:flex">
              <div className="mb-10 lg:flex-5 w-full">
                {(allBlogs || []).length > 0 ? (
                  <BlogArea listBlogs={allBlogs || []} />
                ) : (
                  <div className="text-center mb-10">
                    Chưa có bài viết nào trong mục này !
                  </div>
                )}
              </div>
              {/* <div className="lg:pl-6 lg:flex-1">
                <div className="mb-16">
                  <AboutmeBlock />
                </div>
                <div className="mb-16">
                  <LastestPostNav listBlogs={latestBlogs || []} />
                </div>
                <div className="mb-16">
                  <BlogTagsBox listTags={tags || []} />
                </div>
              </div> */}
            </div>
            <div>
              <div className="mb-10">
                <TestimonialSlide testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
