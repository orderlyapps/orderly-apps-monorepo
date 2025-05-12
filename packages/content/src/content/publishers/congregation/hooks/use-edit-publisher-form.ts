import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { useLocalStorage } from "usehooks-ts";
import { usePublisherData } from "../publisher-details/components/publisher-data-provider/PublisherDataProvider.js";

const EDIT_PUBLISHER_FORM_ID = "edit-publisher-form";

const initialState = {
  detailsToEdit: "" as "name",
};

export const useEditPublisherForm = () => {
  const publisher = usePublisherData();
  const [state, setState] = useLocalStorage(
    EDIT_PUBLISHER_FORM_ID,
    { ...initialState, ...publisher },
    {
      initializeWithValue: false,
    }
  );

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
    openModal: ({
      detailsToEdit,
    }: {
      detailsToEdit: typeof initialState.detailsToEdit;
    }) => {
      setState({ ...state, detailsToEdit });
      openModal("Edit Publisher");
    },
    modalID: EDIT_PUBLISHER_FORM_ID,
    updatePublisher,
  };
};
