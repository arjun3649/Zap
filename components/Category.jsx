import React from "react";
import { Text, View } from "react-native";
import RendersubCategories from "./RendersubCategories";

const Category = ({ categories }) => {

  return (
    <View className="mb-5">
      {categories.map((category) => (
        <View key={category.id} className="mb-3">
          <Text className="text-lg font-bold">{category.name}</Text>
          {category.subCategories && (
            <RendersubCategories subCategories={category.subCategories} />
          )}
        </View>
      ))}
    </View>
  );
};

export default Category;
