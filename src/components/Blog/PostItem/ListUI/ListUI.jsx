import React from "react";
import InformationCard from "../Reusable/InformationCard";
import PostImage from "../Reusable/PostImage";

function ListUI({ postInfo }) {
  const { media, last_publish, path } = postInfo || {};

  return (
    <div className="w-full flex flex-col">
      {/* Image here */}
      <div>
        <PostImage time={last_publish} path={path} media={media} />
      </div>

      {/* Information card here and author*/}
      <div className="pt-8 pb-4 w-full h-full text-gray-700 md:flex md:flex-1">
        {/**information card */}
        <InformationCard postInfo={postInfo} />
      </div>
      {/**End infor here */}
    </div>
  );
}

export default ListUI;
