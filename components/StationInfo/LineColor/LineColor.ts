import type LineColorType from "./LineColor.types";
import type { LineName } from "../StationInfo.types";

// prettier-ignore
const LineColor: LineColorType = {
  "01호선": "#0052A4",
  "02호선": "#009D3E",
  "03호선": "#EF7C1C",
  "04호선": "#00A5DE",
  "05호선": "#996CAC",
  "06호선": "#CD7C2F",
  "07호선": "#747F00",
  "08호선": "#EA545D",
  "09호선": "#BB8336",
  "인천선": "#7CA8D5",
  "인천2호선": "#ED8B00",
  "수인분당선": "#F5A200",
  "신분당선": "#D4003B",
  "경의선": "#77C4A3",
  "공항철도": "#0090D2",
  "경춘선": "#0C8E72",
  "의정부경전철": "#FDA600",
  "용인경전철": "#509F22",
  "경강선": "#003DA5",
  "우이신설경전철": "#B7C452",
  "서해선": "#81A914",
  "김포골드": "#A17800"
};

export const lineList: LineName[] = Object.keys(LineColor) as LineName[];

export default LineColor;
