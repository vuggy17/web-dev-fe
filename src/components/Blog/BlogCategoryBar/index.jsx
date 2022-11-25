import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function CateItem({ categories, level, moreExpand, scrollWhenRedirect }) {
  const [expand, setExpand] = useState({});
  const router = useRouter();
  const toggleMenu = (id, open, height = 0) => {
    const growDiv = document.getElementById(`submenu-${id}`);
    const wrapper = document.getElementById(`submenu-wrapper-${id}`);
    if (open) {
      growDiv.style.maxHeight = wrapper.clientHeight + height + "px";
    } else {
      growDiv.style.maxHeight = 0;
    }
    if (moreExpand) {
      moreExpand(wrapper.clientHeight);
    }
  };

  return (
    <div className="relative  w-full bg-white ">
      {level === 1 ? (
        <div className={`relative`}>
          <div className="flex">
            <button style={{ paddingLeft: `${20}px` }} className={`py-5 pr-2 `}>
              <i
                className={`bx bx-chevron-right transition-all duration-100 text-secondary`}
              />
            </button>
            <Link
              href={`/blogs`}
              passHref
              scroll={scrollWhenRedirect ? true : false}
            >
              <div className="hover:text-textSecondary cursor-pointer py-5 flex-1 pr-5">
                TẤT CẢ
              </div>
            </Link>
          </div>
          <div
            style={{ paddingLeft: `${25 * level}px` }}
            className={`w-full  pr-2`}
          >
            {/* <div style={{ borderBottom: "solid 1px #e2e2e2" }} /> */}
          </div>
        </div>
      ) : (
        ""
      )}
      {categories.map((category, index) => {
        const { children, id, name, path } = category;
        return (
          <div key={id} className={`relative`}>
            <div className="flex">
              <button
                onClick={() => {
                  if (expand[path]) {
                    setExpand({ ...expand, [path]: false });
                    toggleMenu(id, false);
                  } else {
                    setExpand({ ...expand, [path]: true });
                    toggleMenu(id, true);
                  }
                }}
                style={{ paddingLeft: `${20 * level}px` }}
                className={`py-5 pr-2 `}
              >
                <i
                  style={expand[path] ? { transform: "rotate(90deg)" } : {}}
                  className={`bx bx-chevron-right transition-all duration-100 ${
                    children.length ? "text-black" : "text-secondary"
                  }`}
                />
              </button>
              {/* <Link href={`/category/${path}`} passHref> */}
              <div
                onClick={() => {
                  if (!expand[path] && children.length) {
                    setExpand({ ...expand, [path]: true });
                    toggleMenu(id, true);
                  } else {
                    router.push(
                      {
                        pathname: `/category/${path}`,
                        query: { ...router.query },
                      },
                      undefined,
                      { scroll: scrollWhenRedirect ? true : false }
                    );
                  }
                }}
                className="hover:text-textSecondary cursor-pointer py-5 flex-1 pr-5"
              >
                {name}
              </div>
              {/* </Link> */}
            </div>
            <div
              style={{ maxHeight: 0 }}
              id={`submenu-${id}`}
              className={`bg-secondary transition-all duration-200 overflow-hidden`}
            >
              <div id={`submenu-wrapper-${id}`}>
                {children.length ? (
                  <CateItem
                    categories={children}
                    moreExpand={(height) => {
                      toggleMenu(id, true, height);
                    }}
                    level={level + 1}
                  />
                ) : (
                  ""
                )}
                {/* submenu */}
              </div>
            </div>
            {index + 1 == categories.length ? (
              ""
            ) : (
              <div
                style={{ paddingLeft: `${25 * level}px` }}
                className={`w-full  pr-2`}
              >
                {/* <div style={{ borderBottom: "solid 1px #e2e2e2" }} /> */}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
export default function BlogCategoryBar({
  currentCategory,
  title,
  scrollWhenRedirect,
}) {
  const [choose, setChoose] = useState(false);
  const blogCategories = useSelector((state) => state.common.blogCategories);
  useEffect(() => {
    setChoose(false);
  }, [currentCategory]);

  useEffect(() => {
    var ignoreClickOnMeElement = document.getElementById("category-bar");
    document.addEventListener("click", function (event) {
      var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
      if (!isClickInsideElement) {
        setChoose(false);
      }
    });
  }, []);
  return (
    <>
      <div id="category-bar" className="w-full  block sm:flex items-center">
        {title ? <span className="mr-5">{title} </span> : ""}
        <div className="relative flex-1 sm:mt-0 mt-5">
          <div
            onClick={() => {
              setChoose(!choose);
            }}
            className={`cursor-pointer border-2 border-secondary w-full text-center uppercase tracking-wide py-3 pl-5 pr-5  flex justify-between items-center ${
              title ? "sm:w-96" : ""
            }`}
          >
            <span>{currentCategory ? currentCategory.name : "Tất cả"}</span>
            <i
              style={choose ? { transform: "rotate(90deg)" } : {}}
              className={`bx bx-chevron-right transition-all duration-100 `}
            />
          </div>
          <div
            style={
              choose
                ? { opacity: 1, transform: "translateY(0px)" }
                : {
                    opacity: 0,
                    transform: "translateY(-50px)",
                    pointerEvents: "none",
                  }
            }
            className={`${
              title ? "sm:w-96" : ""
            } absolute z-10 top-full w-full  shadow-lg left-0 duration-100  transition-all`}
          >
            <CateItem
              scrollWhenRedirect={scrollWhenRedirect}
              categories={blogCategories}
              level={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}
