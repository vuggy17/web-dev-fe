import CustomImage from "@components/Common/CustomImage";
import React, { useEffect, useState } from "react";
import testImage from "@public/images/template/shop/shop1.jpg";
import testImage2 from "@public/images/template/shop/shop2.jpg";
import { imageLoader } from "src/app/services";

const testDataImage = [
  {
    id: 0,
    image: testImage,
  },
  {
    id: 6,
    image: testImage2,
  },
  {
    id: 2,
    image: testImage2,
  },
  {
    id: 3,
    image: testImage2,
  },
  {
    id: 5,
    image: testImage2,
  },
];

function ProductImages({ listImages }) {
  const [imageArray, setImageArray] = useState(listImages);
  const [currentImage, setCurrentImage] = useState(listImages[0]);
  const handleOnClickImage = (value) => {
    const selectionImage = value.currentTarget.id;
    swapImage(selectionImage);
  };

  //swap image duoc chon vao vi tri so 0
  const swapImage = (index) => {
    [imageArray[0], imageArray[index]] = [imageArray[index], imageArray[0]];
    const newArray = [...imageArray];

    setImageArray(newArray);
  };

  useEffect(() => {
    setImageArray(listImages);
    setCurrentImage(listImages[0]);
  }, [listImages]);

  return (
    <div className="overflow-hidden">
      <div className="mb-3 ">
        <CustomImage
          src={currentImage.url}
          alt={currentImage.alt}
          loader={imageLoader}
        />
      </div>
      <div className="grid grid-cols-5 gap-2">
        {imageArray.map((image, index) => {
          return (
            <div
              key={index}
              id={index}
              // style={{ minWidth: "30px", maxWidth: "100px" }}
              className=" cursor-pointer "
              onClick={() => {
                setCurrentImage(image);
              }}
            >
              <div>
                <CustomImage
                  src={image.url}
                  alt={image.alt}
                  loader={imageLoader}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductImages;
