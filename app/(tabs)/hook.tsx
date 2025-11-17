import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Hook = () => {
  console.log("screen sucefuly reloaded");
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("useeffect call when button press ");
  });
  useEffect(() => {
    console.log("useeffect call only its one");
  }, []);
  useEffect(() => {
    console.log("useeffect call for counter");
  }, [count]);
  return (
    <View style={styles.mainn}>
      <TouchableOpacity
        onPress={() => {
          setcount(count + 1);

          console.log(count);
        }}
      >
        <Text style={styles.btn}>Increas +</Text>
      </TouchableOpacity>
      <Text style={styles.btnn}> {count}</Text>
      <TouchableOpacity
        onPress={() => {
          setcount(count - 1);

          console.log(count);
        }}
      >
        <Text style={styles.btnt}>Decreas -</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setcount(count - count);

          console.log(count);
        }}
      >
        <Text style={styles.btnt}>Decreas -</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainn: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fffff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "red",
    color: "#ffff",
    paddingHorizontal: 22,
    paddingVertical: 15,
    fontWeight: "500",
    borderRadius: 10,
    fontSize: 22,
  },
  btnn: {
    backgroundColor: "yellow",
    color: "#00000",
    paddingHorizontal: 22,
    paddingVertical: 15,
    fontWeight: "500",
    borderRadius: 10,
    fontSize: 18,
  },
  btnt: {
    backgroundColor: "green",
    color: "#ffff",
    paddingHorizontal: 22,
    paddingVertical: 15,
    fontWeight: "500",
    borderRadius: 10,
    fontSize: 22,
  },
});

export default Hook;
