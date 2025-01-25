import { Stack } from "expo-router";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Index from ".";
import User from ".";

const Tabs = createBottomTabNavigator()


export default function RootLayout() {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" component={Index}/>
        <Tabs.Screen name="user" component={}/>
    </Tabs.Navigator>

  )
}
