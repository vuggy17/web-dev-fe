import { HeartIcon, ShareIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Categories from "./Categories";
import Icon from "./Icon";
import InforCard from "./InformationCard.module.scss";

function InformationCard({ postInfo }) {
  const { title, path, description, category } = postInfo || {};
  const router = useRouter();
  return (
    <div className="flex flex-col px-2">
      <div className="flex-1">
        {/**Categories */}
        <div className="text-primary mb-6 lg:text-sm xl:text-md">
          <Categories categoryInfo={category || []} />
        </div>

        <div className="text-2xl lg:text-xl xl:text-2xl mb-6 cursor-pointer uppercase line-clamp-3">
          <Link href={`/blogs/${path}`} passHref>
            <h2>{title}</h2>
          </Link>
        </div>
      </div>

      {/**Tom tat bai viet */}
      <div className="mb-6 mr-3 text-sm w-full">
        <p className={`${InforCard.wordWrap} pr-3`}>{description}</p>
      </div>

      {/**Icon and button */}
      <div className="flex justify-between items-center pr-3 w-full">
        <div
          onClick={() => {
            router.push(`/blogs/${path}`);
          }}
          className="cursor-pointer bg-next-btn inline-block text-sm py-2 px-4 text-gray-50 uppercase hover:bg-gray-800 transition duration-500 ease-linear"
        >
          ĐỌC NGAY
        </div>
        <div className="flex">
          <Link href="#">
            <a target="_self">
              <Icon Icon={ShareIcon} />
            </a>
          </Link>
          <Link href="#">
            <a target="_self">
              <Icon Icon={HeartIcon} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InformationCard;
