import JobCard from "@/components/reuseComponents/jobsCards";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
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
    console.log("Recruiter secessfuly loaded"),
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.pageTitel}>Welcome recruiter</Text>
        </View>
        <View style={styles.manuBtn}>
          <TouchableOpacity onPress={() => onToggle()}>
            <Ionicons name="menu" size={40} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.joblist}>
          <Text style={styles.jblist}>Offers Posted</Text>
          <TouchableOpacity
          // onPress={() => router.push("/recruiterScreens/JobOffer/postOffer")}
          >
            <Text style={styles.jblist}>Post an offer</Text>
          </TouchableOpacity>
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
    position: "fixed",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  topRow: {
    position: "sticky",
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
  joblist: {
    position: "relative",
    marginTop: 20,
    marginLeft: 5,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  jblist: {
    fontSize: 18,
    fontWeight: 500,
  },
});
export default Login;
