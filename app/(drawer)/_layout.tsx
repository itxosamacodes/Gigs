import CustomDra from "@/components/customdra";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Drawer
      drawerContent={CustomDra}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        // Drawer BG & WIDTH

        drawerStyle: { width: 282, backgroundColor: "#ffff" },

        drawerActiveBackgroundColor: "#a50e0ef0",
        drawerInactiveBackgroundColor: "#F2F2F2",
        // Item styling
        drawerItemStyle: {
          alignContent: "center",
          borderRadius: 10,
          marginVertical: 10,
        },

        drawerActiveTintColor: "while",
        drawerInactiveTintColor: "black",
        // Text labels
        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: "600",
        },
        drawerAllowFontScaling: true,
        drawerHideStatusBarOnOpen: true,
      }}
    >
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person" color="color" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" color="color" size={size} />
          ),
        }}
      />
      <Drawer.Screen name="(tabs)" />

      <Drawer.Screen
        name="Policies"
        options={{
          drawerLabel: "Terms and Policies",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="lock-closed" color="color" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="help"
        options={{
          drawerLabel: "Help Me",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="help-circle" color="color" size={size} />
          ),
        }}
      />
    </Drawer>
  );
};

export default _layout;

const styles = StyleSheet.create({});
