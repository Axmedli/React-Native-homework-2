import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View } from 'react-native';
import { useMMKVBoolean } from 'react-native-mmkv';

export default function HomeScreen() {
  const [darkmode, setDarkMode] = useMMKVBoolean('darkmode');
  const router = useRouter();

  return (
    <View className={`flex-1 items-center justify-center ${darkmode ? 'bg-black' : 'bg-white'}`}>
      <View className="mx-6 rounded-2xl p-8 shadow-lg dark:bg-slate-800">
        <Text className="mb-2 text-center text-3xl font-bold text-red-600 ">
          NativeWind
        </Text>
        <Text className="mb-6 text-center text-base text-slate-600 ">
          Expo SDK 56 + Tailwind CSS
        </Text>
        <TouchableOpacity onPress={() => {router.push('/user')}} className="rounded-xl bg-blue-500 px-6 py-3 active:bg-blue-600">
          <Text className="text-center text-base font-semibold text-white">
            Go to user page
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          setDarkMode(prevState => !prevState);
        }} className="rounded-xl bg-blue-500 px-6 py-3 mt-5 active:bg-blue-600">
          <Text className="text-center text-base font-semibold text-white">
            {darkmode ? "Disable" : "Enable"} dark mode
          </Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}
