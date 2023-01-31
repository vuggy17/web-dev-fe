import MySelection from "@components/Common/FormComponent/MySelection";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import { addItem } from "@redux/cartSlice";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formatCurrencyVND } from "../../../app/utils/myUtils";
import LinkWord from "./LinkWord";

function formatPrice({ price, discount, maxDiscount, is_on_sale }) {
  let salePrice;
  if (is_on_sale) {
    salePrice = price * (1 - discount);
    if (price - salePrice > maxDiscount) salePrice = price - maxDiscount;
  }
  return { price, salePrice };
  // setinformationToRender({ price: Price, salePrice });
}

function ProductSumary({ productData, setCartAlert }) {
  const router = useRouter();
  const variantId = router.query.variant;
  const dispatch = useDispatch();
  useEffect(() => {
    setQuantity(1);
  }, [productData]);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState();
  const [informationToRender, setInformationToRender] = useState();

  const {
    price,
    name,
    path,
    description,
    thumbnail,
    discount,
    maxDiscount,
    category,
    is_in_stock,
    SKU,
    is_on_sale,
    variants,
  } = productData;

  const handleOnChangeInput = (event) => {
    if (Number.parseInt(event.target.value)) {
      setQuantity(event.target.value);
    }
  };
  const handleOnClickChangeValue = (value) => {
    const selection = value.currentTarget.id;
    const nextNumber = Number.parseInt(quantity);
    if (selection === "up") {
      setQuantity(nextNumber + 1);
    } else {
      if (quantity > 1) {
        setQuantity(nextNumber - 1);
      }
    }
  };

  useEffect(() => {
    if (productData.variants.length > 0) {
      let index = productData.variants.findIndex((e) => e.id == variantId);
      const defaultSelectedVariant =
        index >= 0 ? productData.variants[index] : productData.variants[0];
      const { price, salePrice } = formatPrice({
        price: defaultSelectedVariant.price,
        is_on_sale,
        discount,
        maxDiscount,
      });

      setInformationToRender({
        price: price,
        salePrice: salePrice,
        variantDesription: defaultSelectedVariant.description,
      });

      setSelectedVariant(defaultSelectedVariant);
    } else {
      const { price, salePrice } = formatPrice({
        price: productData.price,
        is_on_sale,
        discount,
        maxDiscount,
      });
      setInformationToRender({ price, salePrice, variantDesription: "" });
    }
  }, [router]);

  if (!informationToRender) return null;

  const SaleCard = () => {
    return (
      <div className="bg-black opacity-80 text-center text-white text-xs px-2 py-1">
        {is_on_sale ? `-${discount * 100}%` : ""}
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center mb-3">
        <h1 className="text-2xl uppercase">{name}</h1>
        <div className="ml-5">{is_on_sale && <SaleCard />}</div>
      </div>
      <div className="text-sm mb-8 flex">
        {informationToRender.salePrice ? (
          <div className="line-through opacity-80 mr-2">
            {formatCurrencyVND(informationToRender.price)}
          </div>
        ) : (
          <div className="mr-2">
            {formatCurrencyVND(informationToRender.price)}
          </div>
        )}
        {informationToRender.salePrice && (
          <div className="underline">
            {formatCurrencyVND(informationToRender.salePrice)}
          </div>
        )}
      </div>

      <p className="text-sm mb-8 leading-6 ">
        Tình trạng: &nbsp;
        {is_in_stock ? (
          <span className="text-green-500">Còn hàng</span>
        ) : (
          <span className="text-red-500">Hết hàng</span>
        )}
      </p>

      <p className="text-sm mb-8 leading-6 ">{description}</p>

      {variants.length > 0 && (variantId || selectedVariant) ? (
        <div className="mb-8 sm:w-80">
          <p className="text-sm leading-6 mb-3">Chọn loại sản phẩm:</p>
          <MySelection
            defaultText="Chọn loại sản phẩm"
            defaultValue={variantId ?? selectedVariant.id}
            options={variants}
            fieldToRender="name"
            fieldValue="id"
            onSelect={(option) => {
              setSelectedVariant(option);
              router.replace(
                {
                  pathname: router.pathname,
                  query: { ...router.query, variant: option.id },
                },
                undefined,
                { scroll: false }
              );
            }}
          />
        </div>
      ) : (
        ""
      )}

      <div className="flex mb-8">
        <div className="mr-3 flex">
          <div
            id="down"
            onClick={handleOnClickChangeValue}
            className={`flex items-center border border-r-0 ${
              quantity <= 1
                ? "text-gray-400"
                : "cursor-pointer hover:bg-gray-100 transform ease-linear duration-300"
            } `}
          >
            <ArrowDropDownIcon style={{ fontSize: "1.6rem" }} name="down" />
          </div>
          <input
            type="number"
            name="quantity"
            min="1"
            className="w-10 h-10 border text-center text-sm outline-none"
            value={quantity}
            onChange={handleOnChangeInput}
          />
          <div
            id="up"
            onClick={handleOnClickChangeValue}
            className="flex items-center border cursor-pointer hover:bg-gray-100 transform ease-linear duration-300 border-l-0"
          >
            <ArrowDropUpIcon style={{ fontSize: "1.6rem" }} />
          </div>
        </div>

        <div
          onClick={() => {
            dispatch(
              addItem({
                product: {
                  name,
                  price,
                  thumbnail,
                  is_on_sale,
                  variants,
                  discount,
                  maxDiscount,
                },
                product_id: productData.id,
                variant_id: selectedVariant ? selectedVariant.id : 0,
                number: quantity,
                variant: { ...selectedVariant },
                price: is_on_sale
                  ? informationToRender.salePrice
                  : informationToRender.price,
                previousPrice: is_on_sale ? informationToRender.price : null,
              })
            );
            setCartAlert({
              isOpen: true,
              type: "success",
              btnText: "XEM NGAY",
              btnCallback: () => {
                router.push("/cart");
              },
              content: `${quantity > 1 ? `${quantity} x ` : ""} "${
                productData.name
              }${
                selectedVariant ? "-" + selectedVariant.name : ""
              }" đã được thêm vào giỏ hàng `,
            });
          }}
          className={`${
            is_in_stock ? "bg-primary" : "pointer-events-none bg-gray-300"
          } h-10  text-sm text-white hover:bg-gray-800 transform ease-linear duration-300 flex items-center px-2 cursor-pointer`}
        >
          <div>THÊM VÀO GIỎ HÀNG</div>
        </div>
      </div>

      <div className="text-sm mb-6">
        <div className="mb-2">
          Danh mục sản phẩm:{" "}
          {/* {(category || []).map((e, index, array) => (
            <span key={e.id}>
              <LinkWord word={e.name} link={e.path} />
              {index === array.length - 1 ? " " : ", "}
              </span>
            ))} */}
          {category ? (
            <LinkWord word={category?.name} link={`/shop/${category?.path}`} />
          ) : (
            ""
          )}
        </div>
        {/* <div className="">
          Tags:{" "}
          {tags.map((tag, index, array) => (
            <span key={tag.id}>
              <LinkWord word={tag.name} link={tag.link} />
              {index === array.length - 1 ? " " : ", "}
            </span>
          ))}
        </div> */}
      </div>

      <div className="flex items-center text-sm">
        <div className="mr-3">SHARE:</div>
        <FacebookIcon
          className={`mr-1 text-blue-500 transition transform hover:text-black hover:scale-110 cursor-pointer`}
          style={{ fontSize: "32px " }}
        />
        <PinterestIcon
          className={`mr-1 text-red-600 transition transform hover:text-black hover:scale-110 cursor-pointer`}
          style={{ fontSize: "32px " }}
        />
        <InstagramIcon
          className={`mr-1 text-red-500 transition transform hover:text-black hover:scale-110 cursor-pointer`}
          style={{ fontSize: "32px " }}
        />
      </div>
    </div>
  );
}

export default ProductSumary;
