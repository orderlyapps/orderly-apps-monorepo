import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonButton, IonItem, IonText } from "@ionic/react";

export function SearchNewStreetButton() {
  const { searchNewStreet } = useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const handleSearchClick = () => {
    set("notAtHomes", {
      searchNewStreet: !searchNewStreet,
      accordionGroupValue: "street",
    });
  };

  return (
    <IonItem lines="none" className="ion-margin">
      <IonButton onClick={handleSearchClick} slot="end">
        <IonText className="ion-margin">
          {!searchNewStreet && "Add new street"}
          {searchNewStreet && "Stop searching"}
        </IonText>
      </IonButton>
    </IonItem>
  );
}
