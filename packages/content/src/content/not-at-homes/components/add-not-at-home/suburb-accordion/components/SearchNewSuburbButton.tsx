// import { IonButton, IonItem, IonText } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";

// export function SearchNewSuburbButton() {
//   const { searchNewSuburb } = useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const handleSearchClick = () => {
//     set("notAtHomeDetails", {
//       searchNewSuburb: !searchNewSuburb,
//       accordionGroupValue: "suburb",
//     });
//   };

//   return (
//     <IonItem lines="none" className="ion-margin">
//       <IonButton
//         onClick={handleSearchClick}
//         slot="end"
//       >
//         <IonText className="ion-margin">
//           {!searchNewSuburb && "Add new suburb"}
//           {searchNewSuburb && "Stop searching"}
//         </IonText>
//       </IonButton>
//     </IonItem>
//   );
// }
