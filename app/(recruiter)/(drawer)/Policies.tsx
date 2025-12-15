import { ScrollView, StyleSheet, Text, View } from "react-native";
import SideBarHeader from "../../../components/reuseComponents/sideBarHeader";

export default function TermsAndPoliciesScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <SideBarHeader title="Terms & Policies" />
      </View>

      <View style={styles.wrapper}>
        {/* Terms & Conditions Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Terms & Conditions</Text>
          <Text style={styles.updated}>Last updated: January 1, 2025</Text>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>1. Account Usage</Text>
            <Text style={styles.text}>
              You are responsible for keeping your login information
              confidential. YourApp is not responsible for unauthorized access
              caused by your actions.
            </Text>
          </View>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>2. Acceptable Use</Text>
            <Text style={styles.text}>
              You agree not to misuse or disrupt the services provided by
              YourApp, including hacking, data scraping, or unauthorized
              modifications.
            </Text>
          </View>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>3. Content Ownership</Text>
            <Text style={styles.text}>
              All content displayed in the app is the property of YourApp unless
              otherwise stated.
            </Text>
          </View>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>4. Termination</Text>
            <Text style={styles.text}>
              We may suspend your account if you violate any terms or cause
              security risks within the platform.
            </Text>
          </View>
        </View>

        {/* Privacy Policy Section */}
        <View style={styles.section}>
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.updated}>Last updated: January 1, 2025</Text>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>1. Information We Collect</Text>
            <Text style={styles.text}>
              • Personal information (email address){"\n"}• Usage analytics
              {"\n"}• Device information
            </Text>
          </View>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>2. How We Use Information</Text>
            <Text style={styles.text}>
              We use collected information to enhance app performance,
              personalize content, and provide customer support.
            </Text>
          </View>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>3. Cookies & Tracking</Text>
            <Text style={styles.text}>
              We use basic analytics to understand how users interact with the
              app.
            </Text>
          </View>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>4. Data Sharing</Text>
            <Text style={styles.text}>
              We do not sell your information. Some non-sensitive data may be
              shared with trusted providers to improve service quality.
            </Text>
          </View>

          <View style={styles.contentBlock}>
            <Text style={styles.sectionTitle}>5. Your Rights</Text>
            <Text style={styles.text}>
              You can request to update or delete your data at any time by
              contacting us.
            </Text>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.contactText}>📧 osama@io.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

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
  },
  wrapper: {
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 15,
  },

  section: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 24,
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1F2937",
    textAlign: "center",
  },
  updated: {
    fontSize: 13,
    color: "#6B7280",
    marginBottom: 24,
    textAlign: "center",
    fontStyle: "italic",
  },

  contentBlock: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 8,
    lineHeight: 24,
  },
  text: {
    fontSize: 15,
    color: "#4B5563",
    lineHeight: 24,
  },

  contactSection: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    padding: 24,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  contactText: {
    fontSize: 16,
    color: "#7A33DD",
    fontWeight: "500",
    marginTop: 5,
  },
});
