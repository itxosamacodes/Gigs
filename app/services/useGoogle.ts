import { supabase } from "@/utils/supabase";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

export async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: "myapp://auth/callback",
    },
  });

  if (error) throw error;

  if (data?.url) {
    await WebBrowser.openAuthSessionAsync(data.url, "myapp://auth/callback");
  }
}
