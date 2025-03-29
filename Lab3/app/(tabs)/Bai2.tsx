import { FlatList, StyleSheet, Text, View, ViewToken } from "react-native";
import React from "react";
import { useSharedValue } from "react-native-reanimated";
import ListItem from "./ListItem";
const data = new Array(50).fill(0).map((_, index) => ({ id: index }));
export default function Bai2() {
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id.toString()}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={(item) => (
          <ListItem item={item.item} viewableItems={viewableItems} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
