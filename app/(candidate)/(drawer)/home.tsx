import JobCard from "@/components/reuseComponents/jobsCards";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.pageTitel}>Welcome Osama</Text>
        </View>
        <View style={styles.manuBtn}>
          <TouchableOpacity onPress={() => onToggle()}>
            <Ionicons name="menu" size={40} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.formColumn}>
          <TextInput
            placeholder="job title, category"
            placeholderTextColor="gray"
            style={styles.inputs}
          />
          <TextInput
            placeholder="location"
            keyboardType="web-search"
            placeholderTextColor="gray"
            style={styles.inputs}
          />
          <TouchableOpacity onPress={() => router}>
            <Text style={styles.searchBtn}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.joblist}>
          <Text style={styles.jblist}>Jobs List</Text>
        </View>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7f9fc",
  },
  topRow: {
    marginTop: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  pageTitel: {
    marginRight: Platform.OS === "ios" ? 148 : 167,
    position: "relative",
    marginLeft: Platform.OS === "ios" ? 20 : 20,
    fontSize: 25,
    color: "#000000",
    fontWeight: "600",
    fontFamily: "Poppins",
  },
  manuBtn: {
    position: "relative",
  },
  formColumn: {
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    marginTop: 30,
    paddingLeft: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "grey",
    height: 45.4,
    width: 378,
    borderRadius: 7,
  },
  searchBtn: {
    marginTop: 30,
    textAlign: "center",
    justifyContent: "center",
    width: 378,
    backgroundColor: "#7A33DD",
    borderRadius: 7,
    fontSize: 16,
    fontWeight: "medium",
    color: "#FFFFFF",
    paddingVertical: 14,
  },
  joblist: {
    position: "relative",
    marginTop: 20,
    marginLeft: 5,
  },
  jblist: {
    fontSize: 23,
    fontWeight: 500,
  },
});
export default Login;
