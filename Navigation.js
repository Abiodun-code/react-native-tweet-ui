import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import Feed from "./screens/tabScreens/Feed"
import Settings from "./screens/tabScreens/Settings"
import Notification from "./screens/tabScreens/Notification"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Ionicons } from '@expo/vector-icons';

// Stack 
const HomeStack = createNativeStackNavigator();

const HomeStackGroup = ()=>{
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen/>
    </HomeStack.Navigator>
  )
}

// Tab Bottom
const Tab = createBottomTabNavigator();

const TabGroup = ()=>{
  return(
    <Tab.Navigator screenOptions={({ route, navigation }) => ({
      tabBarIcon: ({ color, focused, size }) => {
        let iconName;
        if (route.name === "Feed") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Settings") {
          iconName = focused ? "settings" : "ios-settings-sharp";
        } else if (route.name === "Notification") {
          iconName = focused ? "ios-notifications" : "notifications-outline";
        }
        return <Ionicons name={iconName} size={size} coolor={color} />
      },
      tabBarActiveTintColor: "#1da1f2",
      tabBarInactiveTintColor: "gray"
    })}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabGroup/>
    </NavigationContainer>
  );
}

export default Navigation