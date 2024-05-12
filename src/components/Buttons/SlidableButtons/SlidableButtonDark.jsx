import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import {
  BUTTON_WIDTH,
  BUTTON_HEIGHT,
  BUTTON_PADDING,
  SWIPABLE_DIMENSIONS,
  H_SWIPE_RANGE,
  H_WAVE_RANGE,
  SWIPABLE_THUMB_DARK,
  SWIPABLE_BACKGROUND_DARK,
} from "./Constants";
import { ArrowRight, ChevronRight } from "../../../icons";

const SlidableButtonDark = ({ label, onPress }) => {
  const X = useSharedValue(0);
  const pan = Gesture.Pan()
    .onChange((e) => {
      X.value += e.changeX;
    })
    .onEnd((e) => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        onPress ? runOnJS(onPress)() : null;
      }
    });

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const animatedStyles = {
    swipable: useAnimatedStyle(() => {
      return {
        transform: [{ translateX: X.value }],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [1, 0],
          Extrapolation.CLAMP
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPABLE_DIMENSIONS],
              Extrapolation.CLAMP
            ),
          },
        ],
      };
    }),
  };
  return (
    <GestureHandlerRootView className="w-full">
      <View style={styles.swipeContainer}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.swipable, animatedStyles.swipable]}>
            <ArrowRight size={24} color="#000000" />
          </Animated.View>
        </GestureDetector>
        <Animated.View style={[styles.swipeText, animatedStyles.swipeText]}>
          <Text className="text-white font-urbanist-medium capitalize tracking-wider">{label}</Text>
          <View className="absolute right-5 flex flex-row">
            <ChevronRight size={22} color="#3b333c" />
            <ChevronRight size={26} color="#787779" />
            <ChevronRight size={28} color="#ffffff" />
          </View>
        </Animated.View>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  swipeContainer: {
    position: "relative",
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    padding: BUTTON_PADDING,
    borderRadius: BUTTON_HEIGHT,
    backgroundColor: SWIPABLE_BACKGROUND_DARK,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    overflow: "hidden",
  },
  swipable: {
    width: SWIPABLE_DIMENSIONS,
    height: SWIPABLE_DIMENSIONS,
    borderRadius: SWIPABLE_DIMENSIONS,
    backgroundColor: SWIPABLE_THUMB_DARK,
    position: "absolute",
    left: BUTTON_PADDING,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9,
  },
  swipeText: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SlidableButtonDark;
