import { Keyframes } from "styled-components";

export type KeyframeKey =
  | "slideInLeft"
  | "slideInUp";

export type KeyframeType = Record<KeyframeKey, Keyframes>;

