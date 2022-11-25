import React from "react";
import Link from "next/link";

function LinkWord({ word, link }) {
  return (
    <span className="text-primary hover:text-gray-700 transition duration-200">
      <Link href={link}>{word}</Link>
    </span>
  );
}

export default LinkWord;
