import React, { FC, useState } from "react";
import styled from "styled-components";
// import { News } from "./list";
// import { NewsPreview } from "../exercise-details/preview";
import { PanelView, View } from "../../components/layout/view";
// import { IContentPanel, INews, ILinkElement } from "../../config/definitions";

export const EXERCISE_BG_HIGHLIGHT_COLOR: string = "rgba(243, 253, 253, 0.57)";
// const breadcrumb: ILinkElement[] = [{ label: "News", path: "/" }];

// export interface INewsViewProps {
//   selectedId?: string;
// }

export const NewsView: FC = () => {
  return <View contentTitle="News">{"News you are!"}</View>;
};
