import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { useState } from "react";
import { usePublisherData } from "../../publisher-data-provider/PublisherDataProvider.js";
import { useZustand } from "@amodeo/data/zustand/use-Zustand/useZustand";
import { PublisherDetails } from "@amodeo/data/supabase/supabase-types";

const EDIT_PUBLISHER_FORM_ID = "edit-publisher-form";

const initialState = {
  detailsToEdit: "" as "name",
};

export const useEditPublisherForm = (publisher: PublisherDetails) => {
  const { state: state_z, setState: setState_z } = useZustand(
    {
      ...initialState,
      ...publisher,
    }
    // { storeName: "xxx-" + EDIT_PUBLISHER_FORM_ID }
  );
  // const [state, setState] = useState({ ...initialState, ...publisher });
  const { openModal, onSelect } = useSelectModal(EDIT_PUBLISHER_FORM_ID);

  const setFirstName = (first_name: string) => {
    setState_z({ ...state_z, first_name });
  };

  const setLastName = (last_name: string) => {
    setState_z({ ...state_z, last_name });
  };

  const updatePublisher = () => {
    onSelect({ alertMessage: "Please confirm" });
  };

  return {
    ...state_z,
    setFirstName,
    setLastName,
    setState: setState_z,
    openModal: ({
      detailsToEdit,
    }: {
      detailsToEdit: typeof initialState.detailsToEdit;
    }) => {
      setState_z({ ...state_z, detailsToEdit });
      openModal("Edit Publisher");
    },
    modalID: EDIT_PUBLISHER_FORM_ID,
    updatePublisher,
  };
};
