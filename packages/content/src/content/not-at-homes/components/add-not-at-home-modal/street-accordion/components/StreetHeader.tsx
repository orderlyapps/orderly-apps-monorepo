import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonLabel, IonText } from "@ionic/react";

export function StreetHeader() {
  const { addStreet } = useStore.use.notAtHomes();

  return (
    <>
      <IonLabel>
        <strong>Street:</strong>
      </IonLabel>
      <IonText>{addStreet?.street_name || "Select Street"}</IonText>
    </>
  );
}
