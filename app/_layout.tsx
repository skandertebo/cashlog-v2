import { Stack } from "expo-router";
import tw from "twrnc";
export default function Layout() {
  return (
    <Stack
      screenOptions={({ route }) => ({
        headerShown: route.name !== "index",
        ...(route.name === "[Test]" && {
          title: (route.params as { Test: string })?.["Test"] ?? "Test",
          headerStyle: tw`bg-[#f4511e]`,
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }),
      })}
    />
  );
}
