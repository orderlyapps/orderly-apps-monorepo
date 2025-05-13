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
    initialState
  );

  const { openModal, onSelect } = useSelectModal(NEW_PUBLISHER_FORM_ID);

  const setFirstName = (first_name: string) => {
    setState({ ...state, first_name });
  };

  const setLastName = (last_name: string) => {
    setState({ ...state, last_name });
  };

  const addNewPublisher = () => {
    onSelect({ alertMessage: "Please confirm" });
  };

  return {
    ...state,
    setFirstName,
    setLastName,
    setState,
    openModal: () => {
      openModal("Add Publisher");
    },
    modalID: NEW_PUBLISHER_FORM_ID,
    addNewPublisher,
  };
};
