import React, { FC } from "react";
import { IDimensions } from "../config/definitions";

export const BackgroundAngleOverlay: FC<IDimensions> = ({
  width,
  height,
  ...rest
}) => {
  return (
    <svg
      width="684"
      height="600"
      viewBox="0 0 684 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.74"
        d="M614.899 0L0 600H684V0H614.899Z"
        fill="#5A7D59"
        fill-opacity="0.23"
      />
    </svg>
  );
};
