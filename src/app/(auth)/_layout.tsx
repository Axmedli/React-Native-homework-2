import { Stack } from "expo-router";
import { useMMKVBoolean } from "react-native-mmkv";

const Layout = () => {
  const [darkmode, setDarkMode] = useMMKVBoolean('darkmode');
    return (
        <Stack screenOptions={{ headerTitleStyle: { color: darkmode ? "white" : "black" }, headerStyle: { backgroundColor: darkmode ? 'black' : 'white' }}}>
            <Stack.Screen name="index" options={{ title: 'Login' }} />
            <Stack.Screen name="register" options={{ title: 'Register' }} />
        </Stack>
    )
}

export default Layout