import { IonButton, IonItem, IonText } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export function SearchNewSuburbButton() {
  const { searchNewSuburb } = useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const handleSearchClick = () => {
    set("notAtHomes", {
      searchNewSuburb: !searchNewSuburb,
      accordionGroupValue: "suburb",
    });
  };

  return (
    <IonItem lines="none" className="ion-margin">
      <IonButton
        onClick={handleSearchClick}
        slot="end"
      >
        <IonText className="ion-margin">
          {!searchNewSuburb && "Add new suburb"}
          {searchNewSuburb && "Stop searching"}
        </IonText>
      </IonButton>
    </IonItem>
  );
}
