import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateAcc from "../create_acc";
import Otp_panel from "../Otp_panel"; 

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CreateAcc">
        <Stack.Screen name="CreateAcc" component={CreateAcc} />
        <Stack.Screen name="Otp_panel" component={Otp_panel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
