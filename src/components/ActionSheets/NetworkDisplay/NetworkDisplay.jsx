import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScrollView, Sheet } from "tamagui";
import testData from "../../../test/test.json";

const NetworkDisplay = ({ show, setShow }) => {
  return (
    <Sheet
      open={show}
      animation="medium"
      zIndex={100_000}
      dismissOnSnapToBottom
      onOpenChange={setShow}
      snapPointsMode="fit"
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle scale={0.5} scaleY={0.8} />
      <Sheet.Frame>
        <View className="w-full py-5 px-5">
          <Text className="text-lg text-dark font-urbanist-medium">
            Network
          </Text>
        </View>
        <ScrollView>
          {testData?.networks.map((network, index) => (
            <TouchableOpacity
              key={index.toString()}
              className="relative w-full px-5 py-4 flex flex-row items-center space-x-3"
            >
              <Image
                source={{ uri: network.icon }}
                alt="image-of-binance"
                className="w-5 h-5"
                loadingIndicatorSource={{ uri: network.icon }}
              />
              <Text className="font-urbanist-regular">{network.name}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => setShow(false)}
            className="relative w-full px-5 py-4 flex flex-row items-center space-x-3"
          >
            <Text className="font-urbanist-regular text-dark text-base">Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
};

export default NetworkDisplay;
