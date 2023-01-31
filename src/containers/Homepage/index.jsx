import AboutmeBlock from "@components/AboutMeBox";
import Banner from "@components/Banner";
import BlogCategoryBar from "@components/Blog/BlogCategoryBar";
import BlogTagsBox from "@components/Blog/BlogTagsBox";
import LastestPostNav from "@components/Blog/LatestPostNav";
import Brand from "@components/Brand";
import InforBlock from "@components/InfoBlock";
import TestimonialSlide from "@components/TestimonialSlide";
import React, { useRef, useEffect } from "react";
import Products from "../Shop/Products";
import BlogArea from "./BlogsArea";
import DealOfTheWeek from "./DealOfTheWeek";
import SuggestedBlogs from "./SuggestedBlog";
import Image from "next/image";
import Link from 'next/link'
// TODO: remove this
import staticNewColelectionImg from "@public/images/official/thumbnail/summer-2023.jpg";

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
  const marquee = useRef();

  useEffect(() => {
    marquee.current?.start();
    return () => {
      marquee.current?.stop();
    }
  },)

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
      <div style={{ margin: "auto" }} className="px-4 3xl:px-16">
        {/* category */}
        <section className="mb-10 lg:mb-14">
          {/** Infor block va newsletter */}
          <InforBlock />



          {/* <section>
            <SubWidget />
          </section> */}
        </section>

        {/* auto scrolling anouncement */}
        <div style={{
          backgroundImage: "url('/images/official/others/scroll-banner-bg.jpg')", objectFit: "cover",
          backgroundPosition: "right"
        }}
          className="lg:max-w-[90%] mx-auto mb-12">
          <marquee ref={marquee} scrollAmount="12" className="text-[#0b0505] h-16 leading-64 text-xl uppercase" >
            <span className="mr-[100px]">
              <b>Bộ sưu tập mới</b>
            </span>
            <span className=" mr-[100px]">
              <b>Tiết kiệm đến 50%</b>
            </span>
            <span className=" mr-[100px]">
              <b>Chỉ trong 7 ngày</b>
            </span>
            <span className=" mr-[100px]">
              <b>Chọn ngay món quà ưng ý</b>
            </span>
            <span className="mr-[100px]">
              <b>Bộ sưu tập mới</b>
            </span>
            <span className=" mr-[100px]">
              <b>Tiết kiệm đến 50%</b>
            </span>
            <span className=" mr-[100px]">
              <b>Chỉ trong 7 ngày</b>
            </span>
            <span className=" mr-[100px]">
              <b>Chọn ngay món quà ưng ý</b>
            </span>
          </marquee>
        </div>

        {/* new collection */}
        <section className="my-16">
          <h3 className="font-handwriting text-5xl text-center text-primary mb-3">
            Bộ sưu tập của năm
          </h3>
          <div className=" h-[663px] relative">
            {/* TODO: replace null with new collection image data from api */}
            <Image
              alt={"new collection"}
              src={null || staticNewColelectionImg}
              loader={null ? imageLoader : undefined}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </section>

        {/* our suggest */}
        <section className=" text-center">
          <h3 className="font-handwriting text-5xl text-primary mb-12">
            Sản phẩm dành cho bạn
          </h3>
          <DealOfTheWeek products={productsDealOfWeek || []} />

          <span className="cursor-pointer inline-block border-gray-400 border-[1px]  px-6 py-2  text-sm font-medium  hover:bg-gray-800 transition hover:text-gray-100  duration-500">
            <Link className="" href="shop"
              passHref
            >Xem thêm</Link>
          </span>
        </section>

        {/* deals */}
        <section className="pt-[70px] pb-[90px] my-4 bg-[#f8f0e9]">
          <ul className="w-full grid grid-cols-3 gap-4 my-6">
            <li className="place-content-center grid justify-items-center relative">
              <img class="image-sevice" srcset="" src="//cdn.shopify.com/s/files/1/0608/3054/8189/files/oic-7.webp?v=1649929729" sizes="(min-width: 1200px) 550px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" loading="lazy" width="44" height="40" />
              <p className="text-center text-textPrimary text-xs m-2">Hỗ trợ 24/7 </p>
              <div className="absolute right-0 top-0 h-full w-px bg-[#e1e1e1]" />
            </li>
            <li className=" relative place-content-center grid justify-items-center ">
              <img class="image-sevice" srcset="" src="//cdn.shopify.com/s/files/1/0608/3054/8189/files/oic-6.webp?v=1649929729" sizes="(min-width: 1200px) 550px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" loading="lazy" width="45" height="36"></img>
              <p className="text-center text-textPrimary text-xs m-2">Đồng giá vận chuyển toàn quốc</p>
              <div className="absolute right-0 top-0 h-full w-px bg-[#e1e1e1]" /> </li>
            <li className=" place-content-center grid justify-items-center ">
              <img class="image-sevice" srcset="" src="//cdn.shopify.com/s/files/1/0608/3054/8189/files/oic-5.webp?v=1649929729" sizes="(min-width: 1200px) 550px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)" alt="" loading="lazy" width="45" height="45" />   <p className="text-center text-textPrimary text-xs m-2">Miễn Phí đổi trả 30 ngày</p>
            </li>
          </ul>
        </section>

        {/* blog */}
        <section className="py-16">
          <h3 className="font-handwriting text-5xl text-center text-primary mb-12">
            Cập nhật xu thế mới nhất từ chúng tôi
          </h3>
          <SuggestedBlogs blogs={latestBlogs} />
        </section>
      </div>
    </div>
  );
}

//         {/* grid san pham  */}

// <div className="lg:grid lg:grid-cols-12">
// <div className="mb-10 lg:col-span-9 lg:pr-10">
//   {/* // TODO: fix this */}
//   {products ? <Products productData={products} /> : null}
//   {/* <BlogArea listBlogs={allBlogs || []} /> */}
// </div>

// {/* right collumn */}
// <div className="lg:col-span-3">
//   <div className="mb-16">
//     <AboutmeBlock />
//   </div>
//   <div className="mb-16">
//     <LastestPostNav listBlogs={latestBlogs || []} />
//   </div>
//   <div className="mb-16">
//     <div className="w-full">
//       <div className="bg-secondary w-full text-center text-sm uppercase tracking-wide mb-16 px-4 py-3">
//         DANH MỤC BÀI VIẾT
//       </div>
//       <BlogCategoryBar scrollWhenRedirect={true} />
//     </div>
//   </div>
//   <div className="mb-16">
//     <BlogTagsBox listTags={tags || []} />
//   </div>
// </div>
// </div>
// <div>
// <div className="mb-10">

// </div>
// <div className="mb-10">
//   <TestimonialSlide testimonials={testimonials} />
// </div>
// </div>