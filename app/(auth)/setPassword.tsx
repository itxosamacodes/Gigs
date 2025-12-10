import BottomImage from "@/components/bkgImg/bottomImg";
import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import { useState } from "react";

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const PasswordScreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const setupPassword = async () => {
    setErrorMsg("");
    if (!password || !confirmpass) {
      setErrorMsg("Please enter your password.");
      return
    }
    if (password !== confirmpass) {
      setErrorMsg("Passwords do not match.");
      return
    }
    setLoading(true);
    const { error } = await supabase.auth.updateUser({
      password: password,
    });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
      return;
    } else {
      router.replace("/(candidate)/(drawer)/home");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Text style={styles.pageTitel}>Create a New Password
        </Text>
      </View>
      <View style={styles.formColumn}>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        <TextInput
          value={confirmpass}
          onChangeText={setConfirmPass}
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        {errorMsg ? <Text style={{ color: "red" }}>{errorMsg}</Text> : null}
        <TouchableOpacity
          onPress={() => {
            setupPassword();
          }}
          disabled={loading}
        >
          <Text style={styles.sendCodebtn}>{loading ? <ActivityIndicator size={"small"} color={"white"} /> : "Save New Password"}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <BottomImage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  topRow: {
    marginTop: 50,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  pageTitel: {
    fontSize: 23,
    color: "#000000",
    fontWeight: "500",
    textAlign: "center",
    fontFamily: "Poppins",
  },
  formColumn: {
    width: 353,
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    margin: 22,
    paddingLeft: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.2,
    borderColor: "grey",
    height: 45.4,
    width: 353,
    borderRadius: 10,
  },
  sendCodebtn: {
    margin: 22,
    textAlign: "center",
    justifyContent: "center",
    width: 353,
    backgroundColor: "#7A33DD",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "medium",
    color: "#FFFFFF",
    paddingVertical: 14,
  },
});
export default PasswordScreen;
