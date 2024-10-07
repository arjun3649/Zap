import React from "react";
import { ScrollView } from "react-native";
import Category from "../../components/Category";
import { data } from "../../Utils/Pro";
import "../../global.css"

const CategoryPage = () => {
  return (
    <ScrollView>
      {data.map((item, index) => (
        <Category key={item.id || index} categories={item.categories || []} />
      ))}
    </ScrollView>
  );
};

export default CategoryPage;
