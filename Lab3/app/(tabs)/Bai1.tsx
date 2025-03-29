import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Bai1() {
  const translatesY = useSharedValue<number>(0);
  const handlePress = () => {
    translatesY.value += 50;
  };
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translatesY.value * 2) }],
  }));
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Button title="Click" onPress={handlePress} />
      <Animated.View
        style={[
          { width: 50, height: 50, backgroundColor: "red" },
          animatedStyles,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
