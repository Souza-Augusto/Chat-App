import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import AuthContext from "../../contexts/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setLoading } = useContext(AuthContext);

  const navigation = useNavigation();

  const handleLogin = () => {2
    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login feito com sucesso"))
        .catch((err) => {
          alert("Usuário Inválido");
          console.log("Erro no login", err.message);
          setLoading(false);
        });
      return;
    }
    setLoading(false);
  };

  return (
    <View style={styles.Container}>
      <Image
        style={styles.BackImage}
        source={require("../../assets/background.jpg")}
      />
      <View style={styles.WhiteSheet}></View>
      <SafeAreaView style={styles.Form}>
        <Text style={styles.Title}>Login</Text>
        <TextInput
          style={styles.Input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.Input}
          placeholder="Enter password"
          autoCapitalize="none"
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.Button}>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
            Log In
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}>
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "orange",
    alignSelf: "center",
    paddingBottom: 24,
  },
  Input: {
    backgroundColor: "#f6f7f8",
    height: 58,
    paddingBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  BackImage: {
    width: "100%",
    height: 340,
    position: "absolute",
    top: 0,
    resizeMode: "cover",
  },
  WhiteSheet: {
    width: "100%",
    height: "75%",
    position: "absolute",
    backgroundColor: "#fff",
    bottom: 0,
    borderTopLeftRadius: 60,
  },
  Form: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
  },
  Button: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
