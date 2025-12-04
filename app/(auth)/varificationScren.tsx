import BottomImage from "@/components/bkgImg/bottomImg";
import { supabase } from "@/utils/supabase";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const OptScreen = () => {
  const { email } = useLocalSearchParams();
  const router = useRouter();
  const [Otp, setOtp] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpMsg, setotpMsg] = useState("");
  // otp varifcation button brain
  const otpVarHandler = async () => {
    setErrorMsg("");
    if (!Otp) {
      setErrorMsg("Please Enter Otp");
      return;
    }
    if (Otp.length !== 6) {
      setErrorMsg("Please enter a valid 6-character OTP.");
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.verifyOtp({
      email: email as string,
      //  or we can write string(email)
      token: Otp.trim(), //.trim extra space remove kav
      type: "email",
    });
    setLoading(false);
    if (!error) {
      router.push("/(auth)/setPassword");
      setErrorMsg("");
      return;
    } else {
      setErrorMsg(error.message);
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
      setotpMsg("Your OTP has been resent to your email.");
    } else {
      setErrorMsg(error.message);
      setotpMsg("");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.pageTitel}>Enter the received code</Text>
        </View>
      </View>
      <View style={styles.formColumn}>
        <TextInput
          placeholder="1 2 3 4 5 6"
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
          <Text style={styles.sendCodebtn}>Verify account</Text>
        </TouchableOpacity>
        <View style={{ width: 353, alignItems: "flex-end", marginTop: 8 }}>
          <TouchableOpacity onPress={() => resendOtp()} disabled={loading}>
            <Text style={{ color: "black" }}>Resend</Text>
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
