import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown : false,
        tabBarActiveTintColor : '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#3E1F47',
          height : 60,
        },
        tabBarLabelStyle: {
          fontSize: 18,
          fontWeight: "bold",
        }
      }}
    >
        <Tabs.Screen 
          name="index" 
          options={{
            title : "Detection",
            tabBarIcon : ({ color, focused}) => (
              <Ionicons 
                name={focused ? 'car-sport-sharp' : 'car-sport-outline'} 
                color={color} 
                size={32} 
                />
            ),
          }}/>
        <Tabs.Screen 
          name="user"
          options={{
            title : "User",
            tabBarIcon : ({ color, focused}) => (
              <Ionicons 
                name={focused ? 'person-sharp' : 'person-outline'} 
                color={color} 
                size={32}
                />
            ),
          }}/>
    </Tabs>

  )
}
