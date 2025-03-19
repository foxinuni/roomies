import { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import listing from "@/assets/config/database";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Display() {
    const [page, setPage] = useState(4);
    const bottomSheet = useRef<BottomSheet>(null);

    useEffect(() => {
      if (page < 0 || page >= listing.length) {
        setPage(0);
      }
    }, [page]);

    return (
        <GestureHandlerRootView style={styles.container}>
            <Image source={listing[page].image} style={styles.image} />
            
            <BottomSheet ref={bottomSheet}>
                <BottomSheetView style={{ height: "100%" }}>
                  <View style={styles.bottom_header}>
                    <Text style={styles.title}>{listing[page].name}</Text>
                    <View style={styles.info}>
                      <Ionicons name="star" size={16} color="gold" />
                      <Text style={{ marginLeft: 5 }}>{listing[page].rating}</Text>

                      <Ionicons name="pricetag" size={16} color="black" style={{ marginLeft: 10 }} />
                      <Text style={{ marginLeft: 5 }}>${listing[page].price}</Text>
                    </View>
                  </View>
                  <View style={styles.address}>
                    <Text style={styles.text}>{listing[page].address}</Text>
                  </View>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  bottom_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeee",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  text: {
    fontSize: 15,
    color: "black",
  },
  address: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  }
});