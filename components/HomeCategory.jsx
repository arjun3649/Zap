import React from "react";
import { Image, Text, View } from "react-native";

export default function HomeCategory({ category }) {
  const allSubCategories = category.subCategories;


  return (
    <View className="mb-1 mt-3">
      <Text className="text-xl font-bold px-4">Shop by category</Text>

      <View className="flex-row flex-wrap ">
        {allSubCategories.map((subCategory) => (
          <View
            key={subCategory.id}
            className="items-center mb-4"
            style={{ width: "22%", margin: "1%" }}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/premium-photo/assortment-tasty-vegetables-fruits-isolated-with-white-highlights_660230-36110.jpg?w=1060",
              }}
              className="w-20 h-24 rounded-lg"
            />
            <Text className="text-center text-sm mt-2">{subCategory.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
