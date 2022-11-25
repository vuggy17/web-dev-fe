import React from "react";

export default function MyInput({
  register,
  name,
  title,
  errors,
  // onBlur,
  extendClass,
  type,
  placeholder,
  customErrorMess,
}) {
  return (
    <div>
      <div className={`${extendClass}`}>
        <label className=" text-gray-700 text-sm">{title}</label>
        <input
          placeholder={placeholder}
          type={type ? type : "text"}
          {...register(name, {})}
          className={
            "w-full h-11 px-3 outline-none bg-f7f7f7 mt-2" +
            (errors[name] ? " border-red-500" : " focus:border-gray-500")
          }
        />
        <span className="text-red text-red-500 text-xs">
          {errors[name]
            ? customErrorMess
              ? customErrorMess
              : errors[name].message
            : ""}
        </span>
      </div>
    </div>
  );
}
