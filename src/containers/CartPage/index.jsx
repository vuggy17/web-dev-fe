import Brand from "@components/Brand";
import { calcCartCost } from "@redux/cartSlice";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import ItemsTable from "./ItemsTable";
import style from "./Cart.module.scss";

export default function CartPageContainer() {
  const cart = useSelector((state) => state.cart);
  const { total, cartItems } = calcCartCost(cart.cartItems);
  return (
    <div>
      <div style={{ borderBottom: "1px solid #e9e9e9", marginBottom: "35px" }}>
        <Brand />
      </div>
      <div className="px-4">
        {" "}
        <div className="text-center text-2xl lg:text-xl xl:text-2xl uppercase mb-10 ">
          Giỏ hàng của bạn
        </div>
        <div style={{ margin: "auto", maxWidth: "1200px" }} className="pb-28">
          <ItemsTable cartItems={cartItems} />
          <div className={`${style.paymentTable}`}>
            <h2 className="text-2xl lg:text-xl xl:text-2xl uppercase mb-6">
              Thông tin thanh toán
            </h2>
            <table className="w-full border-separate text-left border mb-6">
              <tbody>
                <tr>
                  <th className="w-1/3 px-3 py-2">Tổng cộng</th>
                  <td className="px-3 py-2">
                    {total.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
            <Link href="/checkout" passHref>
              <button className="cursor-pointer bg-primary inline-block text-sm py-3 px-4 text-gray-50 uppercase hover:bg-gray-800 transition duration-500 ease-linear w-full ">
                TIẾN TỚI ĐẶT HÀNG
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
