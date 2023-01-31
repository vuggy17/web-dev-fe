import Banner from "@components/Banner";
import Brand from "@components/Brand";
import ProductCard from "@components/Shop/ProductCard";
import CategoryBar from "./ShopCategoryBar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Products from "./Products";
import MultiRangeSlider from "../../components/Slider/MultiRangeSlider";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import placeHolderImage from "@public/images/official/others/san_pham.jpeg";

const testData = [
  {
    id: 0,
    title: "Sua rua mat",
    price: 300000,
    salePrice: 200000,
  },
  {
    id: 1,
    title: "Tonner",
    price: 1000000,
    salePrice: null,
  },
  {
    id: 2,
    title: "Bong tay trang",
    price: 300000,
    salePrice: 200000,
  },
  {
    id: 3,
    title: "Mat na tu nhien",
    price: 40000,
    salePrice: null,
  },
];

// 10 japanese city names
const cityNames = [
  "Tokyo",
  "Osaka",
  "Kyoto",
  "Fukuoka",
  "Kobe",
  "Nagoya",
  "Sapporo",
  "Kawasaki",
  "Saitama",
  "Chiba",
];

function ShopContainer({ shopPageData }) {
  const [priceVisible, setPriceVisible] = useState(false);
  const [categoryVisible, setCategoryVisible] = useState(false);
  const { mainSlide, listProducts, currentCategory } = shopPageData;
  return (
    <div className="mb-14">
      <div>
        <Brand />
      </div>
      <div
        className="mb-10 lg:mb-14"
        style={{ width: "100%", overflow: "hidden" }}
      >
        <Banner listBanners={mainSlide?.banners} />
      </div>
      {/* <div className="px-2" style={{ margin: "auto", maxWidth: "1200px" }}>
        <div className="w-full flex gap-3 mb-9">
          <CategoryBar currentCategory={currentCategory} />
        </div>

        <div className="relative w-fit">
          <div
            onClick={() => {
              setPriceVisible(!priceVisible);
            }}
            className="cursor-pointer py-3 pl-5 pr-5 flex justify-between items-center"
          >
            Price
            <i
              style={priceVisible ? { transform: "rotate(90deg)" } : {}}
              className={`bx bx-chevron-right transition-all duration-100 `}
            />
          </div>
          <div
            style={
              priceVisible
                ? { opacity: 1, transform: "translateY(0px)" }
                : {
                    opacity: 0,
                    transform: "translateY(-50px)",
                    pointerEvents: "none",
                  }
            }
            className={`absolute z-10 top-full sm:w-96 w-full  shadow-lg left-0 duration-100  transition-all`}
          >
            <MultiRangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) =>
                console.log(`min = ${min}, max = ${max}`)
              }
            />
          </div>
        </div>
      </div> */}

      {/* filter and category */}
      <div className="mb-8 ">
        <div>
          <div className="flex justify-between w-full text-sm mb-2">
            <div className="flex gap-4">
              <span
                className="align-baseline cursor-pointer hover:text-black"
                onClick={() => setCategoryVisible((visible) => !visible)}
              >
                <span className="mr-1"> Loại sản phẩm</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-4 h-4 inline duration-200"
                  style={{
                    transform: categoryVisible ? "rotate(180deg)" : "",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
              <span onClick={() => setPriceVisible((visible) => !visible)}>
                Giá
              </span>
            </div>
            <div>
              <span>
                {/* icon */}
                <span className=" align-baseline">
                  <span className="mr-2">Sắp xếp</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div
          className="duration-300 transition-all overflow-hidden bg-gray-100"
          style={{
            height: categoryVisible ? "auto" : 0,
          }}
        >
          <div className="flex h-full">
            <div className="flex-1 grid grid-cols-5 grid-rows-none">
              {cityNames.map((cityName) => (
                <div className=" px-2 flex items-center justify-center w-full duration-200 cursor-pointer hover:bg-gray-100 py-2">
                  <p className="text-center">{cityName}</p>
                </div>
              ))}
            </div>
            <div className="w-[30%] overflow-hidden p-4">
              <div className="relative h-[200px]  ">
                <Image
                  className="w-full h-full "
                  alt={"category img"}
                  src={placeHolderImage}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {listProducts.length > 0 ? (
        <Products productData={listProducts} />
      ) : (
        <div className="text-center mb-10">Không có sản phẩm nào</div>
      )}
    </div>
  );
}

export default ShopContainer;
