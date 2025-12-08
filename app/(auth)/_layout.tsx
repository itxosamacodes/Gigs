import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ headerShown: false }} />
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
      <Stack.Screen name="setPassword" options={{ headerShown: false }} />
      <Stack.Screen name="varificationScren" options={{ headerShown: false }} />
      <Stack.Screen name="forget" options={{ headerShown: false }} />
    </Stack>
  );
}
