import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Session } from "@supabase/supabase-js";
import { createSelectors } from "./create-selectors.js";

const defaultState = (_set: any, _get: any) => {
  return {
    session: null as Session | null,
    online: true as boolean,
    theme: "light" as "dark" | "light" | "auto",
  };
};

export type StoreState = ReturnType<typeof defaultState>;
export type StoreProperties = keyof typeof defaultState;

type StoreActions = {
  resetStore: () => void;
  resetStoreProperty: (property: keyof ReturnType<typeof defaultState>) => void;
  setStoreProperties: <K extends keyof StoreState>(
    property: K,
    value: Partial<StoreState[K]> | "reset"
  ) => void;
};

const useStoreBase = create<StoreState & StoreActions>()(
  persist(
    (set, get) => ({
      ...defaultState(set, get),

      resetStore: () =>
        set(() => ({
          ...defaultState(set, get),
        })),

      resetStoreProperty: (property) => {
        set((state) => {
          return {
            ...state,
            [property]: defaultState(set, get)[property],
          };
        });
      },

      setStoreProperties: (property, value) => {
        set((state) => {
          if (value === "reset") {
            return {
              ...state,
              [property]: defaultState(set, get)[property],
            };
          }

          const existingValues =
            typeof state[property] === "object" ? state[property] : null;
          const valueIsObject = typeof value === "object" ? { ...value } : null;

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
    }),
    {
      name: "store", // name of the item in the storage (must be unique)
    }
  )
);

export const useStore = createSelectors(useStoreBase);

export const getStoreState = useStoreBase.getState;
