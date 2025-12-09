import BottomImage from "@/components/bkgImg/bottomImg";
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

const OptScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const forgethandler = async () => {
    setErrorMsg("");
    if (!email) {
      setErrorMsg("Please enter email adress");
      return;
    }
    setLoading(true);
    const { data: userData, error: UserEror } = await supabase
      .from("clint")
      .select("email")
      .eq(email, "email")
      .single();
    setLoading(false)
    if (!userData || UserEror) {
      setErrorMsg("User not found")
      return;
    }
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(
      email.trim().toLowerCase()
    );
    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
      return;
    } else {
      router.push({
        pathname: "/(auth)/varificationScren",
        params: { email: email },
      });
      setErrorMsg("Password reset email sent!");
      return;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View>
          <Text style={styles.pageTitel}>Reset Your Password</Text>
        </View>
      </View>
      <View style={styles.formColumn}>
        <TextInput
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        {errorMsg ? (
          <Text style={{ color: "red", marginTop: -15, marginBottom: 15 }}>
            {errorMsg}
          </Text>
        ) : null}

        <TouchableOpacity onPress={() => forgethandler()} disabled={loading}>
          <Text style={styles.sendCodebtn}>
            {loading ? "Sending..." : "Send Reset Link"}
          </Text>
        </TouchableOpacity>
        <View
          style={{ width: 353, alignItems: "flex-end", marginTop: 8 }}
        ></View>
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
