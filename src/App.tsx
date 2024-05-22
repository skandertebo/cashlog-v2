import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">
        Open up App.tsx to start working on your app!
      </Text>
      <Link push href="/skander">
        <Text className="text-blue-500">Go to Skander</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
