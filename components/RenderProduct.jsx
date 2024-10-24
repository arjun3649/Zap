import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "../Redux/cartSlice";

const RenderProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setIsInCart(true);
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
      })
    );
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (isInCart) {
      dispatch(
        updateQuantity({
          id: product.id,
          quantity: newQuantity,
        })
      );
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(
        updateQuantity({
          id: product.id,
          quantity: newQuantity,
        })
      );
    } else {
      setQuantity(1);
      setIsInCart(false);
      dispatch(removeFromCart(product.id));
    }
  };

  return (
    <View className="flex-1 p-1">
      <View className="bg-white border border-gray-200 rounded-lg p-2">
        <Link href={`/productitem/${encodeURIComponent(product.slug)}`}>
          <Image
            source={{
              uri: "https://img.freepik.com/premium-photo/assortment-tasty-vegetables-fruits-isolated-with-white-highlights_660230-36110.jpg?w=1060",
            }}
            className="w-full h-24 rounded-md mb-2"
          />
        </Link>

        <Text className="text-sm font-medium mb-1" numberOfLines={2}>
          {product.name}
        </Text>

        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-sm font-bold mr-2">
            ₹{product.price.toFixed(2)}
          </Text>
          <Text className="text-sm text-gray-500 mb-1">{product.quantity}</Text>
        </View>
        {!isInCart ? (
          <TouchableOpacity
            className="bg-blue-500 py-1 rounded-full"
            onPress={handleAddToCart}
          >
            <Text className="text-white font-semibold text-center text-xs">
              Add to Cart
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-row justify-evenly items-center">
            <TouchableOpacity
              className=" w-6 h-6 rounded items-center justify-center bg-green-200"
              onPress={handleDecrement}
            >
              <Text className="text-lg font-bold text-green-700">-</Text>
            </TouchableOpacity>
            <Text className="text-sm font-semibold">{quantity}</Text>
            <TouchableOpacity
              className="bg-green-200 w-6 h-6 rounded items-center justify-center"
              onPress={handleIncrement}
            >
              <Text className="text-lg font-bold text-green-700">+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default RenderProduct;
