import React from "react";
import PropTypes from "prop-types";
import InforItem from "./InforBlockItem/InforItem";
import imageTest from "@public/images/template/post/post1-1024x653.jpg";

// testing
const itemCate = [
  {
    id: 0,
    title: "Bài viết",
    image: "/images/official/navigate/9.jpg",
    url: "./blogs",
  },
  {
    id: 1,
    title: "Sản phẩm",
    image: "/images/official/navigate/7.webp",
    url: "./shop",
  },
  {
    id: 2,
    title: "Về tôi",
    image: "/images/official/navigate/8.jpg",
    url: "./about-me",
  },
];
// const alt = "about";
// const imgSrc = imageTest;

// objec gom hinh anh va title
InforItem.propTypes = {
  inforImageAndText: PropTypes.array,
};

function InforBlock() {
  return (
    <div className="w-full md:flex md:justify-around md:px-0 ">
      {itemCate.map((item) => (
        <div
          key={item.id}
          className={`mb-4 md:w-full md:mb-0
        ${item.id !== itemCate.length - 1 ? "md:mr-14 lg:mr-16" : ""}`}
        >
          <InforItem
            url={item.url}
            inforImage={item.image}
            inforTitle={item.title}
          />
        </div>
      ))}
    </div>
  );
}

export default InforBlock;
