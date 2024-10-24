// ProductDetails.js
import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../../Redux/cartSlice";
import { data } from "../../Utils/Pro";

export default function ProductDetails() {
  const { slug } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Find the product based on the slug
    const foundProduct = data
      .flatMap((item) =>
        item.categories.flatMap((category) =>
          category.subCategories.flatMap((subCategory) =>
            subCategory.products.find((product) => product.slug === slug)
          )
        )
      )
      .filter(Boolean)[0];

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [slug]);

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

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Stack.Screen options={{ title: "Product Not Found" }} />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Product not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen
        options={{
          title: product.name,
          headerStyle: { backgroundColor: "white" },
          headerTintColor: "black",
        }}
      />

      <ScrollView style={styles.scrollView}>
        <Image
          source={{
            uri: "https://img.freepik.com/premium-photo/assortment-tasty-vegetables-fruits-isolated-with-white-highlights_660230-36110.jpg?w=1060",
          }}
          style={styles.image}
        />

        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.quantity}>{product.quantity}</Text>
            </View>
            <Text style={styles.price}>₹{product.price.toFixed(2)}</Text>
          </View>

          {product.organic && (
            <View style={styles.organicBadge}>
              <Text style={styles.organicText}>Organic</Text>
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.sectionText}>{product.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Ingredients</Text>
            <Text style={styles.sectionText}>{product.ingredients}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nutritional Information</Text>
            <Text style={styles.sectionText}>{product.nutritionalInfo}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        {!isInCart ? (
          <TouchableOpacity
            style={styles.addToCartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={handleDecrement}
            >
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantityText}>{quantity}</Text>

            <TouchableOpacity
              style={styles.quantityButton}
              onPress={handleIncrement}
            >
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "#666",
  },
  scrollView: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
  },
  quantity: {
    fontSize: 16,
    color: "#6b7280",
    marginTop: 4,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4ade80",
  },
  organicBadge: {
    backgroundColor: "#ecfdf5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: "flex-start",
    marginBottom: 16,
  },
  organicText: {
    color: "#059669",
    fontWeight: "600",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: "#4b5563",
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb",
  },
  addToCartButton: {
    backgroundColor: "#4ade80",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  addToCartText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  quantityContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  quantityButton: {
    backgroundColor: "#e2f8ea",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  quantityButtonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4ade80",
  },
  quantityText: {
    fontSize: 20,
    fontWeight: "600",
    marginHorizontal: 24,
    color: "#374151",
  },
});
