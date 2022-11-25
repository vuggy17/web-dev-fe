import CustomImage from "@components/Common/CustomImage";
import React from "react";
import { imageLoader } from "src/app/services";
import Categories from "./Categories";
import customBlockStyle from "./customBlockStyle.module.scss";

import edjsParser from "editorjs-parser";
import { BASE_URL_BE } from "@definitions/constants";
import { addStr } from "@utils/myUtils";

function makeBoldHeader(content) {
  const { blocks } = content;

  if (!blocks) return [];
  let newBlocks = [...blocks];
  blocks.forEach((block, index) => {
    if (block.type === "header") {
      let newBlockData = {
        ...block.data,
        text: `<div style="color:#444;font-size:23px">${block.data.text}<div>`,
      };
      newBlocks[index] = { ...block, data: newBlockData };
    }
  });
  return { ...content, blocks: newBlocks };
}

const customeParser = {
  customImage: (data, config) => {
    return `
      <img src="${BASE_URL_BE}${data.file.url}" alt="${data.file.alt}">
    <div class="w-full text-center italic text-md">${data.caption}</div>
    `;
  },
  paragraph: (data) => {
    console.log("data ne", data);
    return `
    <p class="my-5" style="text-align:${data.alignment} ">${data.text}</p>
    `;
  },
  raw: (data) => {
    const customStyleForIframe = ` style="width:100%;height:450px" `;
    let newHTML;
    if (data.html.includes("<iframe")) {
      const indexToAdd = data.html.indexOf("<iframe ") + 8;
      newHTML = addStr(data.html, indexToAdd, customStyleForIframe);
    } else {
      newHTML = data.html;
    }
    return `
    <div class="max-w-full overflow-y-scroll">${newHTML}</div>
    `;
  },
  quote: (data, string) => {
    return `
    <blockquote class="${customBlockStyle.customBlockquote}">
      <div class="${customBlockStyle.customBlockquote__wrapper}">
        <i class="bx bxs-quote-alt-left"></i>
        <p>${data.text}</p>
      </div>
      </blockquote>
    `;
  },
};

const parser = new edjsParser(undefined, customeParser, undefined);

export default function PostContent({ postInfo }) {
  const { title, category, content, media } = postInfo;
  console.log("Post Info", postInfo);
  let markup = "";
  try {
    let formatContent = JSON.parse(content);

    formatContent = makeBoldHeader(formatContent);
    markup = parser.parse(formatContent);
    //
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="w-full">
      <div className="w-full text-center">
        <div className="mx-auto uppercase max-w-max">
          <Categories categoryInfo={category || []} />
        </div>
        <h1 className="uppercase text-xl sm:text-3xl my-5 ">{title}</h1>
        <div className="py-5">
          <div className="overflow-hidden">
            {media ? (
              <CustomImage
                src={media?.url}
                alt={media?.alt}
                maxWidth="100%"
                loader={imageLoader}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div
        className="leading-9 max-w-full"
        style={{ color: "#737373", fontSize: "16px" }}
      >
        <div dangerouslySetInnerHTML={{ __html: markup }} />
      </div>
    </div>
  );
}
