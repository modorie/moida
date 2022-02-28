import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";
import Edit from "./Edit";
import List from "./List";
import MapPin from "./MapPin";
import Menu from "./Menu";
import MoreHorizontal from "./MoreHorizontal";
import MoreVertical from "./MoreVertical";
import Search from "./Search";
import Share from "./Share";
import Share2 from "./Share2";
import Stack from "./Stack";
import X from "./X";

// prettier-ignore
const icons = {
  "chevron-left": ChevronLeft,
  "chevron-right": ChevronRight,
  "edit": Edit,
  "list": List,
  "map-pin": MapPin,
  "menu": Menu,
  "more-horizontal": MoreHorizontal,
  "more-vertical": MoreVertical,
  "search": Search,
  "share": Share,
  "share2": Share2,
  "stack": Stack,
  "x": X,
};

export type IconName = keyof typeof icons;

export const iconList: IconName[] = Object.keys(icons) as IconName[];

export default icons;
