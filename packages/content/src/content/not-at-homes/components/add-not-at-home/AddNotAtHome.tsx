import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";

export const AddNotAtHome = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { isAddModalOpen } = useStore.use.notAtHomes();
  const toggleAddModalOpen = useStore.use.toggleAddModalOpen();

  return (
    <>
      <IonFab slot="fixed" horizontal="end" vertical="bottom">
        <IonFabButton onClick={toggleAddModalOpen}>
          <IonIcon icon={add}></IonIcon>
        </IonFabButton>
      </IonFab>
      <IonModal {...modalProps} isOpen={isAddModalOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Add Not At Home</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={toggleAddModalOpen}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItemGroup>
              <IonItem>
                <IonLabel>Suburb</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonItemGroup>
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};
