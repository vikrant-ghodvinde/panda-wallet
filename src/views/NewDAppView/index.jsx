import { Text, View } from "react-native";
import BaseWrapper from "../../components/BaseWrapper/BaseWrapper";

export default function () {
  return (
    <View className="relative">
      <BaseWrapper>
        <View className="flex-1 items-center justify-center">
          <Text>NewDApp View</Text>
        </View>
      </BaseWrapper>
    </View>
  );
}
