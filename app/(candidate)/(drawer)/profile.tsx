import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SideBarHeader from "../../../components/reuseComponents/sideBarHeader";

const { width } = Dimensions.get("window");

const profile = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <SideBarHeader title="Profile" />
      </View>

      <View style={styles.wrapper}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require("../../../assets/candidate/u.jpeg")}
            style={styles.proImg}
          />
          <Text style={styles.profileName}>Mr Usama</Text>
          <Text style={styles.userId}>Software Engineer</Text>
        </View>

        {/* Skills Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Skills</Text>
          <Text style={styles.cardDescription}>
            Save your skills so you can get more opportunities if someone
            visited your profile
          </Text>
          <Text style={styles.skillsList}>React, Node, MongoDB, Firebase</Text>
        </View>

        {/* Analysis Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Analysis</Text>
          <Text style={styles.cardDescription}>
            You see information about your job seeking journey
          </Text>
          <View style={styles.iconRow}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/(candidate)/Jobs/Aplied")}
            >
              <Ionicons
                name="document-text-outline"
                size={50}
                color="#7A33DD"
              />
              <Text style={styles.iconLabel}>Applied</Text>
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/(candidate)/Jobs/SaveJob")}
            >
              <Ionicons name="bookmark" size={50} color="#7A33DD" />
              <Text style={styles.iconLabel}>Saved</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* CV Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>CV</Text>
          <Text style={styles.cardDescription}>
            Your CV is saved to make your job application easier.
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.uploadButton}>
              <Text style={styles.uploadButtonText}>Upload CV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.checkButton}>
              <Text style={styles.checkButtonText}>Check CV</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9fc",
  },
  contentContainer: {
    paddingBottom: 50,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 25,
    backgroundColor: "#f7f9fc",
  },
  wrapper: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },

  // Profile Section
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
  },
  proImg: {
    height: 120,
    width: 120,
    borderRadius: 60,
    resizeMode: "cover",
    borderWidth: 3,
    borderColor: "#7A33DD",
  },
  profileName: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "600",
    color: "#1F2937",
  },
  userId: {
    marginTop: 6,
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "500",
  },

  // Card Styles
  card: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 22,
    marginBottom: 16,
  },
  skillsList: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7A33DD",
    lineHeight: 24,
  },

  // Icon Row (Analysis)
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 10,
  },
  iconButton: {
    alignItems: "center",
    flex: 1,
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 14,
    color: "#4B5563",
    fontWeight: "500",
  },
  divider: {
    width: 1,
    height: 60,
    backgroundColor: "#E5E7EB",
  },

  // Button Row (CV)
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    gap: 12,
  },
  uploadButton: {
    flex: 1,
    backgroundColor: "#7A33DD",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#7A33DD",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  uploadButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  checkButton: {
    flex: 1,
    borderColor: "#7A33DD",
    borderWidth: 2,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  checkButtonText: {
    color: "#7A33DD",
    fontSize: 16,
    fontWeight: "600",
  },
});
