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
      <TopBar titl="Sign Up" />
      <View style={styles.formColumn}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor="gray"
          style={styles.inputs}
        />
        <TouchableOpacity
          onPress={() => router.push("/Screens/SignUp/verifyscreen")}
        >
          <Text style={styles.createAct}>create account</Text>
        </TouchableOpacity>
        <View style={styles.signRow}>
          <Text style={styles.sign}>
            Already have an account?{" "}
            <TouchableOpacity
              onPress={() => router.push("/Screens/SignUp/Signup")}
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
export default Login;
