import React, { useEffect, useState } from "react";

export default function MySelection({
  options,
  fieldToRender,
  onSelect,
  defaultValue,
  defaultText,
  fieldValue,
  //for hoook form
  register,
  extendClass,
  title,
  errors,
  name,
  customErrorMess,
}) {
  const [selectValue, setSelectValue] = useState(
    defaultValue ? defaultValue[fieldValue] : ""
  );

  useEffect(() => {
    console.log(defaultValue);
    if (defaultValue) {
      if (defaultValue !== selectValue) {
        setSelectValue(defaultValue);
      }
    }
  }, [defaultValue]);

  if (!options) return null;
  return (
    <div className={`${extendClass} `}>
      {title ? <label className=" text-gray-700 text-sm ">{title}</label> : ""}
      <div className="relative h-11  w-full mt-2">
        <select
          {...(register ? register(name, {}) : {})}
          className="leading-10 pl-3 w-full h-full bg-gray-100 appearance-none"
          value={selectValue}
          name={name}
          onChange={(e) => {
            let res = options.find(
              (option) => option[fieldValue] == e.target.value
            );
            onSelect(res);
            setSelectValue(e.target.value);
          }}
        >
          <option value="" disabled hidden>
            {defaultText}
          </option>

          {options.map((option, index) => (
            <option value={option[fieldValue]} key={index}>
              {option[fieldToRender]}
            </option>
          ))}
        </select>
        <div className="absolute right-2 top-0 h-full items-center flex">
          <i className="bx bx-chevron-down"></i>
        </div>
      </div>
      {errors ? (
        <span className="text-red text-red-500 text-xs">
          {errors[name]
            ? customErrorMess
              ? customErrorMess
              : errors[name].message
            : ""}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
