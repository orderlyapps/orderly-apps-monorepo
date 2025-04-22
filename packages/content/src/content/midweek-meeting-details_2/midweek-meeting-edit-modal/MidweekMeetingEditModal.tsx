import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
} from "@ionic/react";

export const MidweekMeetingEditModal = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  const { isMidweekMeetingEditModalOpen } = useStore.use.midweekMeeting();
  const setMidweekMeetingEditModalOpen =
    useStore.use.setMidweekMeetingEditModalOpen();

  return (
    <IonModal {...modalProps} isOpen={isMidweekMeetingEditModalOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MidweekMeetingDetails</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setMidweekMeetingEditModalOpen(false)}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="full centered">This is a Modal</div>
      </IonContent>
    </IonModal>
  );
};
