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

export default function PostOffers() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>New Offer</Text>
      <View style={styles.formColumn}>
        <TextInput
          value={first}
          onChangeText={setFirst}
          placeholder="Post title"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          value={last}
          onChangeText={setLast}
          placeholder="Company name"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          value={first}
          onChangeText={setFirst}
          placeholder="Company location"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          value={last}
          onChangeText={setLast}
          placeholder="Post description"
          placeholderTextColor="#ccc"
          style={styles.inputDesBox}
        />
        <TouchableOpacity
          style={styles.nextBtn}
        // onPress={() =>
        //   router.push("/Screens/applyprocess/applicationProcess")
        // }
        >
          <Text style={styles.nextText}>POST</Text>
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
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: Platform.OS === "ios" ? 15 : 55,
  },

  formColumn: {
    marginVertical: 170,
    width: 343,
    marginHorizontal: 30,
  },
  input: {
    height: 45,
    borderWidth: 1.2,
    borderColor: "grey",
    borderRadius: 6,
    paddingHorizontal: 12,
    marginBottom: 32,
  },
  inputDesBox: {
    height: 175,
    borderWidth: 1.2,
    borderColor: "grey",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingBottom: "40%",
    marginBottom: 32,
  },
  nextBtn: {
    width: 340,
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
