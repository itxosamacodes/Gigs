import BottomImage from "@/components/bkgImg/bottomImg";
import { supabase } from "@/utils/supabase";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const OptScreen = () => {
  const { email, mode } = useLocalSearchParams();
  const router = useRouter();
  const [Otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpMsg, setotpMsg] = useState("");
  // otp varifcation button brain
  const otpVarHandler = async () => {
    setErrorMsg("");
    if (!Otp) {
      setErrorMsg("Please enter the OTP.");
      return;
    }
    if (Otp.length !== 6) {
      setErrorMsg("Please enter a valid 6-digit OTP.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      email: email as string,
      token: Otp.trim(),
      type: "email",
    });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
      return;
    }
    const { data: { user }, error: userError } = await supabase.auth.getUser();

    if (userError) {
      console.log(userError.message);
      setErrorMsg(userError.message);
    } else {
      const userRole = user?.user_metadata?.role;

      if (mode === "signup") {
        if (userRole === "candidate") {
          router.push("/(candidate)/(drawer)/home");
        } else {
          router.push("/(recruiter)/(drawer)/home");
        }
        setErrorMsg("");
      } else {
        router.push("/(auth)/setPassword");
        setErrorMsg("");
      }
    }


  };
  // Resend Otp Button brain
  const resendOtp = async () => {
    setErrorMsg("");
    setotpMsg("");
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email as string,
    });
    setLoading(false);
    if (!error) {
      setotpMsg("A new OTP has been sent to your email.");
    } else {
      setErrorMsg(error.message);
      setotpMsg("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.pageTitel}>Enter the Verification Code
          </Text>
        </View>
      </View>
      <View style={styles.formColumn}>
        <TextInput
          placeholder="Enter 6-digit code"
          value={Otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        {errorMsg ? (
          <Text style={{ color: "red", marginTop: -15, marginBottom: 15 }}>
            {errorMsg}
          </Text>
        ) : null}

        {otpMsg ? (
          <Text style={{ color: "green", marginTop: -15, marginBottom: 15 }}>
            {otpMsg}
          </Text>
        ) : null}
        <TouchableOpacity onPress={() => otpVarHandler()} disabled={loading}>
          <Text style={styles.sendCodebtn}>{loading ? <ActivityIndicator size="small" color="white" /> : "Verify Account"}</Text>
        </TouchableOpacity>
        <View style={{ width: 353, alignItems: "flex-end", marginTop: 8 }}>
          <TouchableOpacity onPress={() => resendOtp()} disabled={loading}>
            <Text style={{ color: "black" }}>Resend Code</Text>
          </TouchableOpacity>
        </View>
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
    margin: 35,
    paddingLeft: 20,
    backgroundColor: "#FFFFFF",
    borderWidth: 1.2,
    borderColor: "grey",
    height: 45.4,
    width: 353,
    borderRadius: 10,
  },
  sendCodebtn: {
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
export default OptScreen;
