import React, { useEffect, useRef } from "react";

export default function SearchForm({ keyword, onSearch }) {
  useEffect(() => {
    if (searchRef) {
      searchRef.current.value = keyword ? keyword : "";
    }
  }, [keyword]);
  const searchRef = useRef(null);
  return (
    <form
      id="searchForm"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchRef.current.value);
      }}
      className="w-full xxs:flex items-center "
    >
      <div className="pb-4  xxs:w-5/6 lg:pb-0 ">
        <input
          ref={searchRef}
          type="text"
          name="name"
          placeholder="Nhập từ khóa"
          className="w-full h-11 px-2 outline-none bg-gray-100 "
        />
      </div>
      <div className="pb-4 xxs:w-1/6 lg:pb-0">
        <button
          type="submit"
          form="searchForm"
          className="w-full h-11 bg-primary text-white hover:bg-gray-800 transform ease-linear duration-300"
        >
          <i className="bx bx-search" />
        </button>
      </div>
    </form>
  );
}
