import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.topbar}>
          <Text style={styles.headerText}>Gigs</Text>
          <Text style={styles.subTitle}>You can find your dream job here!</Text>
        </View>

        <View style={styles.column}>
          <View style={styles.rowItem}>
            <View style={styles.avatarContainer}>
              <Image
                source={require("../assets/images/hmimg/frt.png")}
                style={{ width: 50, height: 50, borderRadius: 10 }}
              />
            </View>
            <View>
              <Text style={styles.rowText}>
                Search for the job in different catgories, choose the one that
                category and place that suits you
              </Text>
            </View>
          </View>

          <View style={styles.rowItem}>
            <View style={styles.avatarContainer}>
              <Image
                source={require("../assets/images/hmimg/scn.png")}
                style={{ width: 50, height: 50, borderRadius: 10 }}
              />
            </View>
            <Text style={styles.rowText}>
              Build a profesional resume, that attracts recruters for better
              oppertunities.
            </Text>
          </View>

          <View style={styles.rowItem}>
            <View style={styles.avatarContainer}>
              <Image
                source={require("../assets/images/hmimg/trd.png")}
                style={{ width: 50, height: 50, borderRadius: 10 }}
              />
            </View>
            <Text style={styles.rowText}>
              Stay in touch with recruters, to know from them and have more
              chancs.
            </Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => router.push("/Screens/Login/Signin")}
          >
            <Text style={styles.candidateButton}>Start as a condidate</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(tabs)/hook")}>
            <Text style={styles.recruiterButton}>Start as a recruiter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EC4545",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topbar: {
    flex: 2,
  },
  headerText: {
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 30,
  },
  subTitle: {
    textAlign: "center",
    padding: 40,
    fontSize: 18,
    fontStyle: "italic",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  column: {
    flex: 4,
    marginTop: 60,
    marginLeft: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    margin: 10,
    marginRight: 20,
  },
  avatarContainer: {
    margin: 20,
    marginRight: 8,
    borderRadius: 50,
    width: 70,
    height: 69,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  rowText: {
    margin: 20,
    marginLeft: 2,
    width: 270,
    height: 73,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    color: "#FFFFFF",
  },
  buttonRow: {
    flex: 0.6,
    marginTop: 80,
    flexDirection: "row",
  },
  candidateButton: {
    marginLeft: 30,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
    width: 196,
    textAlign: "center",
    padding: 18,
    color: "#E13E3E",
    backgroundColor: "#FFFFFF",
  },
  recruiterButton: {
    marginLeft: 10,
    marginRight: 30,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
    width: 195,
    textAlign: "center",
    padding: 17,
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
});

export default Index;
