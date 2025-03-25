import React from "react";
import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Index() {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 4.711,
					longitude: -74.0721,
					latitudeDelta: 0.01,
					longitudeDelta: 0.01,
				}}
			/>
			<View style={styles.form}>
				<View style={styles.search_container}>
					<Ionicons name="home" size={24} color="black" style={styles.house_icon} />
					<TextInput style={styles.search_bar} placeholder="Enter an address" placeholderTextColor="gray" />
				</View>
				<View style={styles.search_row}>
					<TouchableOpacity style={styles.filter}>
						<Text style={styles.text}>Property Type: House</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.filter}>
						<Text style={styles.text}>Purpose: Rent</Text>
					</TouchableOpacity>
					<Link href="/search/display" style={styles.button}>
						<TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
							<Ionicons name="search" size={18} color="#f0f0f0" style={styles.search_icon} />
						</TouchableOpacity>
					</Link>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
	width: "100%",
	height: "100%",
  },
  form: {
	width: "100%",
	position: "absolute",
	top: 40,
	left: 0,
	flex: 1,
    justifyContent: "center",
    alignItems: "center",
	padding: 20,
  },
  search_container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeeee",
	borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  house_icon: {
    marginRight: 10,
  },
  search_icon: {
	width: "100%",
	height: "100%",
  },
  search_bar: {
	flex: 1,
	justifyContent: "flex-start",
	textAlign: "left",
	marginLeft: 10,
  },
  search_row: {
	width: "100%",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	paddingVertical: 15,
	borderBottomLeftRadius: 5,
	borderBottomRightRadius: 5,
  },
  filter: {
	backgroundColor: "#303030",
	display: "flex",
	flexDirection: "row",
	color: "#f0f0f0",
	borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  button: {
	height: "100%",
	backgroundColor: "#101010",
	borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  text: {
	color: "#f0f0f0",
  }
});