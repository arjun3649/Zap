import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import Address from "../../components/Address";
import Category from "../../components/Category";
import LocationSelector from "../../components/LocationSelector";
import "../../global.css";
import { setAddress } from "../../Redux/addressSlice";
import { data } from "../../Utils/Products";

const CategoryPage = () => {
  const bottomSheetRef = React.useRef(null);
  const selectedAddress = useSelector((state) => state.address.title);
  const dispatch = useDispatch();
  const handleBottomBar = () => {
    bottomSheetRef.current?.expand();
  };

  const handleAddressSelect = (title) => {
    dispatch(setAddress(title));
    bottomSheetRef.current?.close();
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView className="bg-gray-100">
        <View style={styles.addressContainer}>
          <Address
            handleBottomBar={handleBottomBar}
            address={selectedAddress}
          />
        </View>
        {data.map((item, index) => (
          <Category key={item.id || index} categories={item.categories || []} />
        ))}
      </ScrollView>
      <LocationSelector
        ref={bottomSheetRef}
        onAddressSelect={handleAddressSelect}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4ade80",
  },
  addressContainer: {
    backgroundColor: "#4ade80",
    paddingVertical: 16,
  },
});

export default CategoryPage;
