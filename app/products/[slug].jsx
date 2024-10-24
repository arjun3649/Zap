import { Stack, useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderProduct from "../../components/RenderProduct";
import "../../global.css";
import { data } from "../../Utils/Pro";

export default function ProductsList() {
  const { slug } = useLocalSearchParams();
  const [productName, setProductName] = useState("");

  useEffect(() => {
    // Find the product name based on the slug
    const foundProduct = data.flatMap((item) =>
      item.categories.flatMap((category) =>
        category.subCategories.flatMap((subCategory) =>
          subCategory.slug === slug ? subCategory : []
        )
      )
    )[0];

    if (foundProduct) {
      setProductName(foundProduct.name);
    }
  }, [slug]);

  // Filter products based on the slug
  const products = data.flatMap((item) =>
    item.categories.flatMap((category) =>
      category.subCategories.flatMap((subCategory) =>
        subCategory.slug === slug ? subCategory.products : []
      )
    )
  );

  const renderItem = ({ item }) => (
    <View style={styles.productWrapper}>
      <RenderProduct product={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Stack.Screen options={{ title: productName || "Products" }} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ade80",
  },
  listContent: {
    padding: 5,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  productWrapper: {
    width: "48%",
    marginBottom: 10,
  },
});
