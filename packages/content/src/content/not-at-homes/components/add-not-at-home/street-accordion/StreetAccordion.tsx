// import { IonAccordion, IonItem, IonList } from "@ionic/react";
// import { StreetAlert } from "./components/StreetAlert";
// import { chevronExpandOutline } from "ionicons/icons";
// import { useStore } from "@workspace/data/zustand/use-store";
// import { StreetOptions } from "./components/StreetOptions";
// import { SearchNewStreetButton } from "./components/SearchNewStreetButton";
// import { StreetSearchBar } from "./components/StreetSearchBar";
// import { NewStreetOptions } from "./components/NewStreetOptions";
// import { StreetHeader } from "./components/StreetHeader";
// import { NewStreetToast } from "./components/NewStreetToast";

// export function StreetAccordion() {
//   const { searchNewStreet, selectedSuburb } = useStore.use.notAtHomeDetails();

//   return (
//     <IonAccordion
//       toggleIcon={chevronExpandOutline}
//       value="street"
//       className="ion-margin-vertical"
//       disabled={selectedSuburb?.id === undefined}
      
//     >
//       <IonItem slot="header" lines="inset">
//         <StreetHeader />
//       </IonItem>
//       <IonList slot="content">
//         <SearchNewStreetButton />
//         <StreetSearchBar />
//         {!searchNewStreet && <StreetOptions />}
//         {searchNewStreet && <NewStreetOptions />}
//         <StreetAlert />
//         <NewStreetToast />
//         <div style={{ height: "10rem" }}></div>
//       </IonList>
//     </IonAccordion>
//   );
// }
