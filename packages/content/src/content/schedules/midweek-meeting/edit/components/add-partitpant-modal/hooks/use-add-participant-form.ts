import { useSelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { useLocalStorage } from "usehooks-ts";

const initialState = {
  first_name: "",
  last_name: "",
  modalID: "add-midweek-participant-form",
  participant_id: "",
  assignment_id: "",
  actionType: "new" as "new" | "existing",
};

export const useAddParticipantForm = () => {
  const [
    {
      modalID,
      first_name,
      last_name,
      participant_id,
      actionType,
      assignment_id,
    },
    setState,
  ] = useLocalStorage<typeof initialState>(
    "add-midweek-participant-form",
    initialState
  );
  const { openModal, onSelect } = useSelectModal(modalID);

  const openAddParticipantModal = (assignmentId: string) => {
    setState((state) => ({
      ...state,
      assignment_id: assignmentId,
    }));
    openModal(assignmentId);
  };

  const setFirstName = (firstName: string) => {
    setState((state) => ({
      ...state,
      first_name: firstName,
    }));
  };

  const setLastName = (lastName: string) => {
    setState((state) => ({
      ...state,
      last_name: lastName,
    }));
  };

  const addNewParticipant = () => {
    setState((state) => ({
      ...state,
      actionType: "new",
    }));
    onSelect({ alertMessage: "Please confirm" });
  };

  const addExistingParticipant = (participantId: string) => {
    setState((state) => ({
      ...state,
      participant_id: participantId,
      actionType: "existing",
    }));
    onSelect({ alertMessage: "Please confirm" });
  };

  return {
    modalID,
    first_name,
    last_name,
    participant_id,
    actionType,
    assignment_id,
    openAddParticipantModal,
    setFirstName,
    setLastName,
    addNewParticipant,
    addExistingParticipant,
  };
};
