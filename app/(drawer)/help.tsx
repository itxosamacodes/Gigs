import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
        "Email us at support@gigsapp.com and we’ll respond within 24 hours.",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={styles.title}>Help & Support</Text>
      <Text style={styles.subtitle}>
        Find answers to common questions or contact our support team.
      </Text>

      {faqs.map((faq, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactText}>Contact Support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f9fc",
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  question: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    color: "#6B7280",
  },
  contactButton: {
    marginTop: 20,
    backgroundColor: "red",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  contactText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
