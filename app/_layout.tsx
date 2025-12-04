import { supabase } from "@/utils/supabase";
import { Stack } from "expo-router";
import { useState } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  const [id, setId] = useState(null);

  const getdata = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (user) {
      console.log("User ID:", user.id);
    }
  };
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(candidate)" options={{ headerShown: false }} />
    </Stack>
  );
}
