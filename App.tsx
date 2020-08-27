import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoarding from "./src/Authentication/OnBoarding";

const AuthenticationStack = createStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="OnBoarding" component={OnBoarding} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  const [loaded] = useFonts({
    SFRegular: require("./assets/fonts/SF-Pro-Regular.ttf"),
    SFSemiBold: require("./assets/fonts/SF-Pro-SemiBold.ttf"),
    SFBold: require("./assets/fonts/SF-Pro-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
