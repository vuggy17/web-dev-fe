import ProductCard from "@components/Shop/ProductCard";
import React, { useState } from "react";

export default function Products({ productData }) {
  //   const [listProducts, setListProducts] = useState(productData);
  return (
    <>
      <ul className="grid  xxs:grid-cols-2 gap-4  mx-auto sm:grid-cols-3 md:gap-6 w-full lg:gap-12">
        {productData.map((item) =>
          item.is_publish ? (
            <li key={item.id}>
              <ProductCard product={item} />
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </>
  );
}
