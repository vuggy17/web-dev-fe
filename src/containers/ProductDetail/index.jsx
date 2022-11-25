import Brand from "@components/Brand";
import AlertCommponent from "@components/Common/alert/AlertComponent";
import React, { useEffect, useState } from "react";
import AdditionalInfo from "./AdditionalInfor";
import ProductImages from "./ProductImages";
import ProductSumary from "./ProductSummary";
import RelatedProduct from "./RelatedProducts/index";

function ProductDetail({ productDetailPageData }) {
  const { productData, relatedProducts } = productDetailPageData;
  const [cartAlert, setCartAlert] = useState({ isOpen: false });

  useEffect(() => {
    setCartAlert({ isOpen: false });
  }, [productDetailPageData]);

  if (!productData) return;
  return (
    <div>
      <div>
        <Brand />
      </div>
      <div style={{ margin: "auto", maxWidth: "1200px" }}>
        <div className="p-4 m-auto text-gray-700 px-2">
          <div id="cart-alert" className="mb-10">
            <AlertCommponent {...cartAlert} />
          </div>
          <div className="md:flex mb-14">
            <div className="mb-8 md:mr-6 md:w-1/2 lg:mr-10">
              <ProductImages
                listImages={[
                  { url: productData.thumbnail, alt: "" },
                  ...(productData.media || []),
                ]}
              />
            </div>
            <div className="md:w-1/2">
              <ProductSumary
                setCartAlert={setCartAlert}
                productData={productData}
              />
            </div>
          </div>
          <div className="mb-14">
            <AdditionalInfo productData={productData} />
          </div>
          <div>
            <RelatedProduct products={relatedProducts || []} />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductDetail;
