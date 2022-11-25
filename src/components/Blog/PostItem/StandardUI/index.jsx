import React from "react";
import FullMetaDetail from "../Reusable/FullMetaDetail";
import InformationCard from "../Reusable/InformationCard";
import PostImage from "../Reusable/PostImage";

function StandardUI({ postInfo }) {
  const { media, last_publish, path } = postInfo || {};
  //
  return (
    <div className="w-full">
      {/* Image here */}
      <PostImage path={path} time={last_publish} media={media} />

      {/* Information card here and author*/}
      <div className="py-8 w-full text-gray-600">
        <div className="lg:flex">
          <div className="lg:block hidden mr-10" style={{ maxWidth: "204px" }}>
            <FullMetaDetail tags={postInfo?.tag} />
          </div>
          <div className="flex-1">
            <InformationCard postInfo={postInfo} />
          </div>
        </div>
      </div>
      {/**End infor here */}
    </div>
  );
}

export default StandardUI;
