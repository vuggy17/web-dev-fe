import React from "react";
import styles from "./BannerItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import CustomImage from "@components/Common/CustomImage";
import { imageLoader } from "@app/services";
// const myLoader = ({ src }) => {
//   const domain = "http://103.142.137.207:8080";
//   return `${domain}${src}`;
// };
export default function BannerItem({ bannerInfo }) {
  return (
    <div className={styles.bannerItemContainer}>
      <div className={styles.bannerImageWrapper}>
        <div className={styles.bannerImage}>
          {/* <Image
            src={bannerInfo?.media.url || ""}
            alt={bannerInfo?.media.alt}
            width={1440}
            height={500}
            layout="responsive"
            loader={imageLoader}
          /> */}
          {/* <CustomImage
            src={bannerInfo?.media.url}
            alt={bannerInfo?.media.alt}
            // layout="responsive"
            objectFit="cover"
            loader={imageLoader}
          /> */}
          <Image
            src={bannerInfo?.media.url}
            layout="fill"
            objectFit="cover"
            loader={imageLoader}
          />
        </div>
      </div>
      {bannerInfo.type === "cta" ? (
        <div className={styles.overlay}>
          <div className={styles.bannerContentWrapper}>
            <div className={styles.bannerContent}>
              <div className={styles.postContent}>
                <div className={styles.subTitle}> {bannerInfo?.sub_title}</div>
                <div className={styles.title}>{bannerInfo?.title}</div>
                <div style={{}} className={styles.description}>
                  {bannerInfo?.content}
                </div>
                <div className={styles.callToAction}>
                  <Link passHref href={bannerInfo?.button_url}>
                    <button className={styles.btn}>
                      {bannerInfo?.button_text}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
