import { Link } from "expo-router";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<TextInput
					style={{ 
						height: 40, 
						borderColor: 'gray', 
						borderWidth: 1, 
						width: '90%', 
						marginBottom: 10, 
						paddingHorizontal: 10 
					}}
					placeholder="Enter address"
				/>

				<View style={{ flexDirection: 'row', marginBottom: 10 }}>
					<Text style={{ marginRight: 10 }}>Property Type:</Text>
					
					<TouchableOpacity style={{ marginHorizontal: 5 }}>
						<Text>House</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ marginHorizontal: 5 }}>
						<Text>Apartment</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ marginHorizontal: 5 }}>
						<Text>Condo</Text>
					</TouchableOpacity>
				</View>

				<View style={{ flexDirection: 'row', marginBottom: 10 }}>
					<Text style={{ marginRight: 10 }}>Purpose:</Text>
					<TouchableOpacity style={{ marginHorizontal: 5 }}>
						<Text>Rent</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ marginHorizontal: 5 }}>
						<Text>Buy</Text>
					</TouchableOpacity>
				</View>

				<Link href="/search/display" style={styles.button}>
					<TouchableOpacity style={styles.button}>
						<Text style={{ color: "#f0f0f0" }}>Search</Text>
					</TouchableOpacity>
				</Link>
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
  form: {
	width: "100%",
	flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "black",
  },
  button: {
    backgroundColor: "#101010",
    color: "#f0f0f0",
    
    display: "flex",
    justifyContent: "center",
    textAlign: "center",

    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  }
});