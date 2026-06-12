import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import { useMMKVBoolean,useMMKVString } from "react-native-mmkv";
import StyledText from "../../components/StyledText";
import { useRouter } from "expo-router";
import { login } from "@/api/auth";

export default function Login() {
  const [darkmode, setDarkMode] = useMMKVBoolean("darkmode");
  const [accessToken, setAccessToken] = useMMKVString("accessToken");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const router = useRouter();

  const validate = () => {
    const newErrors = {
      username: "",
      password: "",
    };

    if (!formData.username.trim()) newErrors.username = "Username is required";

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: "" }));
  };

  const handleSubmit = () => {
    if (!validate()) return;

    login(formData);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          backgroundColor: darkmode ? "#000000" : "#ffffff",
        }}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <View className={darkmode ? "bg-black" : "bg-white"} justify-center>
          <View className="border border-zinc-300 mx-5 p-5 gap-5">
            <View className="gap-2">
              <StyledText>Username</StyledText>
              <TextInput
                value={formData.username}
                onChangeText={(text) => handleChange("username", text)}
                placeholder="Enter your username"
                placeholderTextColor ={darkmode ? "#555555" : "#aaaaaa"}
                className={`border border-zinc-300 pl-3 ${darkmode ? 'text-white' : 'text-black'}`}
                autoCapitalize="none"
              />
              {errors.username ? (
                <Text className="text-red-500">{errors.username}</Text>
              ) : null}
            </View>

            <View className="gap-2">
              <StyledText>Password</StyledText>
              <TextInput
                value={formData.password}
                onChangeText={(text) => handleChange("password", text)}
                placeholder="Enter your password"
                placeholderTextColor ={darkmode ? "#555555" : "#aaaaaa"}
                className={`border border-zinc-300 pl-3 ${darkmode ? 'text-white' : 'text-black'}`}
                secureTextEntry
              />
              {errors.password ? (
                <Text className="text-red-500">{errors.password}</Text>
              ) : null}
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              className="bg-green-700 py-6"
            >
              <StyledText className="text-center text-white text-xl">
                Login
              </StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

