import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import colors from "../../assets/colors";

export default function Home() {
  const home = "Home";

  const { width } = Dimensions.get("window");

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: home,
      headerStyle: { backgroundColor: colors.darkGray },
      headerTitleStyle: { color: "#fff" },

      headerLeft: () => (
        <FontAwesome
          name="search"
          size={24}
          color="gray"
          style={{ marginLeft: 15 }}
        />
      ),
      headerRight: () => (
        <Image
          source={{
            uri: "https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino-1280x720.jpg",
          }}
          style={{
            height: width / 9,
            width: width / 9,
            borderRadius: width / 9 / 2,
            borderWidth: 1,
            elevation: 10,
            borderColor: "#fff",
            margin: 15,
          }}
        />
      ),
    });
  }, [navigation, home]);

  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Chat")}
        style={styles.ChatButton}
      >
        <Entypo name="chat" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#fff",
  },
  ChatButton: {
    backgroundColor: "orange",
    height: 50,
    borderRadius: 25,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "orange",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
    elevation: 10,
  },
});
