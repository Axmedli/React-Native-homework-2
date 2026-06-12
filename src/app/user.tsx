import React, { useEffect, useState } from "react";
import StyledText from "@/components/StyledText";
import StyledView from "@/components/StyledView";
import { getCurrentUser } from "@/api/users";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const User = () => {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    (async function () {
      const userData = await getCurrentUser();
      setUser(userData);
    })();
  }, []);

  return (
    <StyledView className="flex-1">
      <ScrollView>
        <View className="bg-[#8B5CF6] h-52 w-[120%] rounded-b-full items-center justify-center right-10">
          <StyledText className="text-white text-3xl font-medium">
            {user?.firstName} {user?.lastName}
          </StyledText>
        </View>

        <View className="items-center mt-[-40px]">
          <View className="w-20 h-20 rounded-full bg-white items-center justify-center border-2 border-zinc-200">
            {user?.image ? (
              <Image source={{ uri: user.image }} className="w-20 h-20 rounded-full" />
            ) : (
              <Ionicons name="person" size={40} color="#8B5CF6" />
            )}
          </View>
        </View>

        <View className="mt-6">
          <View className="flex-row items-center px-6 py-4 border-b border-zinc-100">
            <Ionicons name="person-outline" size={22} color="#8B5CF6" />
            <StyledText className="text-zinc-500 text-base ml-4">
              {user?.firstName ?? ""} {user?.lastName ?? ""}
            </StyledText>
          </View>

          <View className="flex-row items-center px-6 py-4 border-b border-zinc-100">
            <Ionicons name="calendar-outline" size={22} color="#8B5CF6" />
            <StyledText className="text-zinc-500 text-base ml-4">
              {user?.birthDate ?? "Birthday"}
            </StyledText>
          </View>

          <View className="flex-row items-center px-6 py-4 border-b border-zinc-100">
            <Ionicons name="phone-portrait-outline" size={22} color="#8B5CF6" />
            <StyledText className="text-zinc-500 text-base ml-4">
              {user?.phone ?? "Phone"}
            </StyledText>
          </View>

          <View className="flex-row items-center px-6 py-4 border-b border-zinc-100">
            <Ionicons name="logo-instagram" size={22} color="#8B5CF6" />
            <StyledText className="text-zinc-500 text-base ml-4">
              Instagram account
            </StyledText>
          </View>

          <View className="flex-row items-center px-6 py-4 border-b border-zinc-100">
            <Ionicons name="mail-outline" size={22} color="#8B5CF6" />
            <StyledText className="text-zinc-500 text-base ml-4">
              {user?.email ?? "Email"}
            </StyledText>
          </View>

          <View className="flex-row items-center px-6 py-4 border-b border-zinc-100">
            <Ionicons name="eye-outline" size={22} color="#8B5CF6" />
            <StyledText className="text-zinc-500 text-base ml-4">
              Password
            </StyledText>
          </View>
        </View>

        <View className="px-8 mt-8 mb-6">
          <TouchableOpacity className="bg-[#8B5CF6] rounded-full py-4 items-center">
            <StyledText className="text-white text-base font-semibold">
              Edit profile
            </StyledText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </StyledView>
  );
};

export default User;