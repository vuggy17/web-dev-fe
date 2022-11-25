import Brand from "@components/Brand";
import AlertCommponent from "@components/Common/alert/AlertComponent";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { emptyCart } from "@redux/cartSlice";

export default function CheckoutSuccessContainer() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [checkoutAlert, setCheckoutAlert] = useState({
    isOpen: true,
    type: "success",
    content:
      "Cám ơn bạn đã đặt hàng! Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất",
    btnText: "TRANG CHỦ",
    btnCallback: () => {
      router.push("/");
    },
  });

  useEffect(() => {
    dispatch(emptyCart());
  }, []);

  return (
    <div>
      <div style={{ borderBottom: "1px solid #e9e9e9", marginBottom: "35px" }}>
        <Brand />
      </div>
      <div className="text-xl sm:text-2xl text-center">ĐẶT HÀNG THÀNH CÔNG</div>
      <div
        style={{
          margin: "auto",
          maxWidth: "1200px",
          paddingBottom: 112,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        <div className="py-10">
          <AlertCommponent {...checkoutAlert} />
        </div>
      </div>
    </div>
  );
}
