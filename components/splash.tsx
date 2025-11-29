import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();
  const [isSplashVisible, setSplashVisible] = useState(true);
  const fadeAnim = new Animated.Value(1); // For fade-out animation

  useEffect(() => {
    // Keep splash visible for 3 seconds
    const timer = setTimeout(() => {
      // Start fade out animation
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500, // 0.5 second fade out
        useNativeDriver: true,
      }).start(() => {
        setSplashVisible(false); // Remove splash from DOM after animation
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // --- THE NEW SPLASH SCREEN COMPONENT ---
  if (isSplashVisible) {
    return (
      <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
        <StatusBar barStyle="light-content" />
        <View style={styles.centerContent}>
          <Text style={styles.splashTitle}>Gigs</Text>
          <Text style={styles.splashSubtitle}>
            You can find your dream job here!
          </Text>
        </View>
      </Animated.View>
    );
  }

  // --- YOUR ORIGINAL ONBOARDING SCREEN ---
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
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
                Search for the job in different categories, choose the one that
                suits you best.
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
              Build a professional resume that attracts recruiters for better
              opportunities.
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
              Stay in touch with recruiters to learn from them and have more
              chances.
            </Text>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => router.push("/Screens/Login/Signin")}
          >
            <Text style={styles.candidateButton}>Start as a candidate</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/recruiterScreens/Login/Signin")}
          >
            <Text style={styles.recruiterButton}>Start as a recruiter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // --- SPLASH SCREEN STYLES ---
  splashContainer: {
    flex: 1,
    backgroundColor: "#EC4545",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute", // Ensures it covers everything
    zIndex: 10, // Keeps it on top
  },
  centerContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  splashTitle: {
    fontSize: 80, // Very large for the logo effect
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    letterSpacing: -2, // Tighter letter spacing for a logo feel
  },
  splashSubtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontStyle: "italic",
    opacity: 0.9,
  },

  // --- ORIGINAL ONBOARDING STYLES ---
  container: {
    flex: 1, // Changed to flex: 1 to fill screen properly
    backgroundColor: "#EC4545",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topbar: {
    flex: 2,
    alignItems: "center", // Center alignment fix
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
    paddingHorizontal: 40,
    paddingBottom: 20,
    fontSize: 18,
    fontStyle: "italic",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  column: {
    flex: 4,
    marginTop: 20, // Adjusted margin
    width: "100%", // Ensure full width
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 20,
    padding: 10, // Added padding for better spacing
  },
  avatarContainer: {
    marginRight: 15,
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  rowText: {
    flex: 1, // Allow text to take remaining space
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    color: "#FFFFFF",
    lineHeight: 20,
  },
  buttonRow: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly", // Better button spacing
    alignItems: "center",
    marginBottom: 30,
  },
  candidateButton: {
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 18,
    paddingHorizontal: 20,
    color: "#E13E3E",
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  recruiterButton: {
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    overflow: "hidden",
  },
});
