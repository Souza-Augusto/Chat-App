import React, { useState, useEffect, useCallback, useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { collection, addDoc, query, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, dataBase } from "../../../config/firebase";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import colors from "../../assets/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../../contexts/auth";

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const { signOut } = useContext(AuthContext);

  const navigation = useNavigation();

  function onSignOut() {
    signOut(auth)
      .then(() => {
        console.log("Logged out successfully");
      })
      .catch((error) => {
        console.log("Error logging out: ", error);
      });
    signOut();
  }

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: colors.darkGray },
      headerTitleStyle: { color: "#fff" },
      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <Octicons
            style={{ marginRight: 20 }}
            name="device-camera-video"
            size={24}
            color="#fff"
          />
          <Ionicons
            style={{ marginRight: 20 }}
            name="ios-call-sharp"
            size={25}
            color="#fff"
          />
          <TouchableOpacity onPress={onSignOut} style={{ marginRight: 20 }}>
            <Octicons name="sign-out" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  useEffect(() => {
    const collectionRef = collection(dataBase, "chats");
    const q = query(collectionRef, (ref) => ref.orderBy("createdAt", "desc"));

    const unSubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt,
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return () => unSubscribe();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((prev) => GiftedChat.append(prev, messages));
    console.log("Messages", messages);
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(dataBase, "chats"), {
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        avatar:
          "data:image/jpeg;base64,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",
      }}
      messagesContainerStyle={{
        backgroundColor: "#fff",
        borderBottomRightRadius: 10,
      }}
    />
  );
}
