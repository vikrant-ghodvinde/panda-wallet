import Navigation from "./src/navigation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "./tamagui.config";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "urbanist-light": require("./src/assets/fonts/Urbanist-Light.ttf"),
    "urbanist-regular": require("./src/assets/fonts/Urbanist-Regular.ttf"),
    "urbanist-medium": require("./src/assets/fonts/Urbanist-Medium.ttf"),
    "urbanist-semibold": require("./src/assets/fonts/Urbanist-SemiBold.ttf"),
    "urbanist-bold": require("./src/assets/fonts/Urbanist-Bold.ttf"),
    "urbanist-extrabold": require("./src/assets/fonts/Urbanist-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Navigation />
    </TamaguiProvider>
  );
}
