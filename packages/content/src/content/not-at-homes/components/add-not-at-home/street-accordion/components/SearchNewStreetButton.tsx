// import { IonButton, IonItem, IonText } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";

// export function SearchNewStreetButton() {
//   const { searchNewStreet } = useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const handleSearchClick = () => {
//     set("notAtHomeDetails", {
//       searchNewStreet: !searchNewStreet,
//       accordionGroupValue: "street",
//     });
//   };

//   return (
//     <IonItem lines="none" className="ion-margin">
//       <IonButton onClick={handleSearchClick} slot="end">
//         <IonText className="ion-margin">
//           {!searchNewStreet && "Add new street"}
//           {searchNewStreet && "Stop searching"}
//         </IonText>
//       </IonButton>
//     </IonItem>
//   );
// }
