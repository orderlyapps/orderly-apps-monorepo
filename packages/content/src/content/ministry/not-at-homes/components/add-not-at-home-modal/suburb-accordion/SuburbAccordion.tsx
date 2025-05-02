import { IonAccordion, IonItem, IonList } from "@ionic/react";
import { chevronExpandOutline } from "ionicons/icons";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { SearchNewSuburbButton } from "./components/SearchNewSuburbButton.js";
import { SuburbAccordionHeader } from "./components/SuburbAccordionHeader.js";
import { SuburbOptions } from "./components/SuburbOptions.js";
import { SuburbSearchBar } from "./components/SuburbSearchBar.js";
import { NewSuburbOptions } from "./components/NewSuburbOptions.js";
import { NewSuburbAlert } from "./components/NewSuburbAlert.js";
import { NewSuburbToast } from "./components/NewSuburbToast.js";

export function SuburbAccordion() {
  const { searchNewSuburb } = useStore.use.notAtHomes();

  return (
    <IonAccordion
      toggleIcon={chevronExpandOutline}
      value="suburb"
      className="ion-margin-vertical"
    >
      <IonItem slot="header">
        <SuburbAccordionHeader />
      </IonItem>
      <IonList slot="content">
        <SearchNewSuburbButton />
        <SuburbSearchBar />
        {!searchNewSuburb && <SuburbOptions />}
        {searchNewSuburb && <NewSuburbOptions />}
        <NewSuburbAlert />
        <div style={{ height: "10rem" }}></div>
        <NewSuburbToast />
      </IonList>
    </IonAccordion>
  );
}
