import CustomImage from "@components/Common/CustomImage";
import { EyeIcon, HeartIcon, TagIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { imageLoader } from "src/app/services";
import { RandomAnalytics } from "../../../../app/utils/myUtils";

function AuthorTag({ tagsList }) {
  const aboutme = useSelector((state) => state.common.aboutAuthor);
  return (
    <div className="text-gray-500 w-full mx-2 text-xs h-full flex flex-col justify-around px-3 py-4">
      <div className="flex flex-wrap items-center mb-5 text-textSecondary ">
        <span className="w-8 h-8 rounded-full overflow-hidden mr-2">
          <CustomImage
            loader={imageLoader}
            src={aboutme?.avatar}
            maxWidth={500}
            maxHeight={500}
            alt="Đông Phương"
          />
        </span>
        <span>{`by\xa0`}</span>
        <span className="break-words overflow-hidden">{aboutme?.name}</span>
      </div>

      <div className="flex flex-wrap items-center mb-5 text-textSecondary">
        <TagIcon className="w-3.5 h-3.5 inline mr-1" />
        {tagsList.map((tag, index) => (
          <span key={tag.id} className="">
            <Link href={`/tag/${tag.path}`} passHref>
              <h4 className="cursor-pointer">
                {tag.name}
                {index != tagsList.length - 1 && <span>, </span>}
                {`\xa0`}
              </h4>
            </Link>
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center mb-5 text-textSecondary">
        <EyeIcon className="w-3.5 h-3.5 inline mr-1" />
        <span>{RandomAnalytics()} lượt xem</span>
      </div>
      <div className="flex flex-wrap items-center">
        <HeartIcon className="w-3.5 h-3.5 inline mr-1" />
        <span>{RandomAnalytics(0, 10)} lượt thích</span>
      </div>
    </div>
  );
}

export default AuthorTag;
