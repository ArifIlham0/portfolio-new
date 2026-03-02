"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useSwiper } from "swiper/react";

type Props = {
  containerStyles: string;
  buttonStyles: string;
  iconStyles?: string | null;
}

const ProjectSliderButton = (props: Props) => {
  const swiper = useSwiper();

  return (
    <div className={props.containerStyles}>
      <button
        onClick={() => swiper.slidePrev()}
        className={props.buttonStyles}
      >
        <PiCaretLeftBold className={props.iconStyles || ""}/>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={props.buttonStyles}
      >
        <PiCaretRightBold className={props.iconStyles || ""}/>
      </button>
    </div>
  )
}

export default ProjectSliderButton