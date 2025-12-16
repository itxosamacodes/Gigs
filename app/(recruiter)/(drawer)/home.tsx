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
  TouchableOpacity,
  View,
} from "react-native";
const Login = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<any[]>([]);
  const navigation = useNavigation();
  const onToggle = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  const FetchOfferJobs = async () => {
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();
    console.log(" users name equal = :", user)
    if (userError || !user) {
      console.log("No user found");
      return;
    }
    const { data: job, error } = await supabase
      .from("job")
      .select("*")
      .eq("recruiter_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.log(error.message);
    } else {
      // if (job) {
      {
        setJobs(job);
      }
      // } else {
      //   setJobs([]);
      // }
      // If Supabase returns no jobs (null/undefined),
      // set an empty array instead.
      // This prevents app crashes when using jobs.map()
    }
  };

  useEffect(() => {
    FetchOfferJobs();
  }, []);
  return (
    console.log("Recruiter secessfuly loaded"),
    (
      <View style={styles.container}>
        {/* TopRow */}
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
          {/* header of the page */}
          <View style={styles.jobListContainer}>
            <Text style={styles.jobListTitle}>Offers Posted</Text>
            <TouchableOpacity
              onPress={() => router.push("/(recruiter)/JobOffer/postOffer")}
            >
              <Text style={styles.postOfferButton}>Post an Offer</Text>
            </TouchableOpacity>
          </View>

          {/* OfferJobs start here */}
          {jobs.map((job) => (
            <View key={job.id} style={styles.jobCard}>
              <View style={styles.crdRow}>
                <Text style={styles.jobTit}>{job.jobTitel}</Text>
                <TouchableOpacity
                  onPress={() => {
                    router.push("/(candidate)/Jobs/Aplied");
                  }}
                >
                  <Text style={styles.aplyBtn}>Delete</Text>
                </TouchableOpacity>
              </View>
              {/* jobs location here */}
              <View style={styles.tit}>
                <Text style={styles.txtS}>{job.companyLocation}</Text>
              </View>
              {/* job description start heree */}
              <View style={styles.destit}>
                <Text style={styles.destxtS}>job description</Text>
                <Text style={styles.descraption}>{job.jobDescription}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7f9fc",
  },
  // Header start here
  topRow: {
    position: "sticky",
    marginTop: 60,
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
    marginLeft: Platform.OS === "ios" ? -25 : 10,
  },
  // Job offering Header
  jobListContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  jobListTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
  },
  postOfferButton: {
    fontSize: 18,
    fontWeight: "500",
    color: "#7A33DD",
  },
  // Offered Job Layout
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
  aplyBtn: {
    padding: 12,
    marginRight: 15,
    paddingHorizontal: 27,
    backgroundColor: "#7A33DD",
    color: "#FFFFFF",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 500,
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

});
export default Login;
