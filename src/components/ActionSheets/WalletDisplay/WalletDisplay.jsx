import { View, Text } from "react-native";
import { ScrollView, Sheet } from "tamagui";

const WalletDisplay = ({ show, setShow }) => {
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
        <ScrollView>
          <View className="w-full py-5 px-5">
            <Text>Hello</Text>
          </View>
          <View className="w-full py-5 px-5">
            <Text>Hello</Text>
          </View>
          <View className="w-full py-5 px-5">
            <Text>Hello</Text>
          </View>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
};

export default WalletDisplay;
