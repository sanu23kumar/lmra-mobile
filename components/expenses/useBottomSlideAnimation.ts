import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  interpolate,
  Easing,
} from "react-native-reanimated";

export function useBottomSlideAnimation(initialOffset: number = 200) {
  const translateY = useSharedValue(initialOffset);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(translateY.value, { overshootClamping: true }),
      },
    ],
    opacity: withSpring(
      interpolate(
        translateY.value,
        [0, initialOffset / 2, initialOffset],
        [1, 1, 0]
      )
    ),
  }));

  const show = () => {
    translateY.value = 0; // Slide the form into view
  };

  const hide = () => {
    translateY.value = initialOffset; // Slide the form out of view
  };

  return { animatedStyle, show, hide };
}
