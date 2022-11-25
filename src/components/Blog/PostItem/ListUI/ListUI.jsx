import React from "react";
import InformationCard from "../Reusable/InformationCard";
import PostImage from "../Reusable/PostImage";

function ListUI({ postInfo }) {
  const { media, last_publish, path } = postInfo || {};

  return (
    <div className="w-full ">
      {/* Image here */}
      <div>
        <PostImage time={last_publish} path={path} media={media} />
      </div>

      {/* Information card here and author*/}
      <div className="py-8 w-full md:flex text-gray-700">
        {/**information card */}
        <div>
          <InformationCard postInfo={postInfo} />
        </div>
      </div>
      {/**End infor here */}
    </div>
  );
}

export default ListUI;
