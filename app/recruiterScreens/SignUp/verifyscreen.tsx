import BottomImage from "@/components/BotomImg";
import TopBar from "@/components/topbar";
import { useRouter } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const Login = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TopBar titl="Verify" />
      <View style={styles.formColumn}>
        <TextInput
          placeholder="Enter your Phone number"
          keyboardType="number-pad"
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        <TouchableOpacity
          onPress={() => router.push("/recruiterScreens/SignUp/recivedcode")}
        >
          <Text style={styles.sendCodebtn}>Send verification code</Text>
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
