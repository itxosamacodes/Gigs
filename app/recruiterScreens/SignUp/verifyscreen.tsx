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
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const PhoneOtpHandling = async () => {
    setErrorMsg("");
    if (!phone) {
      setErrorMsg("please enter the Number for OTP");
      return;
    }
    setLoading(true);
    let { error } = await supabase.auth.signInWithOtp({
      phone: phone,
    });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
      return;
    } else {
      router.push("/recruiterScreens/SignUp/otpScreen");
    }
  };
  return (
    <View style={styles.container}>
      <TopBar titl="Verify" />
      <View style={styles.formColumn}>
        <TextInput
          placeholder="Enter your Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          placeholderTextColor="gray"
          style={styles.inputs}
          maxLength={13}
        />
        {errorMsg ? (
          <Text style={{ color: "red", padding: 10 }}>{errorMsg}</Text>
        ) : null}
        <TouchableOpacity onPress={() => PhoneOtpHandling()} disabled={loading}>
          <Text style={styles.sendCodebtn}>
            {loading
              ? "Sending verification code..."
              : "Send verification code"}
          </Text>
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
  formColumn: {
    width: 353,
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    margin: 35,
    paddingLeft: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#FF0000",
    height: 45.4,
    width: 353,
    borderRadius: 10,
  },
  sendCodebtn: {
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
});
export default Login;
