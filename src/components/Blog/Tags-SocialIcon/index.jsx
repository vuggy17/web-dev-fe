import CustomImage from "@components/Common/CustomImage";
import { TagIcon } from "@heroicons/react/solid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import BrandImage from "@public/images/official/logo/DR DONG PHUONG - LOGO - FINAL WORK - BLACK.png";
import React from "react";
import PostDetailTags from "./PostDetailTags";
import SocialIcon from "./SocialIcon";

// const testArray = [
//   {
//     id: 1,
//     name: 'lam dep'
//   },
//   {
//     id: 2,
//     name: 'suc khoe'
//   },
//   {
//     id: 3,
//     name: 'shark company'
//   },
//   {
//     id: 4,
//     name: 'lam dep'
//   },
//   {
//     id: 5,
//     name: 'helluuu'
//   },
// ];

function PostTagsAndShare({ tags }) {
  return (
    <div className=" flex flex-col md:items-center text-xs text-gray-600">
      <div className="w-60 mb-12 mx-auto">
        <CustomImage src={BrandImage} />
      </div>
      <div className="md:flex justify-between w-full items-center">
        <div className="flex flex-wrap items-center md:pb-0 pb-6">
          <TagIcon className="w-3.5 h-3.5 mr-2" />
          {tags &&
            tags.map((tag) => (
              <div
                key={tag.id}
                className={`my-1  transition-all duration-200   ${
                  tags[tags.length - 1].name === tag.name ? "" : "mr-2"
                }`}
              >
                <PostDetailTags tag={tag} />
              </div>
            ))}
        </div>
        <div className="flex items-center">
          <div className="uppercase text-sm mr-2">Share:</div>
          <SocialIcon Icon={FacebookIcon} name="facebook" />
          <SocialIcon Icon={PinterestIcon} name="pinterest" />
          <SocialIcon Icon={InstagramIcon} name="instagram" />
        </div>
      </div>
    </div>
  );
}

export default PostTagsAndShare;
