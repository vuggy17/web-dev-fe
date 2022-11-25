import React from "react";
import Link from "next/link";

function LinkElement({ title, link }) {
  return (
    <div className="hover:text-gray-800 capitalize mb-2">
      <Link href={link}>{title}</Link>
    </div>
  );
}

export default LinkElement;
