import { supabase } from "@/utils/supabase";
import { Stack, router } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // User logged in → go to candidate dashboard
        router.replace("/(candidate)/(drawer)/home");
      } else {
        // No user → go to login/index
        router.replace("/");
      }
    };

    checkUser();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(candidate)" options={{ headerShown: false }} />
    </Stack>
  );
}
