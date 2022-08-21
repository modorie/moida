import { DefaultTheme } from "styled-components";

import {
  Color,
  FontSize,
  FontWeight,
  Keyframe,
  Transition,
} from "@/foundations";
import type {
  ColorType,
  FontSizeType,
  FontWeightType,
  KeyframeType,
} from "@/foundations";

export interface ThemeType {
  color: ColorType;
  fontSize: FontSizeType;
  fontWeight: FontWeightType;
  keyframe: KeyframeType;
  transition: string;
}

const Theme: ThemeType = {
  color: Color,
  fontSize: FontSize,
  fontWeight: FontWeight,
  keyframe: Keyframe,
  transition: Transition,
};

export default Theme;
