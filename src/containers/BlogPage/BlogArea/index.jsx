import React from "react";
import ListUI from "@components/Blog/PostItem/ListUI/ListUI";
import StandardUI from "@components/Blog/PostItem/StandardUI";
export default function BlogArea({ listBlogs }) {
  return (
    <>
      <div className="">
        {/* {listBlogs.map((post) => (
          <div className="mb-4" key={post.id}>
            {" "}
            <StandardUI postInfo={post} />{" "}
          </div>
        ))} */}

        <div className="md:grid  md:grid-cols-3 gap-11 w-full">
          {listBlogs.map((post) => (
            <div key={post.id} className="mb-5 md:mb-0">
              <ListUI postInfo={post} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
