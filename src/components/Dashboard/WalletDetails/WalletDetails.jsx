import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {
  DownloadIcon,
  PlusIcon,
  UploadIcon,
  WalletOutlined,
} from "../../../icons";
import { DEVICE_WIDTH } from "../../../styles/constants";

const WalletDetails = ({ setNetworkShow, setWalletShow }) => {
  return (
    <ImageBackground
      source={require("../../../assets/images/backgrounds/1.png")}
      resizeMode="cover"
      className="rounded-4xl overflow-hidden"
    >
      <View
        className="relative w-full h-auto p-1.5"
        style={{ width: DEVICE_WIDTH - 24 }}
      >
        <View className="relative space-y-8">
          <Animatable.View
            animation="slideInDown"
            useNativeDriver
            className="relative w-full flex flex-row items-center justify-between bg-white p-3 rounded-3xl"
          >
            <View className="flex flex-row items-center space-x-3">
              <View className="w-12 h-12 bg-primary rounded-full"></View>
              <Text className="text-black font-urbanist-semibold text-lg">
                Vicky
              </Text>
            </View>
            <View className="flex flex-row items-center space-x-3">
              <TouchableOpacity
                onPress={() => setNetworkShow(true)}
                className="w-10 h-10  rounded-full items-center justify-center"
              >
                <Image
                  source={require("../../../assets/images/icons/binance.png")}
                  alt="icon-of-binance"
                  className="w-full h-full object-cover"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setWalletShow(true)}
                className="w-10 h-10 bg-black rounded-full items-center justify-center"
              >
                <WalletOutlined size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </Animatable.View>

          <Animatable.View
            animation="fadeIn"
            duration={1500}
            useNativeDriver
            className="relative px-5 space-y-1"
          >
            <Text className="text-white font-urbanist-regular">
              Total Balance
            </Text>
            <Text className="text-white font-urbanist-bold text-4xl">
              $6.010.29
            </Text>
            <Text className="text-white font-urbanist-regular">$205.00</Text>
          </Animatable.View>

          <Animatable.View
            animation="slideInUp"
            useNativeDriver
            className="relative px-5 mb-5 flex flex-row items-center justify-between space-x-6"
          >
            <TouchableOpacity className="w-16 h-16 bg-lightest rounded-full items-center justify-center">
              <UploadIcon size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity className="w-16 h-16 bg-lightest rounded-full items-center justify-center">
              <DownloadIcon size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity className="w-16 h-16 bg-lightest rounded-full items-center justify-center">
              <PlusIcon size={20} color="#fff" />
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WalletDetails;
