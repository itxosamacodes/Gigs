import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
const ApplyCard = () => {
  return (
    <View style={styles.jobCard}>
      <View style={styles.crdRow}>
        <Text style={styles.jobTit}>ReactJs Developer</Text>
        <TouchableOpacity
          onPress={() => {
            // router.push("/Screens/applyprocess/apply");
          }}
        >
          <Text style={styles.aplyBtn}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tit}>
        <Text style={styles.txtS}>C2M SYSTEM</Text>
      </View>
      <View style={styles.destit}>
        <Text style={styles.destxtS}>job description</Text>
        <Text style={styles.descraption}>
          job description Nous somme a la recherhe un developpement web qui a
          une maitrice dans les differents langage de programmation tel que :
          HTML CSS , PHP , BOOSTRAP , REACT JS , NODEJS et atre langage de
          back-end et front end .
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  jobCard: {
    position: "relative",
    marginTop: 30,
    width: 376,
    height: 217,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E11F1F",
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
    fontWeight: 500,
    padding: 15,
  },
  aplyBtn: {
    padding: 12,
    marginRight: 15,
    paddingHorizontal: 27,
    backgroundColor: "#E11F1F",
    color: "#FFFFFF",
    borderRadius: 10,
    fontSize: 15,
    fontWeight: 500,
  },
  tit: {
    marginTop: 40,
    textAlign: "center",
  },
  txtS: {
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: 500,
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
    fontWeight: 600,
    padding: 15,
  },
  descraption: {
    textAlign: "left",
    paddingTop: -20,
    padding: 15,
    fontStyle: "italic",
    fontSize: 14,
  },
});
export default ApplyCard;
