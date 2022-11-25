import React from "react";
import { HeartIcon, EyeIcon } from "@heroicons/react/outline";

function ViewsLikesBar({ likes, views }) {
  return (
    <div className="w-full flex justify-around py-6 bg-secondary text-sm text-center">
      <div className="border-r py-2 border-gray-600 w-1/2 flex justify-center items-center">
        <EyeIcon className="w-5 mr-2" />
        <div>{views} lượt xem</div>
      </div>
      <div className="py-2 w-1/2 flex justify-center items-center">
        <HeartIcon className="w-5 mr-2" />
        <div>{likes} yêu thích</div>
      </div>
    </div>
  );
}

export default ViewsLikesBar;
