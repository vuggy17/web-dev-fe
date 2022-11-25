import { useRouter } from "next/router";
import React, { useRef } from "react";

export default function BigSearhInput({ isOpen, onClose }) {
  const searchRef = useRef(null);
  const router = useRouter();
  return (
    <div
      style={{ zIndex: "2000" }}
      className={`${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-x-full"
      }  transition-all transform w-full h-full duration-200 flex  justify-center items-center  fixed bg-black bg-opacity-80`}
    >
      <div
        onClick={() => {
          onClose();
        }}
        className="absolute right-10 top-10 text-f7f7f7 text-4xl hover:text-textSecondary cursor-pointer"
      >
        X
      </div>
      <form
        className="w-full"
        onSubmit={(e) => {
          e.preventDefault();
          let keyword = searchRef.current.value;
          onClose();
          router.push(
            {
              pathname: "/search",
              query: { keyword },
            },
            undefined,
            { scroll: true }
          );
          searchRef.current.value = "";
        }}
      >
        <div className="w-full justify-center flex px-5">
          <input
            ref={searchRef}
            className="appearance-none outline-none focus:outline-none px-4 w-full bg-f7f7f7 md:w-2/3 py-7 text-xl sm:text-5xl"
            placeholder="Nhập nội dung tìm kiếm"
          />
        </div>
      </form>
    </div>
  );
}
