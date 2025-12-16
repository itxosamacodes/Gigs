import { supabase } from "@/utils/supabase";
import { router, Stack } from "expo-router";
import { useEffect } from "react";
import "react-native-reanimated";

export default function RootLayout() {
  useEffect(() => {
    const checkUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.replace("/");
          return;
        }

        const userRole = user.user_metadata?.role;

        if (userRole === "candidate") {
          router.replace("/(candidate)/(drawer)/home");
        } else {
          router.replace("/(recruiter)/(drawer)/home");
        }
      } catch (error) {
        console.error("Error checking user:", error);
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
      <Stack.Screen name="(recruiter)" options={{ headerShown: false }} />
    </Stack>
  );
}
