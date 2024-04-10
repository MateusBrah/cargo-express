import { View, Text } from "react-native";
import React from "react";
import useHome from "./useHome";

export default function HomeView() {
  const { } = useHome();

  return (
    <View >
      <Text>Home</Text>
    </View>
  );
}