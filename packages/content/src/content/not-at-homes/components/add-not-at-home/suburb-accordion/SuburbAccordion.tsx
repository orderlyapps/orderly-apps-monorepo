// import {
//   IonAccordion,
//   IonItem, IonList
// } from "@ionic/react";
// import { SuburbAlert } from "./components/SuburbAlert";
// import { chevronExpandOutline } from "ionicons/icons";
// import { useStore } from "@workspace/data/zustand/use-store";
// import { SuburbOptions } from "./components/SuburbOptions";
// import { SearchNewSuburbButton } from "./components/SearchNewSuburbButton";
// import { SuburbSearchBar } from "./components/SuburbSearchBar";
// import { NewSuburbOptions } from "./components/NewSuburbOptions";
// import { Header } from "./components/SuburbHeader";
// import { NewSuburbToast } from "./components/NewSuburbToast";

// export function SuburbAccordion() {
//   const { searchNewSuburb } = useStore.use.notAtHomeDetails();

//   return (
//     <IonAccordion toggleIcon={chevronExpandOutline} value="suburb" className="ion-margin-vertical">
//       <IonItem slot="header">
//         <Header />
//       </IonItem>
//       <IonList slot="content">
//         <SearchNewSuburbButton />
//         <SuburbSearchBar />
//         {!searchNewSuburb && <SuburbOptions />}
//         {searchNewSuburb && <NewSuburbOptions />}
//         <SuburbAlert />
//         <div style={{height: "10rem"}}></div>
//         <NewSuburbToast />
//       </IonList>
//     </IonAccordion>
//   );
// }
