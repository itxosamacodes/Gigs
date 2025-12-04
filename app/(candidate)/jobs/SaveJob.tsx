import ApplyCard from "@/components/reuseComponents/jobsCards";
import { ScrollView, StyleSheet } from "react-native";

const SaveJob = () => {
  return (
    <ScrollView style={styles.container}>
      <ApplyCard />
      <ApplyCard />
      <ApplyCard />
      <ApplyCard />
      <ApplyCard />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
});

export default SaveJob;
