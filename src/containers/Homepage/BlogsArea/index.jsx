import React from "react";
import ListUI from "@components/Blog/PostItem/ListUI/ListUI";
import StandardUI from "@components/Blog/PostItem/StandardUI";
import Link from "next/link";
export default function BlogArea({ listBlogs }) {
  let blogsToRender = listBlogs.slice(0, 10);
  return (
    <>
      <div className="">
        {blogsToRender.map((post) =>
          post.stick_to_top ? (
            <div className="mb-4" key={post.id}>
              {" "}
              <StandardUI postInfo={post} />{" "}
            </div>
          ) : (
            ""
          )
        )}

        <div className="md:grid grid-cols-2 gap-10">
          {blogsToRender.map((post) =>
            !post.stick_to_top ? (
              <div key={post.id} className="mb-4 md:mb-0">
                <ListUI postInfo={post} />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <Link passHref href="/blogs" scroll>
        <div className="w-full text-xl flex items-center justify-center text-primary hover:text-textPrimary transition-all cursor-pointer mb-10  ">
          Xem tất cả bài viết...
        </div>
      </Link>
    </>
  );
}
