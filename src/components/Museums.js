import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

function Museum({ data }) {
  return (
    <View style={{ backgroundColor: "#F6F6F6", padding: 10 }}>
      <Image source={{ uri: data.img }} style={{ height: 300, width: 350 }} />
      <Text style={styles.titleText}>{data.desc}</Text>
      <Button title={data.title} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
export default Museum;
