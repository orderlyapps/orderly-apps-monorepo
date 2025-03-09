import { supabase } from "@amodeo/data/supabase/client";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { useEffect } from "react";

export function useInit() {
  const setStoreProperties = useStore.use.setStoreProperties();
  const theme = useStore.use.theme();

  // const toggleDarkPalette = (shouldAdd: boolean) => {
  //   document.documentElement.classList.toggle("ion-palette-dark", shouldAdd);
  // };

  // const initializeDarkPalette = (isDark: boolean) => {
  //   setStoreProperties("theme", isDark ? "dark" : "light");
  //   toggleDarkPalette(isDark);
  // };

  useEffect(() => {
    // set auth session
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setStoreProperties("session", session || "reset");
    });

    // set online status
    setStoreProperties("online", window.navigator.onLine);
    const updateOnlineStatus = (_event: Event) => {
      setStoreProperties("online", window.navigator.onLine);
    };
    window.addEventListener("online", updateOnlineStatus);
    window.addEventListener("offline", updateOnlineStatus);

    // set dark palette
    // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    // initializeDarkPalette(prefersDark.matches);
    // const setDarkPaletteFromMediaQuery = (mediaQuery: MediaQueryListEvent) => {
    //   initializeDarkPalette(mediaQuery.matches);
    // };
    // prefersDark.addEventListener("change", setDarkPaletteFromMediaQuery);

    if (theme === "dark") {
      document.documentElement.classList.toggle("ion-palette-dark", true);
    }

    return () => {
      subscription.unsubscribe();
      window.removeEventListener("online", updateOnlineStatus);
      window.removeEventListener("offline", updateOnlineStatus);
      // prefersDark.removeEventListener("change", setDarkPaletteFromMediaQuery);
    };
  }, []);
}
