import React from "react";
import Item from "./Item";

function LastestPostNav({ listBlogs }) {
  return (
    <div className="w-full">
      <div className="bg-secondary w-full text-center text-sm uppercase tracking-wide mb-5 px-4 py-3">
        Bài viết mới nhất
      </div>
      {/* <Item id={1} />
      <Item id={2} />
      <Item id={3} /> */}
      {listBlogs.map((blog, index) => {
        return (
          <div key={index} className="w-full">
            <Item index={index + 1} postInfo={blog} />
            <div
              className={`w-full h-0.5 bg-secondary mb-7 ${
                index + 1 === listBlogs.length ? "hidden" : ""
              }`}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default LastestPostNav;
