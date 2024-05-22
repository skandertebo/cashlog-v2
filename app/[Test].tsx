import { Link, useGlobalSearchParams, useNavigation } from "expo-router";
import { StatusBar, Text, View } from "react-native";

export default function Test() {
  const params = useGlobalSearchParams();
  console.log(params);
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">{`
        welcome ${params["Test"]}
      `}</Text>
      <Link replace href="/">
        <Text className="text-blue-500">Go to Home</Text>
      </Link>
      <StatusBar />
    </View>
  );
}
