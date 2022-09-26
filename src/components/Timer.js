import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import { useState } from "react";

export default function Timer({onPress}) {
    const onClick = (time) => {
        onPress(time)
    }
  return (
    <View style={styles.timerContainer}>
      <FlatList
        data={[
          { key: "5s", time: 5 },
          { key: "10s", time: 10 },
          { key: "15s", time: 15 },
          { key: "20s", time: 20 },
          { key: "25s", time: 25 },
          { key: "30s", time: 30 },
          { key: "35s", time: 35 },
          { key: "40s", time: 40 },
          { key: "45s", time: 45 },
          { key: "50s", time: 50 },
        ]}
        style={styles.timerList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onClick(item.time)}>
            <Text style={styles.item}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timerContainer: {
    position: "absolute",
    width: "50%",
    top: "25%",
    right: "25%",
    backgroundColor: "white",
    zIndex: 1,
    borderRadius: 10,
    padding: 10,
  },
  timerList: {
    height: "100%",
  },
  item: {
    fontSize: 18,
    textAlign: "center",
    height: 44,
    fontWeight: "bold",
  },
});
