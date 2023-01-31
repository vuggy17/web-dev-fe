import React, { useState } from "react";
import HPProductCard from "../../../components/Shop/HomePageProductCard";

export default function Products({ productData }) {
  //   const [listProducts, setListProducts] = useState(productData);
  return (
    <>
      <ul className="sm:grid sm:grid-cols-2 xxs:gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4 block">
        {productData.map((item) =>
          item.is_publish ? (
            <li key={item.id}>
              <HPProductCard product={item} />
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </>
  );
}
