import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { IonButton } from "@ionic/react";
import { AddParticipantModalContent } from "./components/content/AddParticipantModalContent.js";
import { useAddParticipantForm } from "./hooks/use-add-participant-form.js";
import { useInsertPublisherMutation } from "@amodeo/data/react-query/midweek-meeting/use-insert-publisher-mutation";
import { useInsertParticipantMutation } from "@amodeo/data/react-query/midweek-meeting/use-insert-participant-mutation";
import { tryCatch } from "@amodeo/util/errors/try-catch";

export const AddParticipantModal = ({
  modalProps,
  assignmentData,
}: {
  modalProps: ModalProps;
  assignmentData: AssigmentData;
}) => {
  const {
    modalID,
    openAddParticipantModal,
    first_name,
    last_name,
    assignment_id,
    participant_id,
    actionType,
  } = useAddParticipantForm();

  const { mutateAsync } = useInsertPublisherMutation();
  const { mutateAsync: addExistingParticipant } =
    useInsertParticipantMutation();

  const handleSelect = async () => {
    if (actionType === "new") {
      const { error } = await tryCatch(
        mutateAsync({
          first_name,
          last_name,
        })
      );
    }

    if (actionType === "existing") {
      const { error } = await tryCatch(
        addExistingParticipant({
          assignment: assignmentData.assignment_id,
          participant_id,
        })
      );
    }

    let error: Error | null = null;

    if (!first_name || !last_name) {
      error = new Error("Please enter a first and last name");
    }

    if (!error) {
      return {
        successMessage: null,
        errorMessage: "Please enter a first and last name",
        closeOnSuccess: false,
      };
    }
    if (error) {
      return {
        successMessage: null,
        errorMessage: error.message,
        closeOnSuccess: false,
      };
    }

    return {
      successMessage: "Participant added",
      errorMessage: null,
      closeOnSuccess: true,
    };
  };

  return (
    <>
      <SelectModal modalProps={modalProps} id={modalID} onSelect={handleSelect}>
        <AddParticipantModalContent assignmentData={assignmentData} />
      </SelectModal>

      <IonButton
        onClick={() => openAddParticipantModal(assignmentData.assignment_id)}
        expand="block"
        className="ion-margin"
      >
        Add Participant
      </IonButton>
    </>
  );
};
