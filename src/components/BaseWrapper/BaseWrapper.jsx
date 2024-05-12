import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BaseWrapper = ({ children }) => {
  return (
    <SafeAreaView className="bg-white">
      <View className="w-full h-full px-3">{children}</View>
    </SafeAreaView>
  );
};

export default BaseWrapper;
