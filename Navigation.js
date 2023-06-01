import * as React from "react"
import {NavigationContainer, DarkTheme, DefaultTheme, useNavigation} from "@react-navigation/native"
import Feed from "./screens/tabScreens/Feed"
import Settings from "./screens/tabScreens/Settings"
import Notification from "./screens/tabScreens/Notification"
import Payments from "./screens/drawerScreens/Payments"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createDrawerNavigator } from "@react-navigation/drawer"
import TweetDetailsScreen from "./screens/homeStack/TweetDetailsScreen"
import { Ionicons } from '@expo/vector-icons';
import {useColorScheme} from "react-native"
import { StatusBar } from 'expo-status-bar';
import { Pressable, Image } from "react-native"
// TopTabs
const TopTabs = createMaterialTopTabNavigator();

const TopTabsGroup = ()=>{
  return(
    <TopTabs.Navigator>
      <TopTabs.Screen name="Main" component={Feed} />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name=":)" component={Payments} />
    </TopTabs.Navigator>
  )
}

// Drawer
const Drawer = createDrawerNavigator();

const DrawerGroup = () =>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} options={{ headerShown: false }} />
      <Drawer.Screen name="Payments" component={Payments} options={{ headerShown: true }} />
    </Drawer.Navigator>
  )
}

// Stack 
const HomeStack = createNativeStackNavigator();

const HomeStackGroup = ()=>{
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="TabGroup" component={TabGroup} options={{headerShown: false}} />
      <HomeStack.Screen name="TweetDetailsScreen" component={TweetDetailsScreen}
        options={{ presentation: "modal"}}
      />
    </HomeStack.Navigator>
  )
}

// Tab Bottom
const Tab = createBottomTabNavigator();

const TabGroup = ()=>{
  const navigation = useNavigation();
  
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
      <Tab.Screen name="Feed" component={TopTabsGroup} options={{
        headerLeft: () => (
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={require("./assets/beto.jpeg")}
              style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
            />
          </Pressable>
        )
      }} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Notification" component={Notification} />
    </Tab.Navigator>
  )
}

const Navigation = () => {
  const currentColor = useColorScheme();
  return (
    <NavigationContainer theme={currentColor === "Dark" ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto"/>
      <DrawerGroup />
    </NavigationContainer>
  );
}

export default Navigation