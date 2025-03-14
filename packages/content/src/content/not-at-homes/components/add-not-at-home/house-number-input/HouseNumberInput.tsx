// import { IonInput, IonItem, IonLabel, IonToggle } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";

// export function HouseNumberInput() {
//   const {
//     selectedHouseNumber,
//     selectedStreet,
//     addToLetterList,
//     selectedUnitNumber,
//   } = useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const handleHouseInput = (e: any) => {
//     set("notAtHomeDetails", { selectedHouseNumber: e.detail.value.trim() });
//   };

//   const handleUnitInput = (e: any) => {
//     set("notAtHomeDetails", { selectedUnitNumber: e.detail.value.trim() });
//   };

//   const handleListInput = (e: any) => {
//     set("notAtHomeDetails", { addToLetterList: e.detail.value });
//   };

//   return (
//     <>
//       <IonItem lines="full">
//         <IonInput
//           className="ion-text-right ion-margin-end ion-padding-end"
//           onIonInput={handleHouseInput}
//           disabled={selectedStreet?.id === undefined}
//           value={selectedHouseNumber}
//         >
//           <IonLabel slot="label">
//             <strong>House Number:</strong>
//           </IonLabel>
//         </IonInput>
//       </IonItem>
//       <IonItem lines="full" className="ion-margin-top">
//         <IonInput
//           className="ion-text-right ion-margin-end ion-padding-end"
//           onIonInput={handleUnitInput}
//           disabled={selectedHouseNumber === ""}
//           value={selectedUnitNumber}
//         >
//           <IonLabel slot="label">
//             <strong>Unit Number:</strong>
//           </IonLabel>
//         </IonInput>
//       </IonItem>
//       <IonItem lines="full" className="ion-margin-top">
//         <IonToggle
//           onIonChange={handleListInput}
//           disabled={selectedHouseNumber === ""}
//           checked={addToLetterList}
//         >
//           <strong>Letter List:</strong>
//         </IonToggle>
//       </IonItem>
//     </>
//   );
// }
