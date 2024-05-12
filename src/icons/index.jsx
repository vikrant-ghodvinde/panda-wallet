import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
} from "@expo/vector-icons";

export const HomeOutlined = ({ size, color }) => {
  return <Octicons name="home" size={size} color={color} />;
};

export const WalletOutlined = ({ size, color }) => {
  return <Ionicons name="wallet-outline" size={size} color={color} />;
};

export const SwapOutlined = ({ size, color }) => {
  return <AntDesign name="swap" size={size} color={color} />;
};

export const OrbitOutlined = ({ size, color }) => {
  return (
    <MaterialCommunityIcons name="rotate-orbit" size={size} color={color} />
  );
};

export const SettingsOutlined = ({ size, color }) => {
  return <Ionicons name="settings-outline" size={size} color={color} />;
};

export const AppsOutlined = ({ size, color }) => {
  return <Ionicons name="apps-outline" size={size} color={color} />;
};

export const ChevronRight = ({ size, color }) => {
  return <MaterialIcons name="chevron-right" size={size} color={color} />;
};

export const ChevronDown = ({ size, color }) => {
  return (
    <MaterialCommunityIcons name="chevron-down" size={size} color={color} />
  );
};

export const ArrowRight = ({ size, color }) => {
  return <Feather name="arrow-right" size={size} color={color} />;
};

export const PlusIcon = ({ size, color }) => {
  return <AntDesign name="plus" size={size} color={color} />;
};

export const UploadIcon = ({ size, color }) => {
  return <Feather name="upload" size={size} color={color} />;
};

export const DownloadIcon = ({ size, color }) => {
  return <Feather name="download" size={size} color={color} />;
};
