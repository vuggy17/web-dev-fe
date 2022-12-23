import AboutmeBlock from "@components/AboutMeBox";
import Banner from "@components/Banner";
import BlogCategoryBar from "@components/Blog/BlogCategoryBar";
import BlogTagsBox from "@components/Blog/BlogTagsBox";
import LastestPostNav from "@components/Blog/LatestPostNav";
import SubWidget from "@components/Blog/SubcribeWidget";
import Brand from "@components/Brand";
import InforBlock from "@components/InfoBlock";
import TestimonialSlide from "@components/TestimonialSlide";
import React from "react";
import Products from "../Shop/Products";
import BlogArea from "./BlogsArea";
import DealOfTheWeek from "./DealOfTheWeek";

export default function HomepageContainer({ homepageData }) {
  const {
    tags,
    mainSlide,
    allBlogs,
    latestBlogs,
    productsDealOfWeek,
    testimonials,
    products
  } = homepageData || {};
  console.log('home page', homepageData)
  return (
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
        <div className="px-6 item md:max-w-3xl md:mx-auto lg:mx-0 lg:px-20 lg:max-w-full xl:px-0">
          <div className="mb-10 lg:mb-14">
            {/** Infor block va newsletter */}
            <div className="mb-10 lg:mb-14">
              <InforBlock />
            </div>
            <SubWidget />
          </div>
          <div className="lg:grid lg:grid-cols-12">
            <div className="mb-10 lg:col-span-9 lg:pr-10">
              {/* // TODO: fix this */}
              {products? <Products productData={products} />: null}
            {/* <BlogArea listBlogs={allBlogs || []} /> */}
            </div>
            <div className="lg:col-span-3">
              <div className="mb-16">
                <AboutmeBlock />
              </div>
              <div className="mb-16">
                <LastestPostNav listBlogs={latestBlogs || []} />
              </div>
              <div className="mb-16">
                <div className="w-full">
                  <div className="bg-secondary w-full text-center text-sm uppercase tracking-wide mb-16 px-4 py-3">
                    DANH MỤC BÀI VIẾT
                  </div>
                  <BlogCategoryBar scrollWhenRedirect={true} />
                </div>
              </div>
              <div className="mb-16">
                <BlogTagsBox listTags={tags || []} />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <DealOfTheWeek products={productsDealOfWeek || []} />
            </div>
            <div className="mb-10">
              <TestimonialSlide testimonials={testimonials} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
