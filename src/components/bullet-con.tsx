import React, { FC } from "react";
import { IDimensions } from "../config/definitions";
import styled from "styled-components";
import { Colors } from "../config/styles";

const IconWrapper = styled.div`
  padding: 0.45rem 1rem 0 0;
`;

export const BulletIcon: FC<IDimensions> = ({ width, height, ...rest }) => {
  return (
    <IconWrapper>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 0H0V8H8V0Z" fill={Colors.TURQUOISE_67} />
      </svg>
    </IconWrapper>
  );
};
