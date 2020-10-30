import { ILinkElement, IHomePageAware, Routes } from "./definitions";

export const NAVIGATION_ELEMENTS: ILinkElement[] = [
  { label: "News", path: Routes.NEWS },
  { label: "Team", path: Routes.TEAM },
  { label: "Contact", path: Routes.CONTACT }
];

export interface INavMenu extends IHomePageAware {
  navMenuItems?: ILinkElement[];
  currentTitle?: string;
}
