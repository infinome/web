import { ILinkElement } from "./definitions";

export const NAVIGATION_ELEMENTS: ILinkElement[] = [
  { label: "News", path: "/news" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" }
];

export interface INavMenu {
  navMenuItems?: ILinkElement[];
  currentTitle?: string;
}
