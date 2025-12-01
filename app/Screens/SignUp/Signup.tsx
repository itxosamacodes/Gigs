import BottomImage from "@/components/BotomImg";
import TopBar from "@/components/topbar";
import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fullName, setFullName] = useState("");
  const SignUpHandler = async () => {
    setErrorMsg("");
    if (password !== confirmpass) {
      setErrorMsg("Confirm Password Doesnt Match");
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
      router.push("/Screens/SignUp/OptScreen");
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
            <TouchableOpacity
              onPress={() => router.push("/Screens/Login/Signin")}
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
export default Login;
