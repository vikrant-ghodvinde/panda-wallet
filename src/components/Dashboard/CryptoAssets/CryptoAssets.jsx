import { View, Text, Pressable, Image } from "react-native";
import testData from "../../../test/test.json";
import { DEVICE_WIDTH } from "../../../styles/constants";
import * as Animatable from "react-native-animatable";

const CryptoAssets = () => {
  return (
    <View className="relative space-y-2">
      {testData?.cryptoAssets.map((item, index) => (
        <Animatable.View key={index.toString()} animation="slideInRight" useNativeDriver>
          <Pressable
            className="p-4 rounded-3xl bg-black"
            style={{ width: DEVICE_WIDTH - 24 }}
          >
            <View className="flex flex-row items-center justify-between space-x-2">
              <View className="flex flex-row items-center space-x-4">
                <View className="w-14 h-14 p-2 rounded-xl bg-dark-300">
                  <Image
                    source={{ uri: item.icon }}
                    accessibilityLabel="icon-of"
                    className="w-full h-full"
                  />
                </View>
                <View className="relative space-y-1.5">
                  <Text className="text-white text-base font-urbanist-medium">
                    {item.name}
                  </Text>
                  <Text className="text-white text-sm font-urbanist-regular">
                    {item.quantity}
                  </Text>
                </View>
              </View>
              <View className="relative space-y-1.5">
                <Text className="text-white text-base font-urbanist-regular">
                  $ {item.balance}
                </Text>
                <Text className="text-primary text-base font-urbanist-bold">
                  $ {item.balance}
                </Text>
              </View>
            </View>
          </Pressable>
        </Animatable.View>
      ))}
    </View>
  );
};

export default CryptoAssets;
