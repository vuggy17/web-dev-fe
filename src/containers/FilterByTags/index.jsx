import landingApi from "@api/landingApi";
import Brand from "@components/Brand";
import LoadingStyle1 from "@components/Common/LoadingComponent/style1";
import RightSideBar from "@containers/RightSideBar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BlogArea from "./BlogsArea";

export default function FilterByTags() {
  const router = useRouter();
  const { tagPath } = router.query;
  const tags = useSelector((state) => state.common.tags);

  const [tagInfo, setTagInfo] = useState(null);
  const [listBlogs, setListBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function getBlogs() {
    setLoading(true);
    let blogs = await landingApi.getBlogsByTag(tagPath);
    setListBlogs(blogs);
    setLoading(false);
  }
  useEffect(() => {
    if (tags) {
      let tag = tags.find((e) => e.path == tagPath);
      setTagInfo(tag);
      getBlogs();
    }
  }, [tags, tagPath]);
  return (
    <div>
      <div>
        <Brand />
      </div>

      <div style={{ margin: "auto", maxWidth: "1200px" }}>
        <div className="px-6 item mx-0 lg:px-20 w-full xl:px-0">
          <div className="lg:grid lg:grid-cols-12">
            <div className="mb-10 lg:col-span-9 lg:pr-10">
              {/* <BlogArea listBlogs={allBlogs || []} /> */}
              <div className="bg-secondary w-full text-center text-sm uppercase tracking-wide mb-5 px-4 py-3">
                TAG: {tagInfo?.name}
              </div>
              <div className="pt-5">
                {loading ? (
                  <div className="justify-center flex">
                    <LoadingStyle1 />
                  </div>
                ) : (
                  <BlogArea listBlogs={listBlogs || []} />
                )}
              </div>
            </div>
            <div className="lg:col-span-3">
              <RightSideBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
