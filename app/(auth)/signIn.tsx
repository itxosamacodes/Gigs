import BottomImage from "@/components/bkgImg/bottomImg";
import TopBar from "@/components/reuseComponents/topBar";
import { supabase } from "@/utils/supabase";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
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
      router.replace("/(candidate)/(drawer)/home");
    }
  };

  return (
    <View style={styles.container}>
      <TopBar titl="Sign In" />
      {/* input form start here */}
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
          secureTextEntry={true}
          textContentType="password"
          autoCapitalize="none"
          placeholderTextColor="gray"
          style={styles.inputs}
        />

        {/* error msg  */}
        {errorMsg ? <Text style={styles.error}>{errorMsg}</Text> : null}
        {/* login button */}
        <TouchableOpacity onPress={LoginHandler} disabled={loading}>
          <Text style={styles.loginBtn}>
            {loading ? "Logining..." : "Login"}
          </Text>
        </TouchableOpacity>
        {/* forgot passwords btunss */}
        <View style={{ width: 353, alignItems: "flex-end", marginTop: 8 }}>
          <TouchableOpacity>
            <Text style={{ color: "black" }}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        {/* or text */}
        <Text style={styles.or}>or</Text>
        {/* sign with google butn */}
        <TouchableOpacity>
          <View style={styles.google}>
            <Ionicons
              name="logo-google"
              size={28}
              color="#7A33DD"
              style={styles.gIcon}
            />
            <Text style={styles.btntxt}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.signRow}>
          <Text style={styles.sign}>
            Don’t have an account?{" "}
            <TouchableOpacity onPress={() => router.push("/(auth)/signUp")}>
              <Text style={styles.si}>sign up</Text>
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
    width: 253,
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
  loginBtn: {
    marginTop: 35,
    textAlign: "center",
    width: 353,
    backgroundColor: "#7A33DD",
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "500",
    color: "#FFFFFF",
    paddingVertical: 14,
  },
  error: {
    color: "red",
    paddingTop: 10,
  },
  or: {
    color: "grey",
    fontSize: 18,
    padding: 15,
  },
  google: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 353,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: "grey",
    paddingVertical: 12,
    gap: 12,
  },

  gIcon: {
    marginLeft: -20,
  },

  btntxt: {
    fontSize: 18,
    fontWeight: "400",
    color: "#000000",
  },

  signRow: {
    marginTop: 25,
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
