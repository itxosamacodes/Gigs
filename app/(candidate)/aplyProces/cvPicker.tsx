import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ApplicationProces() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Application</Text>
      <Text style={styles.subTitle}>Your Cv</Text>
      <View style={styles.formColumn}>
        <Image
          source={require("../../../assets/process/file.png")}
          style={styles.fileImg}
        />
      </View>
      <View style={styles.uploadFile}>
        <Text style={styles.uploadTitel}>Upload an other cv!</Text>
        <TouchableOpacity
          onPress={() => {
            DocumentPicker.getDocumentAsync();
          }}
        >
          <Image
            source={require("../../../assets/process/upld.png")}
            style={styles.upldBtn}
          />
        </TouchableOpacity>
      </View>
      {/* BUTTON ROW */}
      <View style={styles.buttonRow}>
        {/* Cancel */}
        <TouchableOpacity style={styles.cancelBtn}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        {/* Next */}
        <TouchableOpacity
          style={styles.nextBtn}
          onPress={() => {
            router.push("/(candidate)/aplyProces/apkDone")
          }}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: Platform.OS === "ios" ? 15 : 55,
  },

  subTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#c6c6c6",
    marginTop: 35,
  },
  formColumn: {
    marginTop: 100,
    width: 343,
    marginHorizontal: 30,
    alignItems: "center",
  },
  fileImg: {
    resizeMode: "contain",
    height: 380,
    width: 380,
  },
  uploadFile: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  uploadTitel: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 15,
    marginLeft: -45,
  },
  upldBtn: {
    height: 30,
    width: 30,
    marginTop: 15,
    marginRight: -40,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    width: 343,
    marginHorizontal: 30,
  },

  cancelBtn: {
    width: 140,
    height: 40,
    borderWidth: 1.5,
    borderColor: "#7A33DD",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    color: "#000",
    fontWeight: "500",
  },

  nextBtn: {
    width: 140,
    height: 40,
    backgroundColor: "#7A33DD",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  nextText: {
    color: "#fff",
    fontWeight: "500",
  },
});
