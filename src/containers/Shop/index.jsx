import Banner from "@components/Banner";
import Brand from "@components/Brand";
import ProductCard from "@components/Shop/ProductCard";
import CategoryBar from "./ShopCategoryBar";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Products from "./Products";
import MultiRangeSlider from "../../components/Slider/MultiRangeSlider";
import { Dropdown } from "flowbite-react";
import Image from "next/image";
import placeHolderImage from "@public/images/official/others/san_pham.jpeg";
import { useRouter } from "next/router";

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

const query = (name, value) => {
  return `&${name}=${value}`;
};

function ShopContainer({ shopPageData }) {
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [sortOn, setSortOn] = useState(false);
  const { mainSlide, listProducts, currentCategory } = shopPageData;
  const [price, setPrice] = useState([0, 100]);
  const router = useRouter();
  const shopCategories = useSelector((state) => state.common.shopCategories);
  const [sortValue, setSortValue] = useState("name|ASC"); //name|<direction> or price|<direction>

  const redirectPage = useCallback((path) => {
    router.push(
      {
        pathname: `/shop/${path}`,
        query: { ...router.query },
      },
      undefined,
      { scroll: false }
    );
  }, []);

  console.log(router.pathname);

  const handleSort = useCallback((value) => {
    // construct query
    let queryString = "";
    queryString += query(sortValue.split("|")[0], sortValue.split("|")[1]);
    queryString += query("priceStart", price[0] * 1000);
    queryString += query("priceEnd", price[1] * 1000);
    queryString += query("page", 1);

    //routing api here
    router.push(
      {
        pathname: router.pathname,
        query: queryString,
      },
      null,
      { scroll: false }
    );
  }, []);

  return (
    <div className="mb-14  px-4 3xl:px-16">
      <div>
        <Brand />
      </div>
      <div
        className="mb-10 lg:mb-14"
        style={{ width: "100%", overflow: "hidden" }}
      >
        <Banner listBanners={mainSlide?.banners} />
      </div>

      {/* filter and category */}
      <div className="mb-8  text-textPrimary">
        {/* labels */}
        <div className="flex justify-between items-center w-full text-sm mb-2">
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
                  transform: categoryVisible ? "" : "rotate(180deg)",
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
          <div>
            {/* sort */}
            <span
              className="flex items-center cursor-pointer "
              onClick={() => setSortOn((on) => !on)}
            >
              <span className="mr-1">Sắp xếp</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 inline"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* filter's display zone */}
        <div
          className="duration-300 transition-all overflow-hidden bg-gray-50 "
          style={{
            height: categoryVisible || sortOn ? "auto" : 0,
          }}
        >
          {categoryVisible && (
            <div className="flex h-full px-4 pt-8">
              <div className="flex-1 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-1 md:mr-2 ">
                <div
                  className="mb-2 md:mb-0 px-2 flex items-center justify-center w-full duration-200 cursor-pointer hover:bg-[#f0e1d3] py-2 border-[0.5px] rounded border-solid border-[#7f4b19] border-opacity-70"
                  style={{
                    backgroundColor: currentCategory ?? "#f0e1d3",
                  }}
                  onClick={() => {
                    redirectPage("");
                  }}
                >
                  <p className="text-center">Tất cả</p>
                </div>
                {shopCategories.map((category) => (
                  <div
                    className="mb-2 md:mb-0 px-2 flex items-center justify-center w-full duration-200 cursor-pointer hover:bg-[#f0e1d3] py-2 border-[0.5px] rounded border-solid border-[#7f4b19] border-opacity-70"
                    style={{
                      backgroundColor:
                        currentCategory?.id === category.id ? "#f0e1d3" : "",
                    }}
                    onClick={() => {
                      redirectPage(category.path);
                    }}
                  >
                    <p className="text-center">{category.name}</p>
                  </div>
                ))}
              </div>
              <div className="w-[30%] overflow-hidden hidden md:block">
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
          )}

          {sortOn && (
            <div className="px-4 pt-8 pb-2">
              <MultiRangeSlider
                value={price}
                min={0}
                max={1000}
                onChange={(min, max) => setPrice(...[min, max])}
                onSortChange={(value) => setSortValue(value)}
              />
              <div className="flex justify-end border-t pt-2 ">
                <button
                  className="cursor-pointer px-6 py-2 bg-next-btn text-sm font-medium text-center hover:bg-gray-800 transition text-gray-100  duration-500 w-fit"
                  onClick={() => handleSort()}
                >
                  Áp dụng
                </button>
              </div>
            </div>
          )}
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
