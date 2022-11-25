import AboutmeBlock from "@components/AboutMeBox";
import BlogCategoryBar from "@components/Blog/BlogCategoryBar";
import BlogTagsBox from "@components/Blog/BlogTagsBox";
import LastestPostNav from "@components/Blog/LatestPostNav";
import React from "react";
import { useSelector } from "react-redux";

export default function RightSideBar() {
  const tags = useSelector((state) => state.common.tags);
  const latestBlogs = useSelector((state) => state.common.latestBlogs);
  const aboutAuthor = useSelector((state) => state.common.aboutAuthor);
  return (
    <div className="w-full">
      <div className="mb-16">
        <AboutmeBlock aboutme={aboutAuthor} />
      </div>
      <div className="mb-16">
        <LastestPostNav listBlogs={latestBlogs || []} />
      </div>
      <div className="mb-16">
        <div className="w-full">
          <div className="bg-secondary w-full text-center text-sm uppercase tracking-wide mb-16 px-4 py-3">
            DANH MỤC BÀI VIẾT
          </div>
          <BlogCategoryBar scrollWhenRedirect={true} />
        </div>
      </div>
      <div className="mb-16">
        <BlogTagsBox listTags={tags || []} />
      </div>
    </div>
  );
}
