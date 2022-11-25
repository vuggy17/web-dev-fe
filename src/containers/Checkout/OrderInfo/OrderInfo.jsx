import React from "react";
import { formatCurrencyVND } from "../../../app/utils/myUtils";

export default function OrderInfo({ total, cartItems }) {
  return (
    <>
      <div className="text-xl sm:text-2xl uppercase mb-3 ">
        Đơn hàng của bạn
      </div>
      <div>
        <table className="border border-collapse w-full text-left text-sm rounded">
          <thead>
            <tr className="border rounded">
              <th className="px-2 py-3">Sản phẩm</th>
              <th className="px-2 py-3">Đơn giá</th>
              <th className="px-2 py-3">Số lượng</th>
              <th className="px-2 py-3 w-1/3">Tạm tính</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => {
              const { previousPrice, price, number, subTotal } = item;
              return (
                <tr key={previousPrice + price} className="border rounded">
                  <td className="px-2 py-3">
                    {" "}
                    {item.product.name +
                      (item.variant_id > 0 ? ` - ${item.variant.name}` : "")}
                  </td>
                  <td className="px-2 py-3">
                    <div className="text-xs lg:text-sm font-light ">
                      <span className="mr-4 block sm:inline">
                        {formatCurrencyVND(price)}
                      </span>
                      {previousPrice ? (
                        <span className={`line-through opacity-80`}>
                          {formatCurrencyVND(previousPrice)}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </td>
                  <td className="px-2 py-3">{number}</td>
                  <td className="px-2 py-3">
                    {subTotal.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                </tr>
              );
            })}
            <tr className="border rounded">
              <th className="px-2 py-3">Tổng cộng</th>
              <td />
              <td />
              <td className="px-2 py-3">
                {total.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
