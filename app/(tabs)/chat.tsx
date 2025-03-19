import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import listing from "@/assets/config/database";

export default function Chat() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <View style={styles.header}>
        <View style={styles.search_container}>
          <Ionicons name="search" size={24} color="black" style={styles.search_icon} />
          <TextInput style={styles.search_bar} placeholder="Search" placeholderTextColor="gray" />
        </View>
      </View>
      <View style={styles.chat_list}>
          {
            listing.map((listing) => {
              return (
                <TouchableOpacity key={listing.id} style={styles.chat}>
                  <Image source={listing.image} style={{ width: 50, height: 50, borderRadius: 25 }} />
                  <View style={styles.chat_info}>
                    <View style={styles.chat_header}>
                      <Text style={styles.chat_name}>{listing.name}</Text>
                      <Text style={styles.chat_date}>
                        {
                          new Date(listing.chat[listing.chat.length - 1].timestamp)
                            .toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })
                        }
                      </Text>
                    </View>
                    <Text style={styles.chat_message}>{listing.chat[listing.chat.length - 1].message}</Text>
                  </View>
                </TouchableOpacity>
              )
            })
          }
        </View>
    </View>
  )
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
  header: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
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
  search_icon: {
    marginRight: 10,
  },
  search_bar: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "flex-start",
    textAlign: "left",
  },
  chat_list: {},
  chat: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center", 
    marginTop: 20,
  },
  chat_info: {
    flex: 1,
    marginLeft: 15,
    display: "flex",
    flexDirection: "column",
  },
  chat_header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chat_name: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  chat_date: {
    fontSize: 10,
    color: "gray",
  },
  chat_message: {
    fontSize: 15,
    color: "gray",
  }
});