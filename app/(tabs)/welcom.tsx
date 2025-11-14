import JobCard from "@/components/jobcard";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
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
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.pageTitel}>Welcome Osama</Text>
        </View>
        <View style={styles.manuBtn}>
          <Ionicons name="menu" size={40} color={"black"} />
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
          <TouchableOpacity onPress={() => router.push("/(tabs)/verifyscreen")}>
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
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <View style={styles.menuee}>
          <Image
            source={require("../../assets/images/hmimg/image.png")}
            style={styles.img}
            resizeMode="cover"
          ></Image>
        </View>
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
  formColumn: {
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    marginTop: 30,
    paddingLeft: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#FF0000",
    height: 45.4,
    width: 378,
    borderRadius: 7,
  },
  searchBtn: {
    marginTop: 30,
    textAlign: "center",
    justifyContent: "center",
    width: 378,
    backgroundColor: "#E11F1F",
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
  menuee: {
    position: "relative",
    height: 776,
    width: 282,
    backgroundColor: "#ffffff4b",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    bottom: 50,
  },
  img: {
    top: 26,
    right: -12,
    transform: [{ scaleY: -1 }, { rotate: "270deg" }],
    borderRadius: 10,
  },
});
export default Login;
