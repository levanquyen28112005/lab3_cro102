import { StyleSheet, Text, View, ViewToken } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
type ItemType = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};
export default function ListItem({ item, viewableItems }: ItemType) {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable)
        .find((viewableItem) => viewableItem.item.id === item.id)
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: "90%",
          height: 80,
          backgroundColor: "#78CAD2",
          marginTop: 20,
          borderRadius: 15,
          alignSelf: "center",
        },
        rStyle,
      ]}
    ></Animated.View>
  );
}

const styles = StyleSheet.create({});
