import { supabase } from "@/utils/supabase";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
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
  const [jobs, setJob] = useState<any[]>([]);
  const fetchAllJobs = async () => {
    const { data: job, error } = await supabase
      .from("job")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.log("error = : ", error.message);
    } else {
      if (job) {
        setJob(job);
      } else {
        setJob([]);
      }
    }
  };
  useEffect(() => {
    fetchAllJobs();
  }, []);
  return (
    <View style={styles.container}>
      {/* =====> Header Section  */}
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
        {/* =====> Search / Filter Section  */}
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

        {/* =====> Jobs List Header Section  */}
        <View style={styles.joblist}>
          <Text style={styles.jblist}>Available Position</Text>
        </View>

        {/* =====> Job Cards Section */}
        {jobs.map((job) => (
          <View style={styles.jobCard} key={job.id}>
            <View style={styles.crdRow}>
              <Text style={styles.jobTit}>{job.jobTitel}</Text>
              <TouchableOpacity style={styles.saveButton} activeOpacity={0.7}>
                <Ionicons name="bookmark-outline" size={22} color="white" />
              </TouchableOpacity>
            </View>
            <View style={styles.tit}>
              <Text style={styles.txtS}>{job.companyLocation}</Text>
            </View>
            <View style={styles.destit}>
              <Text style={styles.destxtS}>{job.companyName}</Text>
              <Text style={styles.descraption}>{job.jobDescription}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  /*  Main Container  */
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7f9fc",
  },

  /*  Header / Top Row */
  topRow: {
    marginTop: 50,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    marginBottom: 20,
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

  /* Search / Form Section  */
  formColumn: {
    position: "relative",
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    height: 50,
    width: "100%",
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1.2,
    borderColor: "#E5E7EB",
    fontSize: 15,
    color: "#111827",
    marginBottom: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  searchBtn: {
    marginTop: 20,
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

  /* Jobs List Section */
  jobCard: {
    position: "relative",
    marginTop: 30,
    width: 376,
    height: 217,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    overflow: "hidden",
  },

  crdRow: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  jobTit: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 500,
    padding: 15,
  },
  saveButton: {
    padding: 10,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: "#7A33DD",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  tit: {
    marginTop: 40,
    textAlign: "center",
  },
  txtS: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 500,
    padding: 15,
    textDecorationLine: "underline",
  },
  destit: {
    marginTop: -20,
    textAlign: "center",
  },
  destxtS: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 600,
    padding: 15,
  },
  descraption: {
    textAlign: "left",
    paddingTop: -20,
    padding: 15,
    fontStyle: "italic",
    fontSize: 14,
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
