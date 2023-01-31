import HPProductCard from "@components/Shop/HomePageProductCard";
import React, { useEffect } from "react";

export default function RelatedProduct({ products }) {
  if (products.length === 0) return null;
  return (
    <div>
      <div className="bg-secondary w-full flex justify-center items-center text-lg uppercase tracking-wide mb-8 px-4 h-11 ">
        <div>CÓ THỂ BẠN THÍCH</div>
      </div>
      <ul className="sm:grid sm:grid-cols-2 xxs:gap-4 mx-auto md:grid-cols-3 lg:grid-cols-4 blockChọn lựa chủ đề">
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
