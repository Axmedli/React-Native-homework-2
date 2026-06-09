import "../../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useMMKVBoolean, useMMKVString } from "react-native-mmkv";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function RootLayout() {
  const [darkmode, setDarkMode] = useMMKVBoolean("darkmode");
  const [accessToken, setAccessToken] = useMMKVString("accessToken");

  const router = useRouter();

  useEffect(() => { 
    router.replace(accessToken ? "/(tabs)" : "/(auth)");
  }, [accessToken]);

  return (
    <>
      <Stack screenOptions={{ headerStyle: { backgroundColor: "black" } }}>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={darkmode ? "light" : "dark"} />
    </>
  );
}
