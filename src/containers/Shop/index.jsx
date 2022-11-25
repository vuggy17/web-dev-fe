import Banner from "@components/Banner";
import Brand from "@components/Brand";
import ProductCard from "@components/Shop/ProductCard";
import CategoryBar from "./ShopCategoryBar";
import React from "react";
import { useSelector } from "react-redux";
import Products from "./Products";

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

function ShopContainer({ shopPageData }) {
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
      <div className="px-2" style={{ margin: "auto", maxWidth: "1200px" }}>
        <div className="w-full mb-9">
          <CategoryBar currentCategory={currentCategory} />
        </div>
        {listProducts.length > 0 ? (
          <Products productData={listProducts} />
        ) : (
          <div className="text-center mb-10">Không có sản phẩm nào</div>
        )}
      </div>
    </div>
  );
}

export default ShopContainer;
