import BottomImage from "@/components/BotomImg";
import TopBar from "@/components/topbar";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../../../utils/supabase"; // supabase

const SignUp = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔵 Signup function
  const handleSignup = async () => {
    setErrorMsg(""); // clear old error

    // 🔵 Check if passwords match
    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      return;
    }

    setLoading(true);

    // 🔵 Call Supabase signup
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: { fullName }, // store name inside user metadata
      },
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      // 🔵 Redirect to verify screen after signup
      router.push("/recruiterScreens/SignUp/verifyscreen");
    }
  };

  return (
    <View style={styles.container}>
      <TopBar titl="Sign Up" />

      <View style={styles.formColumn}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="gray"
          style={styles.inputs}
          value={fullName}
          onChangeText={setFullName} // 🔵 Added
        />

        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="gray"
          style={styles.inputs}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          style={styles.inputs}
          value={password}
          onChangeText={setPassword} // 🔵 Added
        />

        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          style={styles.inputs}
          value={confirmPassword}
          onChangeText={setConfirmPassword} // 🔵 Added
        />

        {/* 🔵 Show any error */}
        {errorMsg ? (
          <Text style={{ color: "red", marginTop: 10 }}>{errorMsg}</Text>
        ) : null}

        {/* 🔵 Signup button with loader */}
        <TouchableOpacity onPress={handleSignup} disabled={loading}>
          <Text style={styles.createAct}>
            {loading ? "Creating account..." : "Create account"}
          </Text>
        </TouchableOpacity>

        <View style={styles.signRow}>
          <Text style={styles.sign}>
            Already have an account?{" "}
            <TouchableOpacity
              onPress={() => router.push("/recruiterScreens/Login/Signin")}
            >
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
    borderWidth: 1.5,
    borderColor: "#FF0000",
    height: 45.4,
    width: 353,
    borderRadius: 10,
  },
  createAct: {
    marginTop: 35,
    textAlign: "center",
    justifyContent: "center",
    width: 353,
    backgroundColor: "#E11F1F",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "medium",
    color: "#FFFFFF",
    paddingVertical: 14,
  },
  signRow: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  sign: {
    fontSize: 16,
    fontFamily: "Poppins",
    fontWeight: "regular",
  },
  si: {
    color: "#DF6A6A",
  },
});

export default SignUp;
