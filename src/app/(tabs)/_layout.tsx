import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMMKVBoolean } from "react-native-mmkv";

export default function TabsLayout() {
  const [darkmode, setDarkMode] = useMMKVBoolean('darkmode');

  return <Tabs screenOptions={{headerTitleStyle: {color: darkmode ? 'white' : 'black'}, headerStyle: {backgroundColor: darkmode ? 'black' : 'white',borderColor: '#ccc' ,borderBottomWidth: 0.6},tabBarActiveTintColor: 'red',tabBarInactiveTintColor: darkmode ? 'white' : '#ccc', tabBarStyle: {backgroundColor: darkmode ? 'black' : 'white'}}}>
    <Tabs.Screen name="index" options={{title: "Home", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name={focused ? 'home': 'home-outline'}/>}}/>
    <Tabs.Screen name="about" options={{title: "About", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name={focused ? 'information' : 'information-circle-outline'}/>}}/>
    <Tabs.Screen name="profile" options={{title: "Profile", tabBarIcon: ({size, color, focused}) => <Ionicons color={color} size={size} name='person-outline'/>}}/>
  </Tabs>;
}
