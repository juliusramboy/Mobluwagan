import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";

import LoginScreen from './index';
import createAcc from './create_acc';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name ="Login" component={LoginScreen} />
        <Stack.Screen name ="createAcc" component={createAcc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}