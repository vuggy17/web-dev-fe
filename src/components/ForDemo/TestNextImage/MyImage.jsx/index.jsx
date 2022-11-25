import React from "react";
import NextImage from "next/image";
import styles from "./styles.module.scss";
export default function MyImage({
  width,
  maxWidth,
  height,
  maxHeight,
  ...res
}) {
  let widths = {};
  let heights = {};
  width ? (widths["width"] = width) : "100%";
  maxWidth ? (widths["maxWidth"] = maxWidth) : "100%";
  height ? (heights["height"] = height) : "100%";
  maxHeight ? (heights["maxHeight"] = maxHeight) : "100%";
  return (
    <div className={styles.container} style={{ ...widths, ...heights }}>
      <NextImage className={styles.image} layout="fill" {...res} />
    </div>
  );
}
