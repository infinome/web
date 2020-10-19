import React, { FC, useState } from "react";
import styled from "styled-components";
// import { Home } from "./list";
// import { HomePreview } from "../exercise-details/preview";
import { PanelView, View } from "../../components/layout/view";
// import { IContentPanel, IHome, ILinkElement } from "../../config/definitions";

export const EXERCISE_BG_HIGHLIGHT_COLOR: string = "rgba(243, 253, 253, 0.57)";
// const breadcrumb: ILinkElement[] = [{ label: "Home", path: "/" }];

// export interface IHomeViewProps {
//   selectedId?: string;
// }

export const HomeView: FC = () => {
  return <View contentTitle="Home">{"Home you are!"}</View>;
};
