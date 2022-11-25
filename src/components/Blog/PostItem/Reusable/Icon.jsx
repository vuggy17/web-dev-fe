import React from "react";

function Icon({ Icon }) {
  return (
    <div className="text-gray-300 m-2 hover:text-gray-600 transition ease-linear duration-500 cursor-pointer">
      <Icon className="w-6" />
    </div>
  );
}

export default Icon;
