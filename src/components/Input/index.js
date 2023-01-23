import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

export default function Input({ error, afterIcon, security, ...props }) {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.Container}>
      {afterIcon && afterIcon}
      <TextInput
        {...props}
        style={styles.Input}
        selectionColor={"#000"}
        placeholderTextColor="#c6c6c6"
        secureTextEntry={security && secure}
      />

      {security && (
        <TouchableOpacity
          onPress={() => setSecure((prev) => !prev)}
          style={{ marginLeft: -20 }}
        >
          <Entypo
            name={secure ? "eye" : "eye-with-line"}
            size={20}
            style={{
              color: secure ? "#000" : "#a1a1a1",
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
