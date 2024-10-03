import React from "react";
import { Text } from "react-native";

export default function RenderProduct({ products }) {
  return products.map((product) => (
    <Text key={product.id}>{product.name}</Text>
  ));
}
