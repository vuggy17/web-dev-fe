import React from "react";
import TagItem from "./TagsItem";

function BlogTagsBox(props) {
  const { listTags } = props;
  //
  return (
    //Sua thanh width full khi merge
    <div className="w-full">
      <div className="bg-secondary w-full text-center text-sm uppercase tracking-wide px-4 py-3 mb-4">
        Tags
      </div>
      <div className="flex flex-wrap">
        {listTags.map((tag) => {
          return <TagItem key={tag.id} tagInfo={tag} />;
        })}
      </div>
    </div>
  );
}

export default BlogTagsBox;
