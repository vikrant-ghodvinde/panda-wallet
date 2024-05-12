import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./RootNavigation";

export default function () {
  return (
    <NavigationContainer>
      <RootNavigation />
      <StatusBar style="auto" animated />
    </NavigationContainer>
  );
}
