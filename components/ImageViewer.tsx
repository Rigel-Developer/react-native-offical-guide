import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSource: string;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 400,
    borderRadius: 18,
  },
});
