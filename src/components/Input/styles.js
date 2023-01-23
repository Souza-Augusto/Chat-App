import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  Input: {
    width: width * 0.9,
    height: height / 16,
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 18,
    color: "#000",
    paddingHorizontal: 25,
  },
});

export default styles;
