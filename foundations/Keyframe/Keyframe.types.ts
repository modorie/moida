import { Keyframes } from "styled-components";

// prettier-ignore
export type KeyframeKey =
  | "slideInLeft"
  | "slideInUp";

type KeyframeType = Record<KeyframeKey, Keyframes>;

export default KeyframeType;
