import TabLayout from "@components/TabLayout";
import React, { useState, useEffect } from "react";

const LIST_TABPANE = [
  { title: "Thông tin về sản phẩm", content: null },
  { title: "Hướng dẫn sử dụng", content: null },
  { title: "Về thương hiệu", content: null },
];

export default function AdditionalInfo({ productData }) {
  const [tabData, setTabData] = useState(LIST_TABPANE);

  useEffect(() => {
    let addtionalProductInformation = [...LIST_TABPANE];
    addtionalProductInformation[0].content = productData.content;
    addtionalProductInformation[1].content = productData.manual_infor;
    addtionalProductInformation[2].content = productData.brand_infor;
    setTabData(addtionalProductInformation);
  }, [productData]);

  return (
    <div>
      <TabLayout listTab={tabData} />
    </div>
  );
}
