import BottomImage from "@/components/BotomImg";
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
const OptScreen = () => {
  const router = useRouter();
  const [Otp, setOpt] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const otphandler = async () => {
    setErrorMsg("");

    if (!Otp) {
      setErrorMsg("please enter otp");
      return;
    }
    setLoading(true);
    let { data, error } = await supabase.auth.verifyOtp({
      phone: "+923049997226",
      token: Otp,
      type: "sms",
    });
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
      return;
    } else {
      router.push("/(drawer)/home");
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
          placeholder="Code"
          value={Otp}
          onChangeText={setOpt}
          keyboardType="number-pad"
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        {errorMsg ? (
          <Text style={{ color: "red", padding: 10 }}>{errorMsg}</Text>
        ) : null}
        <TouchableOpacity
          onPress={() => {
            otphandler();
          }}
          disabled={loading}
        >
          <Text style={styles.sendCodebtn}>
            {loading ? "account sucssd" : "Verify account"}
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
  topRow: {
    marginTop: 50,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  pageTitel: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "600",
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
export default OptScreen;
