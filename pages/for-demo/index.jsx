// import ProductDetail from "@containers/ProductDetail";
import AlertCommponent from "@components/Common/alert/AlertComponent";
import { useRouter } from "next/router";
import React from "react";

export default function ForDemo() {
  const router = useRouter();
  return (
    <div className="p-28">
      <AlertCommponent
        content={`"sửa rửa mặt" đã được thêm vào giỏ hàng`}
        btnText="XEM NGAY"
        btnCallback={() => {
          router.push("/cart");
        }}
        type="info"
      />
    </div>
  );
}
