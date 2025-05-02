import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonInput, IonItem, IonLabel, IonToggle } from "@ionic/react";

export function HouseNumberInput() {
  const { addHouseNumber, addUnitNumber, addToLetterList, addStreet } =
    useStore.use.notAtHomes();

  return (
    <>
      <IonItem lines="full">
        <IonInput
          className="ion-text-right ion-margin-end ion-padding-end"
          onIonInput={useStore.getState().handleHouseNumberInput}
          disabled={addStreet?.id === undefined}
          value={addHouseNumber}
        >
          <IonLabel slot="label">
            <strong>House Number:</strong>
          </IonLabel>
        </IonInput>
      </IonItem>
      <IonItem lines="full" className="ion-margin-top">
        <IonInput
          className="ion-text-right ion-margin-end ion-padding-end"
          onIonInput={useStore.getState().handleUnitNumberInput}
          disabled={addHouseNumber === ""}
          value={addUnitNumber}
        >
          <IonLabel slot="label">
            <strong>Unit Number:</strong>
          </IonLabel>
        </IonInput>
      </IonItem>
      <IonItem lines="full" className="ion-margin-top">
        <IonToggle
          onIonChange={useStore.getState().handleLetterListToggleInput}
          disabled={addHouseNumber === ""}
          checked={addToLetterList}
        >
          <strong>Letter List:</strong>
        </IonToggle>
      </IonItem>
    </>
  );
}
