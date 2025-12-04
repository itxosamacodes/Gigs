import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function TermsAndPoliciesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Terms & Conditions</Text>

      <Text style={styles.sectionTitle}>1. Account Usage</Text>
      <Text style={styles.updated}>Last updated: January 1, 2025</Text>

      <Text style={styles.text}>
        You are responsible for keeping your login information confidential.
        YourApp is not responsible for unauthorized access caused by your
        actions.
      </Text>

      <Text style={styles.sectionTitle}>2. Acceptable Use</Text>
      <Text style={styles.text}>
        You agree not to misuse or disrupt the services provided by YourApp,
        including hacking, data scraping, or unauthorized modifications.
      </Text>

      <Text style={styles.sectionTitle}>3. Content Ownership</Text>
      <Text style={styles.text}>
        All content displayed in the app is the property of YourApp unless
        otherwise stated.
      </Text>

      <Text style={styles.sectionTitle}>4. Termination</Text>
      <Text style={styles.text}>
        We may suspend your account if you violate any terms or cause security
        risks within the platform.
      </Text>

      <Text style={styles.title}>Privacy Policy</Text>

      <Text style={styles.sectionTitle}>1. Information We Collect</Text>
      <Text style={styles.updated}>Last updated: January 1, 2025</Text>

      <Text style={styles.text}>
        - Personal info (osama@gmail.com){"\n"}- Usage analytics {"\n"}- Device
        information
      </Text>

      <Text style={styles.sectionTitle}>2. How We Use Information</Text>
      <Text style={styles.text}>
        We use collected information to enhance app performance, personalize
        content, and provide customer support.
      </Text>

      <Text style={styles.sectionTitle}>3. Cookies & Tracking</Text>
      <Text style={styles.text}>
        We use basic analytics to understand how users interact with the app.
      </Text>

      <Text style={styles.sectionTitle}>4. Data Sharing</Text>
      <Text style={styles.text}>
        We do not sell your information. Some non-sensitive data may be shared
        with trusted providers to improve service quality.
      </Text>

      <Text style={styles.sectionTitle}>5. Your Rights</Text>
      <Text style={styles.text}>
        You can request to update or delete your data at any time by contacting
        us.
      </Text>

      <Text style={styles.sectionTitle}>Contact Us</Text>
      <Text style={styles.text}>📧 osama@io.com</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 10,
    color: "#111",
  },
  updated: {
    fontSize: 14,
    color: "#777",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    color: "#555",
    lineHeight: 22,
  },
});
