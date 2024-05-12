import { useState } from "react";
import { Text, View } from "react-native";
import BaseWrapper from "../../components/BaseWrapper/BaseWrapper";
import WalletDetails from "../../components/Dashboard/WalletDetails/WalletDetails";
import NetworkDisplay from "../../components/ActionSheets/NetworkDisplay/NetworkDisplay";
import WalletDisplay from "../../components/ActionSheets/WalletDisplay/WalletDisplay";
import PrimaryAssets from "../../components/Dashboard/PrimaryAssets/PrimaryAssets";
import CryptoAssets from "../../components/Dashboard/CryptoAssets/CryptoAssets";
import { ScrollView } from "tamagui";

export default function () {
  const [networkShow, setNetworkShow] = useState(false);
  const [walletShow, setWalletShow] = useState(false);
  return (
    <View className="relative h-full bg-white">
      <ScrollView>
        <BaseWrapper>
          <View className="relative space-y-8">
            <WalletDetails
              setNetworkShow={setNetworkShow}
              setWalletShow={setWalletShow}
            />
            <View className="relative">
              <Text className="text-lg font-urbanist-semibold mb-3">
                Prime Assets
              </Text>
              <PrimaryAssets />
            </View>
            <View className="relative">
              <Text className="text-lg font-urbanist-semibold mb-3">
                Crypto Assets
              </Text>
              <CryptoAssets />
            </View>
          </View>
        </BaseWrapper>
      </ScrollView>
      <NetworkDisplay show={networkShow} setShow={setNetworkShow} />
      <WalletDisplay show={walletShow} setShow={setWalletShow} />
    </View>
  );
}
