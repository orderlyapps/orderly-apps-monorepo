import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import {
  IonAccordionGroup,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { SuburbAccordion } from "./suburb-accordion/SuburbAccordion.js";
import { StreetAccordion } from "./street-accordion/StreetAccordion.js";
import { HouseNumberInput } from "./house-number-input/HouseNumberInput.js";
import { SubmitNotAtHomeButton } from "./submit-not-at-home-button/SubmitNotAtHomeButton.js";

export const AddNotAtHomeModal = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { isAddModalOpen, accordionGroupValue } = useStore.use.notAtHomes();
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
          <IonList inset>
            <IonAccordionGroup value={accordionGroupValue}>
              <SuburbAccordion />
              <StreetAccordion />
            </IonAccordionGroup>
            <HouseNumberInput />
          </IonList>
          <SubmitNotAtHomeButton dismissModal={toggleAddModalOpen} />
        </IonContent>
      </IonModal>
    </>
  );
};
