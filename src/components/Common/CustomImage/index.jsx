import React from "react";
import NextImage from "next/image";
import styles from "./styles.module.scss";
import placeHolderImage from "@public/images/official/logo/DR DONG PHUONG - LOGO - FINAL WORK - BLACK.png";
export default function CustomImage({
  width,
  maxWidth,
  height,
  maxHeight,
  ...res
}) {
  let widths = {};
  let heights = {};
  let imageProps = { ...res };
  let src = res.src;
  if (!src) {
    src = placeHolderImage;
    imageProps = { ...res, src, loader: ({ src }) => src };
  }
  width ? (widths["width"] = width) : "100%";
  maxWidth ? (widths["maxWidth"] = maxWidth) : "100%";
  height ? (heights["height"] = height) : "100%";
  maxHeight ? (heights["maxHeight"] = maxHeight) : "100%";
  return (
    <div className={styles.container} style={{ ...widths, ...heights }}>
      <NextImage className={styles.image} layout="fill" {...imageProps} />
    </div>
  );
}
