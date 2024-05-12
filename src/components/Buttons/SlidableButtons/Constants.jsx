import { Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get("window").width;
// export const BUTTON_WIDTH = 350;
export const BUTTON_WIDTH = WINDOW_WIDTH * 0.9;
export const BUTTON_HEIGHT = 70;
export const BUTTON_PADDING = 10;
export const SWIPABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;
export const H_WAVE_RANGE = SWIPABLE_DIMENSIONS - 2 * BUTTON_PADDING;
export const H_SWIPE_RANGE =
  BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPABLE_DIMENSIONS;

export const SWIPABLE_THUMB_DARK = "#ffffff";
export const SWIPABLE_BACKGROUND_DARK = "#1B1A1F";
export const SWIPABLE_THUMB_LIGHT = "#000000";
export const SWIPABLE_BACKGROUND_LIGHT = "#f8f8f8";
