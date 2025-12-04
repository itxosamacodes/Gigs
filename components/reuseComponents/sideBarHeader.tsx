import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SidebarHeaderProps {
  title?: string;
}

const { width } = Dimensions.get("window");

const SideBarHeader = ({ title = "Welcome Osama" }: SidebarHeaderProps) => {
  const navigation = useNavigation();

  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.topRow}>
      <Text style={styles.pageTitle}>{title}</Text>

      <View style={styles.menuBtn}>
        <TouchableOpacity onPress={onToggle}>
          <Ionicons name="menu" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topRow: {
    marginTop: 30,
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: width * 0.02,
  },
  pageTitle: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "600",
    fontFamily: "Poppins",
    flex: 1,
  },
  menuBtn: {
    marginLeft: width * 0.02,
  },
});
export default SideBarHeader;
