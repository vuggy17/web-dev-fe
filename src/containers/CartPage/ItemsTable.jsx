import Brand from "@components/Brand";
import CustomImage from "@components/Common/CustomImage";
import NumberBox from "@components/Common/FormComponent/NumberBox";
import { calcCartCost, removeItem, setItem } from "@redux/cartSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageLoader } from "src/app/services";
import style from "./Cart.module.scss";
import Link from "next/link";
import { formatCurrencyVND } from "../../app/utils/myUtils";

export default function ItemsTable({ cartItems }) {
  return (
    <table className={`${style.table}`}>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th className="text-left">Sản phẩm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Tạm tính</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <ItemRow itemInfo={item} key={item.product_id + item.variant_id} />
        ))}

        <tr>
          <td colSpan="6" className={`${style.actions}`}>
            {" "}
            <div className="flex justify-between items-center flex-wrap">
              <div className="py-2 flex gap-4 pl-2">
                <input
                  className="px-2 py-2 border outline-none"
                  style={{ borderColor: "rgba(0,0,0,.1)" }}
                  placeholder="Mã giảm giá"
                ></input>
                <button className="cursor-pointer bg-primary inline-block text-sm py-2 px-4 text-gray-50 uppercase hover:bg-gray-800 transition duration-500 ease-linear">
                  Áp dụng
                </button>
              </div>
              <div className="pl-2 py-2">
                <Link passHref href="/shop">
                  <div className="cursor-pointer bg-primary inline-block text-sm py-2 px-4 text-gray-50 uppercase hover:bg-gray-800 transition duration-500 ease-linear">
                    Tiếp tục mua hàng
                  </div>
                </Link>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

function ItemRow({ itemInfo }) {
  const {
    product,
    product_id,
    variant,
    variant_id,
    number,
    price,
    subTotal,
    previousPrice,
  } = itemInfo;
  const dispatch = useDispatch();
  return (
    <tr>
      <td className={`${style.productRemove}`}>
        <button
          className=" w-6 h-6  text-red-600 rounded-full hover:text-red-400 duration-700  font-bold"
          onClick={() => {
            dispatch(removeItem({ product_id, variant_id }));
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
      <td className={`${style.productThumbnail}`}>
        <CustomImage
          src={product.thumbnail}
          maxWidth="32px"
          loader={imageLoader}
        />
      </td>
      <td data-title="Sản phẩm">
        {product.name + (variant_id > 0 ? ` - ${variant.name}` : "")}
      </td>
      <td data-title="Giá">
        <div className="text-xs lg:text-sm font-light ">
          <span className="mr-4 ">{formatCurrencyVND(price)}</span>
          {previousPrice ? (
            <span className={`line-through opacity-80`}>
              {formatCurrencyVND(previousPrice)}
            </span>
          ) : (
            ""
          )}
        </div>
      </td>
      <td data-title="Số lượng">
        <NumberBox
          defaultValue={number}
          onChange={(value) => {
            dispatch(
              setItem({
                ...itemInfo,
                number: value,
              })
            );
          }}
        />
      </td>
      <td className="text-center  " data-title="Tạm tính">
        {subTotal.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </td>
    </tr>
  );
}
