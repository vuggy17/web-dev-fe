import React from "react";
import Comment from "./Comment";

function TopicComments() {
  return (
    <div>
      <Comment />
      <div className="ml-12">
        <Comment />
      </div>
    </div>
  );
}

export default TopicComments;
