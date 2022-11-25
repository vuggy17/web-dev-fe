import ListUI from "@components/Blog/PostItem/ListUI/ListUI";
import Link from "next/link";
import React from "react";
export default function BlogArea({ listBlogs }) {
  return (
    <>
      {listBlogs.length === 0 ? (
        <div className="w-full flex items-center justify-center hover:text-textPrimary transition-all cursor-pointer mb-10  ">
          Hiện tại chưa có bài viết nào !
        </div>
      ) : (
        ""
      )}
      <div className="">
        <div className="md:grid grid-cols-2 gap-10">
          {listBlogs.map((post) => (
            <div key={post.id} className="mb-4 md:mb-0">
              <ListUI postInfo={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
