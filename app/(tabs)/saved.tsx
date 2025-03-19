import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import Ionicons from "@expo/vector-icons/Ionicons";
import listing from "@/assets/config/database";

export default function Saved() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Bookmarks</Text>
			
			{
				listing.map((listing) => (
					<TouchableOpacity key={listing.id} style={styles.card}>
						<Image source={listing.image} style={styles.card_img}/>
						<View style={styles.card_info}>
							<View style={styles.card_header}>
								<Text style={styles.card_name}>{listing.name}</Text>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Ionicons name="star" size={16} color="gold" />
									<Text style={{ marginLeft: 5 }}>{listing.rating}</Text>
								</View>
							</View>
							
							<View style={styles.card_tags}>
								{listing.tags.map((tag) => (
									<Text key={tag} style={styles.card_tag}>{tag}</Text>
								))}
							</View>
						</View>
					</TouchableOpacity>
				))
			}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		paddingHorizontal: 20,
		paddingVertical: 40,
	},
	title: {
		fontSize: 35,
		color: "black",
		fontWeight: "bold",
	},
	card: {
		backgroundColor: "#eeeeee",
		borderRadius: 5,
		marginTop: 15,

		display: "flex",
		flexDirection: "row",
	},
	card_img: {
		width: "30%",
		height: "100%",
		resizeMode: "cover",
		alignSelf: "center",
		borderTopLeftRadius: 5,
		borderBottomLeftRadius: 5,
	},
	card_info: {
		width: "70%",
		paddingHorizontal: 10,
		paddingVertical: 10,
	},
	card_header: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	card_name: {
		fontSize: 20,
		color: "black",
		fontWeight: "bold",
	},
	card_tags: {
		display: "flex",
		flexDirection: "row",
		marginTop: 10,
	},
	card_tag: {
		backgroundColor: "#101010",
		color: "#f0f0f0",
		paddingHorizontal: 10,
		paddingVertical: 5,
		borderRadius: 5,
		marginRight: 5,
	}
});