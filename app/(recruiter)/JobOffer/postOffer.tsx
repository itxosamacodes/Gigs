import { supabase } from "@/utils/supabase";
import { router } from "expo-router";
import { useState } from "react";

import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function PostOffers() {
  const [titel, setTitel] = useState("");
  const [cmpny, setCmpny] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [description, setDescription] = useState("");
  const jobPostingHandler = async () => {
    setErrorMsg("");
    if (!titel || !cmpny || !location || !description) {
      setErrorMsg("Please fills All the fields");
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("job").insert([
      {
        jobTitel: titel,
        companyName: cmpny,
        companyLocation: location,
        jobDescription: description,
      },
    ]);
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
      return;
    } else {
      router.push("/(recruiter)/(drawer)/home");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Offer</Text>
      <View style={styles.formColumn}>
        <TextInput
          value={titel}
          onChangeText={setTitel}
          placeholder="Post title"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          value={cmpny}
          onChangeText={setCmpny}
          placeholder="Company name"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          value={location}
          onChangeText={setLocation}
          placeholder="Company location"
          placeholderTextColor="#ccc"
          style={styles.input}
        />
        <TextInput
          value={description}
          onChangeText={setDescription}
          placeholder="Post description"
          placeholderTextColor="#ccc"
          style={styles.inputDesBox}
        />
        {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}

        <TouchableOpacity style={styles.nextBtn} onPress={jobPostingHandler} disabled={loading}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.nextText}>POST</Text>
          )}
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    alignItems: "center",
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
  error: {
    color: "red",
    paddingTop: -15,
    paddingVertical: 15,
    textAlign: "center",
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
