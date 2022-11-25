import landingApi from "@api/landingApi";
import Brand from "@components/Brand";
import LoadingStyle1 from "@components/Common/LoadingComponent/style1";
import RightSideBar from "@containers/RightSideBar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BlogArea from "./BlogsArea";
import ProductsArea from "./ProductsArea";
import SearchForm from "./SearchForm";

export default function SearchContainer() {
  const router = useRouter();
  const { keyword } = router.query;

  const [listBlogs, setListBlogs] = useState([]);
  const [listProducts, setListProducts] = useState([]);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(false);

  async function getBlogs() {
    setLoadingBlog(true);
    let blogs = await landingApi.getBlogsByKeyword(keyword);
    setListBlogs(blogs);
    setLoadingBlog(false);
  }
  async function getProducts() {
    setLoadingProduct(true);
    let products = await landingApi.getProductsByKeyword(keyword);
    setListProducts(products);
    setLoadingProduct(false);
  }
  useEffect(() => {
    getBlogs();
    getProducts();
  }, [keyword]);
  return (
    <div>
      <div>
        <Brand />
      </div>

      <div style={{ margin: "auto", maxWidth: "1200px" }}>
        <div className="px-6 item mx-0 lg:px-20 w-full xl:px-0">
          <div className="lg:grid lg:grid-cols-12">
            <div className="mb-10 lg:col-span-9 lg:pr-10 md:pr-10">
              {/* <BlogArea listBlogs={allBlogs || []} /> */}
              <div className="bg-secondary w-full text-center text-sm uppercase tracking-wide mb-10 px-4 py-3">
                {keyword ? `KẾT QUẢ TÌM KIẾM CHO: ${keyword}` : "TÌM KIẾM"}
              </div>
              <div className="mb-10">
                <SearchForm
                  keyword={keyword}
                  onSearch={(keyword) => {
                    router.push(
                      {
                        pathname: "/search",
                        query: { keyword },
                      },
                      undefined,
                      { scroll: true }
                    );
                  }}
                />
              </div>

              {listBlogs.length === 0 &&
              listProducts.length === 0 &&
              keyword ? (
                <div className="w-full hover:text-textPrimary transition-all cursor-pointer py-5 ">
                  Rất tiếc, không tìm thấy bài viết hoặc sản phẩm nào phù hợp
                  với từ khóa của bạn !
                </div>
              ) : (
                ""
              )}
              <div className="pt-5">
                {loadingBlog ? (
                  <div className="justify-center flex">
                    <LoadingStyle1 />
                  </div>
                ) : (
                  <BlogArea listBlogs={listBlogs || []} />
                )}
              </div>
              {/* {
                                listProducts.length > 0 ?
                                    <div className="bg-secondary w-full text-center text-sm uppercase tracking-wide mb-5 px-4 py-3">
                                        CÓ THỂ BẠN THÍCH
                                    </div> : ""
                            } */}
              <div className="pt-5">
                {loadingProduct ? (
                  <div className="justify-center flex">
                    <LoadingStyle1 />
                  </div>
                ) : (
                  <ProductsArea products={listProducts} />
                )}
              </div>
            </div>
            <div className="lg:col-span-3">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
