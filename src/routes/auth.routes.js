import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup } from "../screens";

const AuthRoutes = createStackNavigator();

export default function routes() {
  return (
    <AuthRoutes.Navigator>
      <AuthRoutes.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <AuthRoutes.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
        }}
      />
    </AuthRoutes.Navigator>
  );
}
