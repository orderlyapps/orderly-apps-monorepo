import { create } from "zustand";
import { createSelectors } from "../helpers/create-selectors.js";
import { combine, persist } from "zustand/middleware";
import { setTheme, theme, ThemeOption } from "../slices/theme/use-theme.js";
import {
  setMapView,
  mapView,
  MapView,
} from "../slices/map-view/use-map-view.js";
import {
  Congregation,
  congregation,
  setCongregation,
} from "../slices/congregation/use-congregation.js";
import {
  notAtHomes,
  NotAtHomes,
  setNotAtHomes,
} from "../slices/not-at-homes/use-not-at-homes.js";
import {
  weekendMeeting,
  setWeekendMeeting,
  WeekendMeeting,
} from "../slices/weekend-meeting/use-weekend-meeting.js";

const initialState = {
  theme,
  mapView,
  congregation,
  notAtHomes,
  weekendMeeting,
};

const actions = (set: (state: any) => void, get: () => any) => {
  return {
    setTheme: setTheme(set as (state: { theme: ThemeOption }) => void),
    setMapView: setMapView(set as (state: { mapView: MapView }) => void),

    ...setCongregation(set as (state: { congregation: Congregation }) => void),
    ...setNotAtHomes(
      set as (state: { notAtHomes: NotAtHomes }) => void,
      get as () => { notAtHomes: NotAtHomes }
    ),
    ...setWeekendMeeting(
      set as (state: { weekendMeeting: WeekendMeeting }) => void,
      get as () => { weekendMeeting: WeekendMeeting }
    ),
  };
};

const useStoreBase = create(
  persist(
    combine(
      // Initial state
      initialState,

      // Methods
      (set, get, _api) => {
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
          ...actions(set, get),
        };
      }
    ),
    { name: "store" }
  )
);

export const useStore = createSelectors(useStoreBase);
