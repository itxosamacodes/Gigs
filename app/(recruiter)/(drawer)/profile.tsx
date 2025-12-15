import Ionicons from "@expo/vector-icons/Ionicons";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Profile}>
        <Image
          source={require("../../../assets/candidate/u.jpeg")}
          style={styles.proImg}
        />
        <Text style={styles.ProfileName}>Mr Usama</Text>
        <Text style={styles.UserId}>Hr</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.analysisCard}>
          <Text style={styles.Analysis}>Analysis</Text>
          <Text
            style={styles.Analysisdes}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            You see information about you jobs seeking journey
          </Text>
          <View style={styles.BtnRow}>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="document-text"
                size={60}
                color="#E86767"
              // onPress={() => router.push("/Screens/Jobs/TopTab")}
              />
              <Text style={styles.tite}>10 job </Text>
              <Text style={styles.tite}>offers</Text>
            </View>

            <View
              style={{
                width: 2,
                height: 50,
                backgroundColor: "gray",
              }}
            />
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Ionicons
                name="arrow-down-outline"
                size={60}
                color="#E86767"
              // onPress={() => router.push("/Screens/Jobs/TopTab")}
              />
              <Text style={styles.tite}>recieved</Text>
              <Text style={styles.tite}>application</Text>
            </View>
          </View>
        </View>
        <View style={styles.CvCard}>
          <Text style={styles.Cv}>Cv</Text>
          <Text style={styles.Cvdes} numberOfLines={3} ellipsizeMode="tail">
            Your cv is saved to make you job application easier.
          </Text>
          <View style={styles.CvBtnRow}>
            <TouchableOpacity
            // onPress={() =>
            //   router.push("/recruiterScreens/JobOffer/postOffer")
            // }
            >
              <Text style={styles.upldBtn}>Create new post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#ffff",
  },
  Profile: {
    position: "relative",
    top: 15,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  proImg: {
    height: 110,
    width: 110,
    borderRadius: Platform.OS == "ios" ? "50%" : 80,
    resizeMode: "cover",
  },
  ProfileName: {
    paddingTop: 10,
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: 400,
  },
  UserId: {
    paddingTop: 8,
    color: "gray",
    fontSize: 22,
    fontWeight: "semibold",
  },
  main: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 2,
  },
  analysisCard: {
    position: "relative",
    alignSelf: "center",
    width: 336,
    height: 213,
    borderColor: "gray",
    borderWidth: 1.5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 8,
  },
  Analysis: {
    padding: 10,
    position: "absolute",
    top: 0,
    fontSize: 22,
    fontWeight: "500",
  },

  Analysisdes: {
    padding: 8,
    position: "absolute",
    top: Platform.OS == "ios" ? "18%" : 38,
    fontSize: 16,
    color: "gray",
  },

  BtnRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: Platform.OS == "ios" ? "50%" : 80,
  },
  tite: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "semibold",
  },
  CvCard: {
    position: "relative",
    alignSelf: "center",
    width: 336,
    height: 163,
    borderColor: "gray",
    borderWidth: 1.5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 8,
  },
  Cv: {
    padding: 10,
    position: "absolute",
    top: 0,
    fontSize: 22,
    fontWeight: "500",
  },

  Cvdes: {
    padding: 8,
    position: "absolute",
    top: Platform.OS == "ios" ? "18%" : 38,
    fontSize: 16,
    color: "gray",
  },
  CvBtnRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: Platform.OS == "ios" ? "60%" : 100,
  },
  upldBtn: {
    backgroundColor: "#E86767",
    paddingVertical: 13,
    paddingHorizontal: 70,
    borderRadius: 10,
    fontSize: 18,
    color: "#ffff",
  },
});
