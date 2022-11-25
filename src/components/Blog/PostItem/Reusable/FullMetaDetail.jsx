import React from "react";
import AuthorTag from "./AuthorTags";
export default function FullMetaDetail({ tags }) {
  return (
    <div className="bg-secondary w-full mr-8 py-3 px2">
      <AuthorTag tagsList={tags || []} />
    </div>
  );
}
