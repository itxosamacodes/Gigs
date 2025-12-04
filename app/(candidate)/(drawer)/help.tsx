import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SideBarHeader from "../../../components/reuseComponents/sideBarHeader";

const { width } = Dimensions.get("window");

const Help = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        "Tap the Sign Up button on the home screen and follow the instructions.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Go to Login, tap 'Forgot Password', and follow the email instructions.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Email us at support@gigsapp.com and we'll respond within 24 hours.",
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 50,
        paddingHorizontal: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <SideBarHeader title="Help & Support" />

        {/* Centered Content */}
        <View style={styles.contentWrapper}>
          <View style={styles.headerSection}>
            <Text style={styles.subtitle}>
              Find answers to common questions or contact our support team.
            </Text>
          </View>

          <View style={styles.faqSection}>
            {faqs.map((faq, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.question}>{faq.question}</Text>
                <Text style={styles.answer}>{faq.answer}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    alignItems: "center",
  },
  contentWrapper: {
    width: "100%",
    maxWidth: 500,
    alignItems: "center",
    paddingHorizontal: 5,
  },

  headerSection: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
    lineHeight: 22,
    paddingHorizontal: 10,
  },

  faqSection: {
    width: "100%",
    marginBottom: 10,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  question: {
    fontSize: 17,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
    lineHeight: 24,
  },
  answer: {
    fontSize: 15,
    color: "#6B7280",
    lineHeight: 22,
  },

  contactButton: {
    marginTop: 15,
    backgroundColor: "#7A33DD",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    alignItems: "center",
    width: "90%",
    shadowColor: "#7A33DD",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  contactText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
