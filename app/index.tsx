import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const router = useRouter();
  const rowItem = [
    {
      img: require("../assets/onboardingImg/bag.png"),
      text: "Search for the job in different categories, choose the one that category and place that suits you",
    },
    {
      img: require("../assets/onboardingImg/clipBoard.png"),
      text: "Build a profesional resume, that attracts recruters for better oppertunities.",
    },
    {
      img: require("../assets/onboardingImg/people.png"),
      text: " Stay in touch with recruters, to know from them and have more chancs.",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>Gigs</Text>
          <Text style={styles.subTitle}>You can find your dream job here!</Text>
        </View>
        <View style={styles.featureList}>
          {rowItem.map((item, index) => (
            <View style={styles.featureItem} key={index}>
              <View style={styles.iconWrapper}>
                <Image
                  source={item.img}
                  style={{ width: 50, height: 50, borderRadius: 10 }}
                />
              </View>
              <Text style={styles.featureText}>{item.text}</Text>
            </View>
          ))}
        </View>

        <View style={styles.roleButtonsContainer}>
          <TouchableOpacity onPress={() => router.push("/(auth)/signIn")}>
            <Text style={styles.candidateBtn}>Start as a condidate</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/(auth)/signIn")}>
            <Text style={styles.recruiterBtn}>Start as a recruiter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7A33DD",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header: {
    flex: 2,
  },
  title: {
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 30,
  },
  subTitle: {
    textAlign: "center",
    padding: 40,
    fontSize: 18,
    fontStyle: "italic",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  featureList: {
    flex: 4,
    marginTop: 60,
    marginLeft: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 12,
    margin: 10,
    marginRight: 20,
  },
  iconWrapper: {
    margin: 20,
    marginRight: 8,
    borderRadius: 50,
    width: 70,
    height: 69,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  featureText: {
    margin: 20,
    marginLeft: 2,
    width: 272,
    height: 73,
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    color: "#FFFFFF",
  },
  roleButtonsContainer: {
    flex: 0.6,
    marginTop: 80,
    flexDirection: "row",
  },
  candidateBtn: {
    marginLeft: 30,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
    width: 196,
    textAlign: "center",
    padding: 18,
    color: "#7A33DD",
    backgroundColor: "#FFFFFF",
  },
  recruiterBtn: {
    marginLeft: 10,
    marginRight: 30,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "bold",
    width: 195,
    textAlign: "center",
    padding: 17,
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 2,
  },
});

export default Index;
