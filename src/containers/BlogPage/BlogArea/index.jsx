import React from "react";
import ListUI from "@components/Blog/PostItem/ListUI/ListUI";
import StandardUI from "@components/Blog/PostItem/StandardUI";
export default function BlogArea({ listBlogs }) {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-11">
      {listBlogs.map((post) => (
        <div key={post.id} className="mb-5 md:mb-0 flex bg-black bg-opacity-[0.04]">
          <ListUI postInfo={post} />
        </div>
      ))}
    </div>
  );
}
