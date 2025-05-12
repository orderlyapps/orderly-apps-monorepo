import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { useLocalStorage } from "usehooks-ts";

const NEW_VISITING_SPEAKER_FORM_ID = "new-visiting-speaker-form";

const initialState = {
  first_name: "",
  last_name: "",
  congregation_id: "",
};

export const useNewVisitingSpeakerForm = () => {
  const [state, setState] = useLocalStorage(
    NEW_VISITING_SPEAKER_FORM_ID,
    initialState
  );

  const { openModal, onSelect } = useSelectModal(NEW_VISITING_SPEAKER_FORM_ID);

  const setFirstName = (first_name: string) => {
    setState({ ...state, first_name });
  };

  const setLastName = (last_name: string) => {
    setState({ ...state, last_name });
  };

  const setCongregation = (congregation_id: string) => {
    setState({ ...state, congregation_id });
  };

  const addNewVisitingSpeaker = () => {
    onSelect({ alertMessage: "Please confirm" });
  };

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
    setFirstName,
    setLastName,
    setCongregation,
    addNewVisitingSpeaker,
  };
};
