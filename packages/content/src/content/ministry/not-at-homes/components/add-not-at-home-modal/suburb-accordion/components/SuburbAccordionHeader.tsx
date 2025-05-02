import { IonLabel, IonText } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export function SuburbAccordionHeader() {
  const { addSuburb } = useStore.use.notAtHomes();

  return (
    <>
      <IonLabel>
        <strong>Suburb:</strong>
      </IonLabel>
      <IonText>{addSuburb?.name || "Select Suburb"}</IonText>
    </>
  );
}
