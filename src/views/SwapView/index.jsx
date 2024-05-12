import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BaseWrapper from "../../components/BaseWrapper/BaseWrapper";
import SlidableButtonDark from "../../components/Buttons/SlidableButtons/SlidableButtonDark";
import { DEVICE_WIDTH } from "../../styles/constants";
import SelectToken from "../../components/Swap/SelectToken/SelectToken";
import { useRef, useState } from "react";
import { ChevronDown, SwapOutlined } from "../../icons";
import * as Animatable from "react-native-animatable";

export default function () {
  const [showToken, setShowToken] = useState(false);
  const swapRef = useRef(null);

  const tokenSwap = () => {
    swapRef.current.bounceIn(1000);
  };
  return (
    <View className="relative h-full bg-white">
      <BaseWrapper>
        <View className="flex-1 items-center justify-between pb-8">
          <View className="relative">
            <Text className="text-black text-2xl font-urbanist-extrabold text-center mb-8">
              Swap Crypto
            </Text>
            <ImageBackground
              source={require("../../assets/images/backgrounds/1.png")}
              resizeMode="cover"
              className="rounded-4xl overflow-hidden"
            >
              <View
                className="relative p-5 space-y-4"
                style={{ width: DEVICE_WIDTH - 24 }}
              >
                <Animatable.View
                  animation="fadeInLeft"
                  className="w-full p-4 rounded-2xl bg-white space-y-4"
                >
                  <View className="relative flex flex-row items-center justify-between space-x-2">
                    <Text className="text-dark font-urbanist-bold">From</Text>
                    <View className="flex flex-row items-center space-x-2">
                      <TouchableOpacity className="py-0.5 px-2.5 border border-primary rounded-full">
                        <Text className="text-xs font-urbanist-semibold">
                          Max
                        </Text>
                      </TouchableOpacity>
                      <Text className="text-dark font-urbanist-bold">
                        Balance: 0
                      </Text>
                    </View>
                  </View>
                  <View className="relative flex flex-row items-center justify-between space-x-2">
                    <View className="flex-auto">
                      <TextInput
                        placeholder="0"
                        placeholderTextColor="#787779"
                        cursorColor="#000"
                        keyboardType="decimal-pad"
                        className="w-full py-1 px-2 text-3xl font-urbanist-extrabold"
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => setShowToken(true)}
                      className="py-2 px-3 bg-black flex flex-row items-center rounded"
                    >
                      <Text className="text-white text-xs font-urbanist-medium mr-1">
                        Select From
                      </Text>
                      <ChevronDown size={12} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </Animatable.View>

                <Animatable.View
                  animation="fadeIn"
                  duration={1500}
                  className="absolute left-1/2 top-1/2 w-14 h-14 z-50"
                  style={{
                    transform: [{ translateX: -14 }, { translateY: -20 }],
                  }}
                >
                  <Pressable
                    onPress={tokenSwap}
                    className="bg-primary border-4 border-primary rounded-full"
                  >
                    <Animatable.View
                      ref={swapRef}
                      className="bg-white w-full h-full rounded-full items-center justify-center"
                    >
                      <View className="rotate-90">
                        <SwapOutlined size={28} color="#1d6cef" />
                      </View>
                    </Animatable.View>
                  </Pressable>
                </Animatable.View>

                <Animatable.View
                  animation="fadeInRight"
                  className="w-full p-4 rounded-2xl bg-white space-y-4"
                >
                  <View className="relative flex flex-row items-center justify-between space-x-2">
                    <Text className="text-dark font-urbanist-bold">From</Text>
                    <View className="flex flex-row items-center space-x-2">
                      <TouchableOpacity className="py-0.5 px-2.5 border border-primary rounded-full">
                        <Text className="text-xs font-urbanist-semibold">
                          Max
                        </Text>
                      </TouchableOpacity>
                      <Text className="text-dark font-urbanist-bold">
                        Balance: 0
                      </Text>
                    </View>
                  </View>
                  <View className="relative flex flex-row items-center justify-between space-x-2">
                    <View className="flex-auto">
                      <TextInput
                        placeholder="0"
                        placeholderTextColor="#787779"
                        cursorColor="#000"
                        keyboardType="decimal-pad"
                        className="w-full py-1 px-2 text-3xl font-urbanist-extrabold"
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => setShowToken(true)}
                      className="py-2 px-3 bg-black flex flex-row items-center rounded"
                    >
                      <Text className="text-white text-xs font-urbanist-medium mr-1">
                        Select To
                      </Text>
                      <ChevronDown size={12} color="#fff" />
                    </TouchableOpacity>
                  </View>
                </Animatable.View>
              </View>
            </ImageBackground>
          </View>
          <Animatable.View animation="fadeInUp" className="relative">
            <SlidableButtonDark label="slide to swap" />
          </Animatable.View>
        </View>
      </BaseWrapper>
      <SelectToken show={showToken} setShow={setShowToken} />
    </View>
  );
}
