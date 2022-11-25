import Link from "next/link";
import React from "react";

function PostDetailTags({ tag }) {
  return (
    <Link href={`/tag/${tag.path}`} passHref>
      <div className="hover:text-white hover:bg-black transition-all duration-500 bg-secondary py-1 px-2 normal-case cursor-pointer inline-block">
        {tag.name}
      </div>
    </Link>
  );
}

export default PostDetailTags;
