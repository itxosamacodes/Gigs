import CustomDra from "@/components/reuseComponents/sideBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer
      drawerContent={CustomDra}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",

        drawerStyle: { width: 282, backgroundColor: "#fff" },

        drawerActiveBackgroundColor: "#a50e0ef0",
        drawerInactiveBackgroundColor: "#F2F2F2",

        drawerItemStyle: {
          borderRadius: 10,
          marginVertical: 10,
        },

        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "black",

        drawerLabelStyle: {
          fontSize: 18,
          fontWeight: "600",
        },

        drawerHideStatusBarOnOpen: true,
      }}
    >
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Policies"
        options={{
          drawerLabel: "Terms and Policies",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="lock-closed" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
}
