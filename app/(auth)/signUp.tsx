import BottomImage from "@/components/bkgImg/bottomImg";
import TopBar from "@/components/reuseComponents/topBar";
import { supabase } from "@/utils/supabase";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
const SignUpscreen = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const data = [
    { label: 'Candidate', value: 'candidate' },
    { label: 'Recruiter', value: 'recruiter' },
  ];

  const SignUpHandler = async () => {
    setErrorMsg("");
    const normalmail = email.trim().toLowerCase();


    if (!fullName || !normalmail || !password || !confirmpass || !role) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (password !== confirmpass) {
      setErrorMsg("Passwords do not match");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalmail)) {
      setErrorMsg("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email: normalmail,
      password: password,
      options: {
        data: { fullName, role },
      },
    });

    setLoading(false);


    if (error) {
      setErrorMsg(error.message);
      return;
    }


    if (!data.user) {
      setErrorMsg("Signup failed. Please try again.");
      return;
    }

    if (data.user.identities?.length === 0) {
      setErrorMsg("This email is already registered. Please sign in.");
      return;
    }


    if (data.user.email_confirmed_at) {
      setErrorMsg("Account already exists and is verified. Please sign in.");
      return;
    }

    router.push({
      pathname: "/(auth)/varificationScren",
      params: { email: normalmail, mode: "signup" },
    });
  };

  return (
    <View style={styles.container}>
      <TopBar titl="Sign Up" />
      <View>
        <Text style={styles.pagetitle}>We’re Excited to Have You ✨</Text>
      </View>
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
        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.dropdown}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Set your role"
            placeholderStyle={{ color: 'gray' }}
            value={role}
            onChange={item => setRole(item.value)}
          />
        </View>

        {errorMsg ? (
          <Text style={{ color: "red", marginTop: 75, marginBottom: -35 }}>{errorMsg}</Text>
        ) : null}
        <TouchableOpacity onPress={() => SignUpHandler()} disabled={loading}>
          <Text style={styles.createAct}>
            {loading ? <ActivityIndicator size={"small"} color={"white"} /> : "create account"}
          </Text>
          <Text style={styles.or}>or</Text>
        </TouchableOpacity>
        <View style={styles.signRow}>
          <Text style={styles.sign}>
            Already have an account?{" "}
            <TouchableOpacity
              onPress={() => router.push("/(auth)/signIn")}
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
    backgroundColor: "#f7f9fc",
  },
  pagetitle: {
    fontSize: 22,
    fontWeight: "500",
    color: "#7A33DD",
  },
  formColumn: {
    width: 353,
    flexDirection: "column",
    alignItems: "center",
  },
  inputs: {
    marginTop: 35,
    paddingLeft: 20,
    backgroundColor: "#ffffff",
    borderWidth: 1.2,
    borderColor: "#E5E7EB",
    color: '#111827',
    height: 52.4,
    width: 353,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 8,
    elevation: 10,
  },
  // Dropdown start heere
  dropdownContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,

  },
  dropdown: {
    marginTop: 35,
    paddingLeft: 20,
    backgroundColor: '#FFFFFF',
    height: 52.4,
    width: 353,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 8,
    elevation: 10,
  },
  createAct: {
    marginTop: 70,
    textAlign: "center",
    justifyContent: "center",
    width: 353,
    backgroundColor: "#7A33DD",
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "medium",
    color: "#FFFFFF",
    paddingVertical: 17,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 2, height: 3 },
    shadowRadius: 8,
    elevation: 10,
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
export default SignUpscreen;
