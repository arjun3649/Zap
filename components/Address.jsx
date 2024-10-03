import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import AnimatedSearch from "./AnimatedSearch";

export default function Address({ handleBottomBar, address }) {
  return (
    <View className="flex-1 ">
      <View className="flex-row justify-between items-center m-2">
        <View>
          <Text className="text-3xl font-bold text-white">16 minutes</Text>
          <View className="flex-row items-start">
            <TouchableOpacity
              onPress={handleBottomBar}
              className="flex-row items-center f rounded-lg"
            >
              <Text className="text-white font-bold text-lg ">{address}</Text>
              {/* Button text */}
              <Ionicons name="chevron-down" size={20} color="white" />
              {/* Dropdown icon */}
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TouchableOpacity
            className="flex-row items-center bg-gray-500 p-3 rounded-full"
            onPress={() => router.navigate("/profile")}
          >
            <Ionicons name="person" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <AnimatedSearch />
    </View>
  );
}
