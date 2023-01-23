import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContextData = {
  signed: false,
  Loading: true,
  user: false,
  signIn: () => {},
  signOut: () => {},
  saveUser: () => {},
};

const AuthContext = createContext(AuthContextData);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@RNauth:user");
      const storageToken = await AsyncStorage.getItem("@RNauth:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setAuthToken(storageToken);
        console.log("Token", authToken);
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  // async function saveUser(value) {
  //   console.log("SaveUser Chamado");
  //   console.log("User email", value);
  //   setUser(value);
  //   await AsyncStorage.setItem("@RNauth:user", JSON.stringify(value));
  // }

  async function signIn(value) {
    await AsyncStorage.setItem("@RNauth:token", value);
    setAuthToken(value);
    console.log("Token", value);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
      setAuthToken(null);
    });
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!authToken,
        user,
        setUser,
        authToken,
        setAuthToken,
        loading,
        setLoading,
        signIn,
        // saveUser,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
