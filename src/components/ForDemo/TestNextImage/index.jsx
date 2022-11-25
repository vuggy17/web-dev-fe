import React from "react";
import testImage from "@public/images/template/post/post1.jpg";
import Image from "next/image";
import MyImage from "./MyImage.jsx";
import CustomImage from "@components/Common/CustomImage/index.jsx";

//image from static files
//image from url no loader -> ko được
//image from url loader
//layout fill, responsive,
//custom image element

//xử lý trường hợp src = null

const myLoader = ({ src }) => {
  return src;
};

export default function TestNextImage() {
  return (
    <div>
      <h1>My Image</h1>
      {/* <h1></h1>
      <p></p> */}
      <CustomImage
        src="https://i.imgur.com/vqQCuor.jpg"
        alt="test"
        maxWidth="100px"
        loader={myLoader}
      />
      <MyImage src={testImage} alt="test" objectFit="fill" maxWidth="1000px" />
      <h1>My Image url</h1>
      {/* <h1></h1>
      <p></p> */}
      <MyImage
        src="https://i.imgur.com/vqQCuor.jpg"
        loader={myLoader}
        alt="test"
        objectFit="fill"
        maxWidth="1000px"
      />
      <h1>Image from static file</h1>
      <h1>lay out fill</h1>
      <p>
        phải có được bao bởi một thẻ div có relative, widh, height thì image mới
        hiển thị được
      </p>
      <div className="relative" style={{ height: "500px", width: "500px" }}>
        <Image src={testImage} layout="fill" alt="test" objectFit="fill" />
      </div>
      <h1>Image from url</h1>
      <p>phải có loader thì ảnh mới được tải</p>
      <div className="relative" style={{ height: "500px", width: "500px" }}>
        <Image
          src="https://i.imgur.com/vqQCuor.jpg"
          layout="fill"
          alt="test"
          objectFit="fill"
          loader={myLoader}
        />
      </div>
      <h1>Image responsive</h1>
      <div className="relative" style={{}}>
        <Image
          src="https://i.imgur.com/vqQCuor.jpg"
          layout="responsive"
          alt="test"
          width={1020}
          height={760}
          objectFit="fill"
          loader={myLoader}
        />
      </div>
    </div>
  );
}
