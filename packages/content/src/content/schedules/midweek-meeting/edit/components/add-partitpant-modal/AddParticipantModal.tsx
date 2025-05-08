import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import {
  SelectModal,
  useSelectModal,
} from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { IonItem, IonButton } from "@ionic/react";

export const ADD_PARTICIPANT_MODAL_ID = "add-midweek-participant";

export const AddParticipantModal = ({
  modalProps,
  assignmentData,
}: {
  modalProps: ModalProps;
  assignmentData: AssigmentData;
}) => {
  const { openModal } = useSelectModal(ADD_PARTICIPANT_MODAL_ID);

  return (
    <>
      <SelectModal
        modalProps={modalProps}
        id={ADD_PARTICIPANT_MODAL_ID}
        onSelect={async () => {
          return {
            successMessage: "Participant added",
            errorMessage: null,
            closeOnSuccess: true,
          };
        }}
      >
        <AddParticipantModalContent />
      </SelectModal>

      <IonButton
        onClick={() => openModal("Add Participant")}
        expand="block"
        className="ion-margin"
      >
        Add Participant
      </IonButton>
    </>
  );
};

const AddParticipantModalContent = () => {
  const { closeModal } = useSelectModal(ADD_PARTICIPANT_MODAL_ID);

  return (
    <IonItem onClick={() => closeModal()}>
      Add Participant Modal Content
    </IonItem>
  );
};
