import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Address from "../../components/Address";
import HomeCategory from "../../components/HomeCategory";
import LocationSelector from "../../components/LocationSelector";
import { data } from "../../Utils/Pro";

const Index = () => {
    const bottomSheetRef = useRef();
    const [selectedAddress, setSelectedAddress] = useState("Select Location");

    function handleBottomBar() {
        bottomSheetRef.current?.expand();
    }

    function handleAddressSelect(title) {
        setSelectedAddress(title);
        bottomSheetRef.current?.close();
    }
    data.forEach((items) => {
        console.log("====================================");
        console.log(items.categories);
        console.log("====================================");
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.content}>
                <View className="bg-green-400 py-4">
                    <Address
                        handleBottomBar={handleBottomBar}
                        address={selectedAddress}
                    />
                </View>
                <View className="bg-white mt-1">
                    {data.map((item) =>
                        item.categories.map((category) => (
                            <HomeCategory
                                key={category.id}
                                category={category}
                            />
                        ))
                    )}
                </View>
            </ScrollView>
            <LocationSelector
                ref={bottomSheetRef}
                onAddressselect={handleAddressSelect}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4ade80",
    },
    content: {
        flex: 1,
        backgroundColor: "white",
    },
});

export default Index;
