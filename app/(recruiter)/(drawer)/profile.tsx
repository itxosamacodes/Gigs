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

const RecruiterProfile = () => {
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
          <Text style={styles.userId}>HR Manager</Text>
        </View>

        {/* Analysis Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Analysis</Text>
          <Text style={styles.cardDescription}>
            You see information about your job seeking journey
          </Text>
          <View style={styles.iconRow}>
            <View style={styles.iconButton}>
              <TouchableOpacity onPress={() => router.push('/(recruiter)/(drawer)/home')}>

                <Ionicons name="document-text-outline" size={60} color="#7A33DD" />
                <Text style={styles.iconLabel}>10 Job</Text>
                <Text style={styles.iconLabel}>Offers</Text>
              </TouchableOpacity>

            </View>

            <View style={styles.divider} />

            <View style={styles.iconButton}>
              <Ionicons name="arrow-down-outline" size={60} color="#7A33DD" />
              <Text style={styles.iconLabel}>Received</Text>
              <Text style={styles.iconLabel}>Applications</Text>
            </View>
          </View>
        </View>

        {/* CV / Action Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Post a Job</Text>
          <Text style={styles.cardDescription}>
            Create new job postings to attract the best candidates.
          </Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={() => router.push('/JobOffer/postOffer')} style={styles.postButton}>
              <Text style={styles.postButtonText}>Create New Post</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RecruiterProfile;

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

  // Icon Row (Analysis)
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  iconButton: {
    alignItems: "center",
    flex: 1,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 15,
    color: "black",
    fontWeight: "500",
    textAlign: "center",
  },
  divider: {
    width: 1,
    height: 70,
    backgroundColor: "#E5E7EB",
  },

  // Button Row (Post Job)
  buttonRow: {
    marginTop: 10,
  },
  postButton: {
    backgroundColor: "#7A33DD",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#7A33DD",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  postButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "400",
  },
});