import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { default as React, useState } from "react";

export default function NumberBox({ defaultValue, onChange }) {
  const [quantity, setQuantity] = useState(defaultValue);
  const handleOnChangeInput = (event) => {
    let newValue = Number.parseInt(event.target.value);
    if (newValue) {
      setQuantity(event.target.value);
      onChange(Number.parseInt(newValue));
    }
  };
  const handleOnClickChangeValue = (value) => {
    const selection = value.currentTarget.id;
    const nextNumber = Number.parseInt(quantity);
    if (selection === "up") {
      onChange(nextNumber + 1);
      setQuantity(nextNumber + 1);
    } else {
      if (quantity > 1) {
        onChange(nextNumber - 1);
        setQuantity(nextNumber - 1);
      }
    }
  };
  return (
    <div className="flex justify-end md:mr-3 md:justify-start ">
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
  );
}
