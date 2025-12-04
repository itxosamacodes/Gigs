import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomSide(props: any) {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <DrawerContentScrollView
        scrollEnabled={false}
        {...props}
        contentContainerStyle={{
          paddingTop: top + 20,
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 25,
          }}
        >
          <Image
            source={require("../assets/u.jpeg")}
            style={{
              width: 90,
              height: 90,
              borderRadius: 45,
              marginBottom: 10,
            }}
          />

          <Text
            style={{
              fontSize: 20,
              color: "black",
              fontWeight: "600",
              fontStyle: "italic",
              marginBottom: 80,
            }}
          >
            Usama
          </Text>
        </View>
        {/* pagess icon buttos */}
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      {/* Fotter */}
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
          padding: 15,
          paddingBottom: bottom + 10,
        }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
          onPress={() => {
            router.replace("/");
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: "#7A33DD",
              fontWeight: "600",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
