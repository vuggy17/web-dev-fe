import React, { useState, useEffect } from "react";

export default function TabLayout({ listTab }) {
  const [currentTab, setCurrentTab] = useState(0);
  const [listTabData, setListTabData] = useState(listTab);
  useEffect(() => {
    let newListTab = [];
    listTab.forEach((e) => {
      if (e.content) newListTab.push(e);
    });

    setListTabData(newListTab);
    setCurrentTab(0);
  }, [listTab]);

  return (
    <div>
      <div className="flex flex-wrap">
        {listTabData.map((tab, index) => {
          if (!listTabData[index].content) return null;
          return (
            <div
              className="mr-3 mb-3 min-w-max"
              key={index}
              onClick={() => {
                setCurrentTab(index);
              }}
            >
              <div
                className={` cursor-pointer inline-block text-sm py-4 px-10  uppercase   transition ease-linear ${
                  index === currentTab
                    ? "bg-primary text-gray-50 "
                    : "bg-secondary  text-textPrimary"
                }`}
              >
                {tab.title}
              </div>
            </div>
          );
        })}
      </div>
      <div className="leading-10 pt-5">
        <div
          dangerouslySetInnerHTML={{ __html: listTabData[currentTab]?.content }}
        />
      </div>
    </div>
  );
}
