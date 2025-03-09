import { create } from "zustand";
import { createSelectors } from "../helpers/create-selectors.js";
import { combine } from "zustand/middleware";
import { setTheme, theme, ThemeOption } from "../slices/theme/use-theme.js";

const initialState = {
  theme,
} as const;

const actions = (set: (state: typeof initialState) => void) => {
  return {
    setTheme: setTheme(set),
  };
};

const useStoreBase = create(
  combine(
    // Initial state
    initialState,

    // Methods
    (set, _get, _api) => {
      return {
        setStoreProperties: <K extends keyof typeof initialState>(
          property: K,
          value: Partial<(typeof initialState)[K]>
        ) => {
          set((state) => {
            const existingValues =
              typeof state[property] === "object" ? state[property] : null;
            const valueIsObject =
              typeof value === "object" ? { ...value } : null;

            if (!valueIsObject) {
              return {
                ...state,
                [property]: value,
              };
            }

            return {
              ...state,
              [property]: {
                ...(typeof existingValues === "object" ? existingValues : {}),
                ...valueIsObject,
              },
            };
          });
        },
        ...actions(set),
      };
    }
  )
);

export const useStore = createSelectors(useStoreBase);
