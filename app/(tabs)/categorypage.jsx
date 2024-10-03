import React from "react";
import { ScrollView } from "react-native";
import Category from "../../components/Category";
import { data } from "../../Utils/Products";
import "/home/rio/Documents/projects/DelieveryApp/global.css";

const CategoryPage = () => {
  return (
    <ScrollView>
      {data.map((item) => (
        <Category key={item.id} categories={item.categories} />
      ))}
    </ScrollView>
  );
};

export default CategoryPage;
