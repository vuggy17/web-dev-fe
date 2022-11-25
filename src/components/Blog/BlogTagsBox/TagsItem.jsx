import React from "react";
import Link from "next/link";

function TagItem(props) {
  const { name, path } = props.tagInfo;

  return (
    <Link href={`/tag/${path}`} passHref>
      <span className="mr-3 mb-3 cursor-pointer text-xs bg-gray-100 py-2 px-4 hover:bg-gray-800 hover:text-gray-50 transition duration-500">
        {name}
      </span>
    </Link>
  );
}

export default TagItem;
