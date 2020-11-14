import { ILinkElement, IHomePageAware, Routes } from "./definitions";

export const NAVIGATION_ELEMENTS: ILinkElement[] = [
  { label: "News", path: Routes.NEWS },
  { label: "Team", path: Routes.TEAM },
  { label: "Contact", path: Routes.CONTACT }
];

export interface INavigation {
  navigationHandler?(viewId: string): void;
}

export interface INavMenu extends IHomePageAware, INavigation {
  navMenuItems?: ILinkElement[];
  currentTitle?: string;
}
