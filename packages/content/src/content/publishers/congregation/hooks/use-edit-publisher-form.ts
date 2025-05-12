import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { useLocalStorage } from "usehooks-ts";
import { PublisherData } from "../publisher-details/components/publisher-data-provider/PublisherDataProvider.js";

const EDIT_PUBLISHER_FORM_ID = "edit-publisher-form";

export const useEditPublisherForm = (publisher: PublisherData) => {
  const [state, setState] = useLocalStorage(EDIT_PUBLISHER_FORM_ID, publisher);

  const { openModal, onSelect } = useSelectModal(EDIT_PUBLISHER_FORM_ID);

  const setFirstName = (first_name: string) => {
    setState({ ...state, first_name });
  };

  const setLastName = (last_name: string) => {
    setState({ ...state, last_name });
  };

  const updatePublisher = () => {
    onSelect({ alertMessage: "Please confirm" });
  };

  return {
    ...state,
    setFirstName,
    setLastName,
    setState,
    openModal: () => {
      openModal("Edit Publisher");
    },
    modalID: EDIT_PUBLISHER_FORM_ID,
    updatePublisher,
  };
};
