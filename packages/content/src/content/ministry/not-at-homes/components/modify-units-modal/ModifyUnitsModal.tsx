import { useNotAtHomesQuery } from "@amodeo/data/react-query/not-at-homes/use-not-at-homes-query";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowUndoOutline } from "ionicons/icons";
import { notAtHomes as notAtHomesIcon } from "@amodeo/ui/util/ionic/icons/icons";

interface UpdateUnitsModalProps {
  modalProps: any;
}

export const UpdateUnitsModal = ({ modalProps }: UpdateUnitsModalProps) => {
  const { data: notAtHomes } = useNotAtHomesQuery();
  const { isUpdateUnitsModalOpen, selectedUnits } = useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const handleClick = (unit: any) => {
    set("notAtHomes", {
      selectedAddress: unit,
      isUpdateNotAtHomesActionSheetOpen: true,
    });
  };

  return (
    <IonModal
      ref={modalProps.modalRef}
      presentingElement={modalProps.presentingElement}
      isOpen={isUpdateUnitsModalOpen}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Update Units</IonTitle>
          <IonButtons slot="end">
            <IonButton
              onClick={() =>
                set("notAtHomes", { isUpdateUnitsModalOpen: false })
              }
            >
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList inset>
          {selectedUnits?.[0] && (
            <IonLabel>
              {selectedUnits[0].house_number} {selectedUnits[0].street},{" "}
              {selectedUnits[0].suburb}
            </IonLabel>
          )}

          {notAtHomes &&
            notAtHomes
              .filter((unit) =>
                selectedUnits?.some(
                  (selectedUnit) => selectedUnit.id === unit.id
                )
              )
              .map((unit) => {
                return (
                  <IonItem key={unit.id} onClick={() => handleClick(unit)}>
                    <IonLabel>Unit: {unit.unit_number}</IonLabel>
                    {unit.returned && <IonIcon icon={notAtHomesIcon} />}
                    {!unit.returned && <IonIcon icon={arrowUndoOutline} />}
                  </IonItem>
                );
              })}
        </IonList>
      </IonContent>
    </IonModal>
  );
};
