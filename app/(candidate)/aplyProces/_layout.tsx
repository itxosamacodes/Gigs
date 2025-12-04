import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="aplyProces" options={{ headerShown: false }} />
      <Stack.Screen name="apply" options={{ headerShown: false }} />
      <Stack.Screen name="cvPicker" options={{ headerShown: false }} />
    </Stack>
  );
}
