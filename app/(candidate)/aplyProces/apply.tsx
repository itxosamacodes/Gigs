import { router } from "expo-router";
import { useState } from "react";

import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ApplicationForm() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Application</Text>
      <Text style={styles.subTitle}>personal info</Text>
      <View style={styles.formColumn}>
        {/* FIRST NAME */}
        <Text style={styles.label}>First name</Text>
        <TextInput
          value={first}
          onChangeText={setFirst}
          placeholder="John"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        {/* LAST NAME */}
        <Text style={styles.label}>Last name</Text>
        <TextInput
          value={last}
          onChangeText={setLast}
          placeholder="Doe"
          placeholderTextColor="#ccc"
          style={styles.input}
        />

        {/* PHONE NUMBER */}
        <Text style={styles.label}>Phone number</Text>

        <View style={styles.phoneContainer}>
          <View style={styles.codeBox}>
            <Text style={styles.codeText}>+212 ▼</Text>
          </View>

          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder=""
            keyboardType="numeric"
            style={styles.phoneInput}
          />
        </View>
      </View>

      {/* BUTTON ROW */}
      <View style={styles.buttonRow}>
        {/* Cancel */}
        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        {/* Next */}
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => router.push("/(candidate)/aplyProces/cvPicker")}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: Platform.OS === "ios" ? 15 : 55,
  },

  subTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#c6c6c6",
    marginTop: 35,
  },
  formColumn: {
    marginTop: 120,
    width: 343,
    marginHorizontal: 30,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 8,
    fontWeight: 400,
  },

  input: {
    height: 45,
    borderWidth: 1.2,
    borderColor: "grey",
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.2,
    borderColor: "grey",
    borderRadius: 6,
    height: 45,
    overflow: "hidden",
    marginBottom: 40,
  },

  codeBox: {
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderRightColor: "grey",
    height: "100%",
  },

  codeText: {
    fontSize: 14,
  },

  phoneInput: {
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 14,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    width: 343,
    marginHorizontal: 30,
  },

  cancelBtn: {
    width: 140,
    height: 40,
    borderWidth: 1.5,
    borderColor: "#7A33DD",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    color: "#000",
    fontWeight: "500",
  },

  nextBtn: {
    width: 140,
    height: 40,
    backgroundColor: "#7A33DD",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontWeight: "500",
  },
});
