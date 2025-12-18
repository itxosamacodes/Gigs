import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SaveJob = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [savedJobIds, setSavedJobIds] = useState<string[]>([]);


  const fetchAllJobs = async () => {
    const { data: job, error } = await supabase
      .from("job")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      console.log("Error fetching jobs: ", error.message);
    } else {
      setJobs(job || []);
    }
  };


  const fetchSavedJobs = async () => {
    const { data: saved, error } = await supabase
      .from("isSaved")
      .select("job_id")
      .order("created_at", { ascending: false });
    if (error) {
      console.log("Error fetching saved jobs: ", error.message);
    } else {
      const ids = saved?.map((item) => item.job_id) || [];
      setSavedJobIds(ids);
    }
  };

  useEffect(() => {
    fetchAllJobs();
    fetchSavedJobs();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {jobs
        .filter((job) => savedJobIds.includes(job.id))
        .map((job) => (
          <View style={styles.jobCard} key={job.id}>
            <View style={styles.crdRow}>
              <Text style={styles.jobTit}>{job.jobTitel}</Text>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={{ color: "white" }}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tit}>
              <Text style={styles.txtS}>{job.companyLocation}</Text>
            </View>
            <View style={styles.destit}>
              <Text style={styles.destxtS}>{job.companyName}</Text>
              <Text style={styles.descraption}>{job.jobDescription}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
  },
  jobCard: {
    position: "relative",
    marginTop: 30,
    width: 376,
    height: 217,
    backgroundColor: "#ffffff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    overflow: "hidden",
  },
  crdRow: {
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  jobTit: {
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "500",
    padding: 15,
  },
  saveButton: {
    padding: 12,
    marginRight: 15,
    paddingHorizontal: 27,
    backgroundColor: "#7A33DD",
    color: "#FFFFFF",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: "500",
  },
  tit: {
    marginTop: 40,
    textAlign: "center",
  },
  txtS: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "500",
    padding: 15,
    textDecorationLine: "underline",
  },
  destit: {
    marginTop: -20,
    textAlign: "center",
  },
  destxtS: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "600",
    padding: 15,
  },
  descraption: {
    textAlign: "left",
    padding: 15,
    fontStyle: "italic",
    fontSize: 14,
  },
});

export default SaveJob;
