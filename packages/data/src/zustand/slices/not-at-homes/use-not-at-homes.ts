import {
  InputInputEventDetail,
  IonInputCustomEvent,
  IonToggleCustomEvent,
  ToggleChangeEventDetail,
} from "@ionic/core";
import {
  Database,
  Tables,
  TablesInsert,
} from "../../../supabase/supabase-types.js";

export const notAtHomes = {
  accordionGroupValue: "suburb",

  isAddModalOpen: false,

  // SELECT SUBURB
  addSuburb: null as null | Tables<"suburbs_2"> | TablesInsert<"suburbs_2">,

  // ADD NEW SUBURB
  searchNewSuburb: false,
  suburbSearchTerm: "",
  isNewSuburbAlertOpen: false,
  isNewSuburbLoading: false,
  isNewSuburbToastOpen: false,
  newSuburbToastMessage: "",
  newSuburbToastColor: "",

  // SELECT STREET
  searchNewStreet: false,
  streetSearchTerm: "",
  confirmNewStreetAlert: false,
  showNewStreetLoading: false,
  showNewStreetToast: false,
  newStreetToastMessage: "",
  newStreetToastColor: "",

  // DATABASE UPDATE VALUES
  selectedAddress: null as null | Tables<"not_at_homes">,
  selectedUnits: null as null | Tables<"not_at_homes">[],

  // ADD FORM VALUES
  addStreet: null as
    | null
    | Database["public"]["Functions"]["get_streets_by_congregation"]["Returns"][number],
  addHouseNumber: "",
  addUnitNumber: "",
  addToLetterList: false,

  // UPDATE NOT AT HOMES
  isUpdateNotAtHomesActionSheetOpen: false,
  isUpdateUnitsModalOpen: false,
};

export type NotAtHomes = typeof notAtHomes;

export const setNotAtHomes = (
  set: (state: { notAtHomes: NotAtHomes }) => void,
  get: () => { notAtHomes: NotAtHomes }
) => {
  return {
    toggleAddModalOpen: () => {
      const notAtHomes = get().notAtHomes;
      set({
        notAtHomes: {
          ...notAtHomes,
          isAddModalOpen: !notAtHomes.isAddModalOpen,
        },
      });
    },
    toggleUpdateNotAtHomesActionSheetOpen: () => {
      const notAtHomes = get().notAtHomes;
      set({
        notAtHomes: {
          ...notAtHomes,
          isUpdateNotAtHomesActionSheetOpen:
            !notAtHomes.isUpdateNotAtHomesActionSheetOpen,
        },
      });
    },
    onHouseMarkerClick: (address: Tables<"not_at_homes">) => {
      const notAtHomes = get().notAtHomes;
      set({
        notAtHomes: {
          ...notAtHomes,
          isUpdateNotAtHomesActionSheetOpen:
            !notAtHomes.isUpdateNotAtHomesActionSheetOpen,
          selectedAddress: address,
        },
      });
    },
    onUnitsMarkerClick: (units: Tables<"not_at_homes">[]) => {
      const notAtHomes = get().notAtHomes;
      set({
        notAtHomes: {
          ...notAtHomes,
          isUpdateUnitsModalOpen: !notAtHomes.isUpdateUnitsModalOpen,
          selectedUnits: units,
        },
      });
    },

    handleHouseNumberInput: (e: IonInputCustomEvent<InputInputEventDetail>) => {
      const notAtHomes = get().notAtHomes;
      set({
        notAtHomes: {
          ...notAtHomes,
          addHouseNumber: e.detail.value?.trim() ?? "",
        },
      });
    },
    handleUnitNumberInput: (e: IonInputCustomEvent<InputInputEventDetail>) => {
      const notAtHomes = get().notAtHomes;
      set({
        notAtHomes: {
          ...notAtHomes,
          addUnitNumber: e.detail.value?.trim() ?? "",
        },
      });
    },
    handleLetterListToggleInput: (
      e: IonToggleCustomEvent<ToggleChangeEventDetail<any>>
    ) => {
      const notAtHomes = get().notAtHomes;
      set({
        notAtHomes: {
          ...notAtHomes,
          addToLetterList: e.detail.value?.trim() ?? false,
        },
      });
    },
  };
};
