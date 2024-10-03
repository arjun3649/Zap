import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { forwardRef, useMemo, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import address from "../Utils/AddressList";
import AddressItem from "./AddressItem";

const LocationSelector = forwardRef(({onAddressselect}, ref) => {
  const snapPoints = useMemo(() => ["25%", "50%", "75%", "90%"], []);
  

  function setlocation() {}

  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      index={-1}
      className="shadow-lg "
    >
      <View className="flex-1 p-4 bg-gray-50">
        <Text className="text-xl font-bold mb-4">Select location</Text>

        <View className="flex-row items-center bg-gray-100 rounded-lg px-3 mb-4">
          <Ionicons name="search" size={20} color="#888" className="mr-2" />
          <TextInput
            className="flex-1 h-10 text-base"
            placeholder="Search for area, street name..."
            placeholderTextColor="#888"
          />
        </View>

        <TouchableOpacity className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4">
          <Ionicons name="locate" size={20} color="#4CAF50" />
          <Text className="flex-1 ml-2 text-green-600 font-bold">
            Go to current location
          </Text>
          <Ionicons name="chevron-forward" size={20} color="#888" />
        </TouchableOpacity>

        <Text className="text-base font-bold text-gray-600 mb-3">
          Your saved addresses
        </Text>

        <BottomSheetScrollView>
          {address.map((map) => (
            <AddressItem
              key={map.id}
              type={map.type}
              title={map.title}
              distance={map.distance}
              address={map.address}
              handleclick={()=>onAddressselect(map.address)}
            />
          ))}
        </BottomSheetScrollView>
      </View>
    </BottomSheet>
  );
});

export default LocationSelector;
