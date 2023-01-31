import React from "react";
import PropTypes from "prop-types";
import InforItem from "./InforBlockItem/InforItem";
import imageTest from "@public/images/template/post/post1-1024x653.jpg";

// testing
const itemCate = [
  {
    id: 4,
    title: "BST mới",
    image: "/images/official/thumbnail/new-collection.jpg",
    url: "./shop",
  }, {
    id: 0,
    title: "Sản phẩm",
    image: "/images/official/others/san_pham.jpeg",
    url: "./shop",
  },

  {
    id: 1,
    title: "Dịch vụ",
    image: "/images/official/others/tu_van.jpeg",
    url: "./about-me",
  },
  {
    id: 2,
    title: "Tin tức",
    image: "/images/official/others/tin_tuc.jpeg ",
    url: "./blogs",
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
    <div className="w-full md:flex md:justify-around md:px-0 md:gap-4 ">
      {itemCate.map((item) => (
        <div
          key={item.id}
          className="mb-4 md:w-full md:mb-0"
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
