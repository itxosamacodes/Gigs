import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Profile}>
        <Image
          source={require("../../../assets/candidate/u.jpeg")}
          style={styles.proImg}
        />
        <Text style={styles.ProfileName}>Mr Usama</Text>
        <Text style={styles.UserId}>Software Engineer</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.skills}>
          <Text style={styles.skill}>Skills</Text>
          <Text style={styles.skillDes} numberOfLines={3} ellipsizeMode="tail">
            Save your skills so you can get more opportunities if someone
            visited your profile
          </Text>
          <Text style={styles.skillss}>React,Node,MongoDb,FireBase</Text>
        </View>
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
            <Ionicons
              name="document-text-outline"
              size={60}
              color="#7A33DD"
              onPress={() => router.push("/(candidate)/Jobs/TopTab")}
            />
            <View
              style={{
                width: 2,
                height: 50,
                backgroundColor: "gray",
              }}
            />
            <Ionicons
              name="bookmark"
              size={60}
              color="#7A33DD"
              onPress={() => router.push("/(candidate)/Jobs/TopTab")}
            />
          </View>
        </View>
        <View style={styles.CvCard}>
          <Text style={styles.Cv}>Cv</Text>
          <Text style={styles.Cvdes} numberOfLines={3} ellipsizeMode="tail">
            Your cv is saved to make you job application easier.
          </Text>
          <View style={styles.CvBtnRow}>
            <TouchableOpacity>
              <Text style={styles.upldBtn}>Upload CV</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.chkBtn}>Check CV</Text>
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
    height: 120,
    width: 120,
    borderRadius: "50%",
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
  skills: {
    position: "relative",
    alignSelf: "center",
    width: 336,
    height: 133,
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
  skill: {
    padding: 10,
    position: "absolute",
    top: 0,
    fontSize: 22,
    fontWeight: "500",
  },

  skillDes: {
    padding: 10,
    position: "absolute",
    top: "20%",
    fontSize: 16,
    color: "gray",
  },

  skillss: {
    padding: 10,
    position: "absolute",
    bottom: 0,
    fontSize: 20,
    fontWeight: "500",
  },
  analysisCard: {
    position: "relative",
    alignSelf: "center",
    width: 336,
    height: 183,
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
    top: "18%",
    fontSize: 16,
    color: "gray",
  },
  BtnRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: "50%",
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
    top: "18%",
    fontSize: 16,
    color: "gray",
  },
  CvBtnRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    top: "60%",
  },
  upldBtn: {
    backgroundColor: "#7A33DD",
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
    fontSize: 16,
    color: "#ffff",
  },
  chkBtn: {
    borderColor: "#7A33DD",
    borderWidth: 1.5,
    paddingVertical: 13,
    paddingHorizontal: 30,
    borderRadius: 10,
    fontSize: 16,
  },
});
