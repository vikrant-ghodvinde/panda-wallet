import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewDApp from "../screens/NewDApp/NewDApp";
import Swap from "../screens/Swap/Swap";
import Settings from "../screens/Settings/Settings";
import Dashboard from "../screens/Dashboard/Dashboard";
import * as Animatable from "react-native-animatable";
import {
  AppsOutlined,
  HomeOutlined,
  OrbitOutlined,
  SettingsOutlined,
  SwapOutlined,
} from "../icons";

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => menuIcon(route, focused),
        tabBarStyle: {
          height: 80,
          backgroundColor: "#fff",
          shadowColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#f8f8f8",
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Swap" component={Swap} />
      <Tab.Screen name="NewDApp" component={NewDApp} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

const menuIcon = (route, focused) => {
  let icon;
  route.name === "Dashboard" ? (
    (icon = (
      <HomeOutlined size={24} color={focused ? "#ffffff" : "#787779"} />
    ))
  ) : route.name === "Swap" ? (
    (icon = <SwapOutlined size={24} color={focused ? "#ffffff" : "#787779"} />)
  ) : route.name === "NewDApp" ? (
    (icon = <OrbitOutlined size={24} color={focused ? "#ffffff" : "#787779"} />)
  ) : route.name === "Settings" ? (
    (icon = (
      <SettingsOutlined size={24} color={focused ? "#ffffff" : "#787779"} />
    ))
  ) : (
    <AppsOutlined size={24} color={focused ? "#ffffff" : "#787779"} />
  );

  return (
    <Animatable.View
      animation="slideInUp"
      useNativeDriver
      className={`w-16 h-16 flex items-center justify-center p-3 rounded-full ${
        focused ? "bg-black text-white" : "bg-transparent"
      }`}
    >
      {icon}
    </Animatable.View>
  );
};

export default BottomTabNavigation;
