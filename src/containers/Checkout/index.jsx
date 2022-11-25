import landingApi from "@api/landingApi";
import Brand from "@components/Brand";
import AlertCommponent from "@components/Common/alert/AlertComponent";
import { calcCartCost } from "@redux/cartSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InfoForm from "./InfoForm";
import OrderInfo from "./OrderInfo/OrderInfo";

export default function CheckoutContainer() {
  const cart = useSelector((state) => state.cart);
  const router = useRouter();
  const { total, cartItems } = calcCartCost(cart.cartItems);
  const [checkoutAlert, setCheckoutAlert] = useState({ isOpen: false });
  async function handleCheckout(data) {
    const items = cartItems.map((e) => {
      const { product_id, variant_id, number } = e;
      return { product_id, variant_id, number };
    });

    const payload = { ...data, items };
    try {
      const res = await landingApi.postOrder(payload);
      if (res.data) {
        router.push("/checkout/success");
      }
    } catch (error) {
      setCheckoutAlert({
        isOpen: true,
        type: "error",
        content: error.response.data.error,
      });
    } finally {
    }
  }

  return (
    <div>
      <div style={{ borderBottom: "1px solid #e9e9e9", marginBottom: "35px" }}>
        <Brand />
      </div>
      <div className="text-xl sm:text-2xl mb-5 text-center">THANH TOÁN</div>
      <div
        style={{
          margin: "auto",
          maxWidth: "1200px",
          paddingBottom: 112,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        {checkoutAlert.isOpen ? (
          <div className="py-10">
            <AlertCommponent {...checkoutAlert} />
          </div>
        ) : (
          ""
        )}
        <InfoForm handleCheckout={handleCheckout}>
          <OrderInfo total={total} cartItems={cartItems} />
        </InfoForm>
      </div>
    </div>
  );
}
