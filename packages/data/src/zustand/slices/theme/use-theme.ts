export type ThemeOption = "dark" | "light" | "auto";

export const theme = "light" as ThemeOption;

export const setTheme = (set: (state: { theme: ThemeOption }) => void) => {
  return (theme: ThemeOption) => {
    set({ theme });
  };
};
