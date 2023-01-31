import HPProductCard from "@components/Shop/HomePageProductCard";
import React, { useEffect } from "react";

export default function RelatedProduct({ products }) {
  if (products.length === 0) return null;
  return (
    <div>
      <div className="bg-secondary w-full flex justify-center items-center text-lg uppercase tracking-wide mb-8 px-4 h-11 ">
        <div>SẢN PHẨM TRONG BÀI VIẾT</div>
      </div>
      <ul className="grid xxs:grid-cols-2 gap-4  mx-auto sm:grid-cols-3 md:gap-6 w-full lg:gap-12">
        {products.map((item) =>
          item.is_publish ? (
            <li key={item.id}>
              <HPProductCard product={item} />
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}
