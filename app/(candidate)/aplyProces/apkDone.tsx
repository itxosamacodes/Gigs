import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ApplicationDone() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Application</Text>
      <View style={styles.formColumn}>
        <Image
          source={require("../../../assets/process/done.png")}
          style={styles.fileImg}
        />
        <Text style={styles.nextText}>Validate</Text>
        <Text style={styles.uploadTitel}>
          You application process is complete , click validate to confirm{" "}
        </Text>
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Validate</Text>
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
  formColumn: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  fileImg: {
    marginTop: 280,
    resizeMode: "contain",
    height: 180,
    width: 180,
  },
  uploadTitel: {
    paddingTop: 30,
    paddingHorizontal: Platform.OS == "ios" ? 60 : 30,
    alignSelf: "center",
    textAlign: "center",
    fontSize: 22,
    fontWeight: 500,
    paddingBottom: 100,
  },
  nextBtn: {
    alignSelf: "center",
    width: 319,
    height: 40,
    backgroundColor: "#50944A",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  nextText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
  },
});
