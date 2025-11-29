import BottomImage from "@/components/BotomImg";
import TopBar from "@/components/topbar";
import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
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
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const LoginHandler = async () => {
    setErrorMsg("");

    if (!password || !email) {
      setErrorMsg("Please fills the fields");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
    } else {
      router.push("/recruiterScreens/(drawer)/home");
    }
  };
  return (
    <View style={styles.container}>
      <TopBar titl="Sign In" />
      <View style={styles.formColumn}>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          keyboardType="visible-password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        {errorMsg ? (
          <Text
            style={{
              color: "red",
              paddingTop: 10,
            }}
          >
            {errorMsg}
          </Text>
        ) : null}

        <TouchableOpacity onPress={() => LoginHandler()} disabled={loading}>
          <Text style={styles.loginBtn}>
            {loading ? "Logining..." : "Login"}
          </Text>
        </TouchableOpacity>
        <View style={styles.signRow}>
          <Text style={styles.sign}>
            Don’t have an account?{" "}
            <TouchableOpacity
              onPress={() => router.push("/Screens/SignUp/Signup")}
            >
              <Text style={styles.si}>sign up</Text>
            </TouchableOpacity>
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <View style={styles.google}>
              <Image
                style={styles.gImg}
                source={require("../../../assets/images/hmimg/google.png")}
                height={45}
                width={45}
              />
              <Text style={styles.btntxt}>Sign in with google</Text>
            </View>
          </TouchableOpacity>
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
    width: 253,
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
  loginBtn: {
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
  google: {
    flexDirection: "row",
    marginTop: 35,
    textAlign: "center",
    justifyContent: "space-between",
    width: 353,
    backgroundColor: "#FFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF0000",
  },
  btntxt: {
    paddingRight: 35,
    textAlign: "center",
    fontSize: 22,
    fontWeight: 400,
    color: "#000000",
    paddingVertical: 12,
  },
  gImg: {
    marginLeft: 20,
    marginTop: 4,
  },
});
export default Login;
