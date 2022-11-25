import PostContent from "@components/Blog/PostContent";
import SubWidget from "@components/Blog/SubcribeWidget";
import Brand from "@components/Brand";
import { PostModel } from "@definitions/definitions";
import { default as React, ReactElement } from "react";
import PageMenus from "./PagesMenu";

interface Props {
  post: PostModel;
}

export default function InformationContainer({ post }: Props): ReactElement {
  return (
    <div>
      <div>
        <div
          style={{ borderBottom: "1px solid #e9e9e9", marginBottom: "35px" }}
        >
          <Brand />
        </div>
        <div style={{ margin: "auto", maxWidth: "1200px" }}>
          <div className="px-6 item mx-0 lg:px-20 w-full xl:px-0">
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-4 mr-10">
                <PageMenus />
              </div>
              <div className="mb-0 lg:col-span-8">
                <div className="w-full">
                  <PostContent postInfo={post} />
                </div>
              </div>
            </div>

            <div className="mb-10 lg:mb-14">
              {/** Infor block va newsletter */}
              <SubWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
