import AboutmeBlock from "@components/AboutMeBox";
import AboutMeWidget from "@components/Blog/AboutMeWidget";
import BlogCategoryBar from "@components/Blog/BlogCategoryBar";
import BlogTagsBox from "@components/Blog/BlogTagsBox";
import LastestPostNav from "@components/Blog/LatestPostNav";
import PostComment from "@components/Blog/PostComment";
import PostContent from "@components/Blog/PostContent";
import SubWidget from "@components/Blog/SubcribeWidget";
import PostTagsAndShare from "@components/Blog/Tags-SocialIcon";
import Brand from "@components/Brand";
import React from "react";
import RelatedProduct from "./RelatedProducts";

export default function BlogDetailContainer({ blogDetailPageData }) {
  const { tags, post, blogComments, latestBlogs, blogProducts } =
    blogDetailPageData || {};

  console.log(blogDetailPageData);

  if (!blogDetailPageData) return <div></div>;
  return (
    <div>
      <div style={{ borderBottom: "1px solid #e9e9e9", marginBottom: "35px" }}>
        <Brand />
      </div>
      <div style={{ margin: "auto", maxWidth: "1200px" }}>
        <div className="px-6 item mx-0 lg:px-20 w-full xl:px-0">
          <div className="lg:grid lg:grid-cols-12">
            <div className="mb-0 md:col-span-9">
              <div className="w-full my-10">
                <AboutMeWidget />
              </div>
              <div className="w-full">
                <PostContent
                  postInfo={post ? post : { content: "<div>no content </div>" }}
                />
                <div className="mt-10">
                  <PostTagsAndShare tags={post?.tag || []} />
                </div>
              </div>
              <div className="w-full my-10">
                <RelatedProduct products={blogProducts || []} />
              </div>
              <div className="w-full my-10">
                <PostComment blogComments={blogComments || {}} />
              </div>
            </div>
            <div className="lg:pl-10 md:col-span-3">
              <div className="mb-16">
                <AboutmeBlock />
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
          </div>

          {/** Infor block va newsletter */}
          {/* <div className="mb-10 lg:mb-14">
            <SubWidget />
          </div> */}
        </div>
      </div>
    </div>
  );
}
