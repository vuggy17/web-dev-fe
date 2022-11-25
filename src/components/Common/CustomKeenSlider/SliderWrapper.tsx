import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React, { ReactElement } from "react";

interface Props {
  children: ReactElement[];
}

export default function SliderWrapper({ children }: Props): ReactElement {
  const [sliderRef] = useKeenSlider({
    spacing: 10,
    slidesPerView: 1,
    centered: true,
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 2,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
    },
  });

  return (
    <div
      ref={sliderRef as React.RefObject<HTMLDivElement>}
      className="keen-slider"
    >
      {children.map((element, index) => {
        return (
          <div className="keen-slider__slide" key={index}>
            {element}
          </div>
        );
      })}
    </div>
  );
}
