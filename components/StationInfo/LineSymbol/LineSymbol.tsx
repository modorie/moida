import React from "react";

import { Layout, LineNumber } from "./LineSymbol.styled";

import type { LineType } from "./LineSymbol.types";
import type { LineName } from "@/components/StationInfo";

const LineSymbol = ({ name = "01호선" }: LineType) => {
  // prettier-ignore
  const lineRender: Record<LineName, string> = {
    "01호선": "1",
    "02호선": "2",
    "03호선": "3",
    "04호선": "4",
    "05호선": "5",
    "06호선": "6",
    "07호선": "7",
    "08호선": "8",
    "09호선": "9",
    "인천선": "인",
    "인천2호선": "인",
    "수인분당선": "수",
    "신분당선": "신",
    "경의선": "경",
    "공항철도": "공",
    "경춘선": "경",
    "의정부경전철": "의",
    "용인경전철": "용",
    "경강선": "경",
    "우이신설경전철": "우",
    "서해선": "서",
    "김포골드": "김"
  };

  return (
    <Layout text={name}>
      <LineNumber text={name}>{lineRender[name]}</LineNumber>
    </Layout>
  );
};

export default LineSymbol;
