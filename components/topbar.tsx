import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TopBarProps {
  titl: string;
}

const TopBar: React.FC<TopBarProps> = ({ titl }) => {
  const router = useRouter();
  return (
    <View style={styles.topRow}>
      <TouchableOpacity onPress={() => router.back()}>
        <View style={styles.btnCircle}>
          <Ionicons name="chevron-back" size={35} color={"#ffff"} />
        </View>
      </TouchableOpacity>
      <View>
        <Text style={styles.pageTitel}>{titl}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topRow: {
    marginTop: 50,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  pageTitel: {
    marginLeft: 100,
    fontSize: 25,
    color: "#000000",
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  btnCircle: {
    marginLeft: 30,
    width: 40,
    height: 40,
    backgroundColor: "#7A33DD",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default TopBar;
