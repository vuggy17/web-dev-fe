import { useEmblaCarousel } from "embla-carousel/react";
import React, { useCallback } from "react";
import BannerItem from "../BannerItem";
import { BANNER_DATA } from "../fakeData";
import styles from "./carousel.module.scss";
const settings = { skipSnaps: false, loop: true };
export default function MyCarousel({ listBanners }) {
  const [emblaRef, embla] = useEmblaCarousel(settings);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  //
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        height: "max-content",
        position: "relative",
      }}
    >
      <div className={styles.prevWrapper}>
        <button className={styles.btnPrev} onClick={scrollPrev}>
          <PrevIcon />
        </button>
      </div>
      <div className={styles.nextWrapper}>
        <button className={styles.btnNext} onClick={scrollNext}>
          <NextIcon />
        </button>
      </div>
      <div
        style={{ overflow: "hidden", width: "100%", position: "relative" }}
        className="embla"
        ref={emblaRef}
      >
        <div
          className="embla__container"
          style={{
            display: "flex",
          }}
        >
          {listBanners.map((banner, index) => {
            return (
              <div
                key={banner.id}
                className="embla__slide"
                style={{
                  position: "relative",
                  flex: "0 0 100%",
                  maxWidth: "100%",
                  overflow: "hidden",
                }}
              >
                <BannerItem bannerInfo={banner} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function NextIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="white"
    >
      <path
        fillRule="evenodd"
        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PrevIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="white"
    >
      <path
        fillRule="evenodd"
        d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}
