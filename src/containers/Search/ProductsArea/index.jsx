import ProductCard from "@components/Shop/ProductCard";
import React, { useEffect } from "react";

export default function ProductsArea({ products }) {
  if (products.length === 0) return null;
  return (
    <div>
      <ul className="grid xxs:grid-cols-2 gap-4  mx-auto sm:grid-cols-3 md:gap-6 w-full lg:gap-12">
        {products.map((item) =>
          item.is_publish ? (
            <li key={item.id}>
              <ProductCard product={item} />
            </li>
          ) : (
            ""
          )
        )}
      </ul>
    </div>
  );
}
