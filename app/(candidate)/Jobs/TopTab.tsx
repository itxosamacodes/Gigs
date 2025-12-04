import Ionicons from "@expo/vector-icons/Ionicons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Applied from "./Aplied";
import SaveJob from "./SaveJob";

const Tab = createMaterialTopTabNavigator();

export default function JobTabs() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.topRow}>
        <Text style={styles.pageTitle}>Welcome Osama</Text>

        <TouchableOpacity style={styles.menuBtn}>
          <Ionicons name="menu" size={40} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1 }}>
        <Tab.Navigator
          initialRouteName="Applied Job"
          screenOptions={{
            tabBarActiveTintColor: "#FF0000",
            tabBarInactiveTintColor: "#000",
            tabBarIndicatorStyle: {
              backgroundColor: "#FF0000",
              height: 3,
              borderRadius: 20,
            },
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: "600",
            },
            tabBarStyle: {
              backgroundColor: "#fff",
              elevation: 5,
              shadowOpacity: 0,
            },
          }}
        >
          <Tab.Screen name="Applied Job" component={Applied} />
          <Tab.Screen name="Saved Job" component={SaveJob} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: {
    marginTop: 50,
    height: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pageTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
  },
  menuBtn: {
    padding: 5,
  },
});
