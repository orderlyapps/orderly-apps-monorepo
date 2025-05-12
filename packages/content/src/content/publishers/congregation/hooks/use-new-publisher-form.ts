import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { useLocalStorage } from "usehooks-ts";

const NEW_PUBLISHER_FORM_ID = "new-publisher-form";

const initialState = {
  first_name: "",
  last_name: "",
};

export const useNewPublisherForm = () => {
  const [state, setState] = useLocalStorage(
    NEW_PUBLISHER_FORM_ID,
    initialState,
    {
      initializeWithValue: false,
    }
  );

  const { openModal, onSelect } = useSelectModal(NEW_PUBLISHER_FORM_ID);

  return {
    ...state,
    setState,
    openModal: () => {
      openModal("Add Publisher");
    },
    closeModal: () => {
      onSelect({ alertMessage: "Please confirm" });
    },
    modalID: NEW_PUBLISHER_FORM_ID,
  };
};
