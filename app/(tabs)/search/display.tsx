import { useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Display() {
    const bottomSheet = useRef<BottomSheet>(null);


    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.carrusel}>

            </View>
            
            <BottomSheet ref={bottomSheet}>
                <BottomSheetView style={{ height: "100%" }}>
                    <Text>Bottom Sheet</Text>
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  carrusel: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});