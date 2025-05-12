import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { useLocalStorage } from "usehooks-ts";

const NEW_VISITING_SPEAKER_FORM_ID = "new-visiting-speaker-form";

const initialState = {
  first_name: "",
  last_name: "",
};

export const useNewVisitingSpeakerForm = () => {
  const [state, setState] = useLocalStorage(
    NEW_VISITING_SPEAKER_FORM_ID,
    initialState
  );

  const { openModal, onSelect } = useSelectModal(NEW_VISITING_SPEAKER_FORM_ID);

  return {
    ...state,
    setState,
    openModal: () => {
      openModal("Add Visiting Speaker");
    },
    closeModal: () => {
      onSelect({ alertMessage: "Please confirm" });
    },
    modalID: NEW_VISITING_SPEAKER_FORM_ID,
  };
};
