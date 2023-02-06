import React, { useCallback, useEffect, useState, useRef } from "react";
// import classnames from "classnames";
import PropTypes from "prop-types";
// import styles from "./rangeSlider.module.scss";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const sortOptions = [
  {
    id: "name|ASC",
    label: "A-Z",
    checked: true,
  },
  {
    id: "name|DESC",
    label: "Z-A",
  },
  {
    id: "price|DESC",
    label: "Giá từ cao đến thấp",
  },
  {
    id: "price|ASC",
    label: "Giá từ thấp đến cao",
  },
];

const MultiRangeSlider = ({ onChange, value, onSortChange }) => {
  return (
    <div className="pb-4">
      <div className="flex justify-between text-textPrimary">
        <div>
          <span className="capitalize mb-2"> sắp xếp</span>
          <div className="text-sm">
            {sortOptions.map((option) => (
              <div
                className="flex gap-2 items-center mb-1"
                onClick={() => onSortChange(option.id)}
              >
                <input
                  type="radio"
                  name="sort-by"
                  id={option.id}
                  defaultChecked={option.checked}
                />
                <label htmlFor={option.id}> {option.label}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[500px]">
          <div className=" text-gray-500 flex flex-col gap-4">
            <div className=" flex justify-between ">
              <span className="capitalize text-textPrimary"> mức giá :</span>
              <div>
                Từ
                <span className="text-textPrimary px-1">
                  {(value[0] * 1000).toLocaleString()}
                </span>
                đến
                <span className="text-textPrimary px-1">
                  {(value[1] * 1000).toLocaleString()}
                </span>
              </div>
            </div>
            <RangeSlider
              step={10}
              value={value}
              max={1000}
              onInput={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
