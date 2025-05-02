import { IonAccordion, IonItem, IonList } from "@ionic/react";
import { NewStreetAlert } from "./components/NewStreetAlert.js";
import { chevronExpandOutline } from "ionicons/icons";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { StreetOptions } from "./components/StreetOptions.js";
import { SearchNewStreetButton } from "./components/SearchNewStreetButton.js";
import { StreetSearchBar } from "./components/StreetSearchBar.js";
import { NewStreetOptions } from "./components/NewStreetOptions.js";
import { StreetHeader } from "./components/StreetHeader.js";
import { NewStreetToast } from "./components/NewStreetToast.js";

export function StreetAccordion() {
  const { searchNewStreet, addSuburb } = useStore.use.notAtHomes();

  return (
    <IonAccordion
      toggleIcon={chevronExpandOutline}
      value="street"
      className="ion-margin-vertical"
      disabled={addSuburb?.id === undefined}
      
    >
      <IonItem slot="header" lines="inset">
        <StreetHeader />
      </IonItem>
      <IonList slot="content">
        <SearchNewStreetButton />
        <StreetSearchBar />
        {!searchNewStreet && <StreetOptions />}
        {searchNewStreet && <NewStreetOptions />}
        <NewStreetAlert />
        <NewStreetToast />
        <div style={{ height: "10rem" }}></div>
      </IonList>
    </IonAccordion>
  );
}
