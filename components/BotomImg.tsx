import image from "@/assets/images/hmimg/image.png";
import React from "react";
import { Image, StyleSheet } from "react-native";

const BottomImage: React.FC = () => {
  return <Image style={styles.image} source={image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 450,
    height: 140,
  },
});

export default BottomImage;
