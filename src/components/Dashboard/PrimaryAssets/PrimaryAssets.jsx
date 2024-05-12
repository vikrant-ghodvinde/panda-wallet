import * as Animatable from "react-native-animatable";
import { View, Text, FlatList, Pressable, Image } from "react-native";
import testData from "../../../test/test.json";
import { DEVICE_WIDTH } from "../../../styles/constants";

const PrimaryAssets = () => {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={testData?.primaryAssets}
      ItemSeparatorComponent={() => <View className="w-2"></View>}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <Animatable.View animation="slideInLeft" useNativeDriver>
          <Pressable
            className="p-4 rounded-3xl bg-black"
            style={{ width: DEVICE_WIDTH / 2 - 16 }}
          >
            <View className="flex flex-row items-center space-x-3">
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
                  {item.balance}
                </Text>
              </View>
            </View>
          </Pressable>
        </Animatable.View>
      )}
    />
  );
};

export default PrimaryAssets;
