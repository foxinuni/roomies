import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen name="search" options={{
				title: 'Search',
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'search-sharp' : 'search-outline'} color={color} size={24} />
				),
			}} />

			<Tabs.Screen name="saved" options={{
				title: 'Saved',
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'heart-sharp' : 'heart-outline'} color={color} size={24} />
				)
			}} />

			<Tabs.Screen name="chat" options={{
				title: 'Chat',
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'} color={color} size={24} />
				)
			}} />

			<Tabs.Screen name="profile" options={{
				title: 'My Profile',
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'person-sharp' : 'person-outline'} color={color} size={24} />
				)
			}} />
		</Tabs>
	);
}
