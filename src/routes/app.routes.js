import { createStackNavigator } from "@react-navigation/stack";
import { Home, Chat } from "../screens";
import colors from "../assets/colors";
import { Text } from "react-native";

const AuthStack = createStackNavigator();

export default function routes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="Chat" component={Chat} />
    </AuthStack.Navigator>
  );
}
