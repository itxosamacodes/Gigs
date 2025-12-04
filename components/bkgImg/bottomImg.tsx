import image from "@/assets/auth/botttom.jpg";
import React from "react";
import { Image, StyleSheet } from "react-native";

const BottomImage: React.FC = () => {
  return <Image style={styles.image} source={image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 470,
    height: 152,
  },
});

export default BottomImage;
