import ListUI from "@components/Blog/PostItem/ListUI/ListUI";
import Link from "next/link";
import React from "react";
export default function BlogArea({ listBlogs }) {
  return (
    <>
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
