import BottomImage from "@/components/bkgImg/bottomImg";
import TopBar from "@/components/reuseComponents/topBar";
import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const SignUpscreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fullName, setFullName] = useState("");
  const SignUpHandler = async () => {
    setErrorMsg("");

    if (!email || !fullName) {
      setErrorMsg("Please complete all required fields.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
      // password: password,
      options: {
        data: { fullName },
      },
    });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
      return;
    } else {
      // router.push({
      //   // pathname: "/Screens/SignUp/OptScreen",
      //   // params: { email: String(email) },
      // });
    }
  };
  return (
    <View style={styles.container}>
      <TopBar titl="Sign Up" />
      <View style={styles.formColumn}>
        <TextInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Full Name"
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          keyboardType="email-address"
          placeholderTextColor="gray"
          style={styles.inputs}
        />

        {errorMsg ? (
          <Text style={{ color: "red", marginTop: 10 }}>{errorMsg}</Text>
        ) : null}
        <TouchableOpacity onPress={() => SignUpHandler()} disabled={loading}>
          <Text style={styles.createAct}>
            {loading ? "creating account..." : "create account"}
          </Text>
          <Text style={styles.or}>or</Text>
        </TouchableOpacity>
        <View style={styles.signRow}>
          <Text style={styles.sign}>
            Already have an account?{" "}
            <TouchableOpacity onPress={() => router.push("/(auth)/signIn")}>
              <Text style={styles.si}>sign in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>

      <BottomImage />
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
  formColumn: {
    width: 353,
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    marginTop: 35,
    paddingLeft: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.2,
    borderColor: "grey",
    height: 45.4,
    width: 353,
    borderRadius: 10,
  },
  createAct: {
    marginTop: 35,
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
  or: {
    color: "grey",
    fontSize: 18,
    padding: 15,
    textAlign: "center",
  },
  signRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  sign: {
    fontSize: 18,
  },
  si: {
    fontSize: 18,
    color: "#7A33DD",
  },
});
export default SignUpscreen;
