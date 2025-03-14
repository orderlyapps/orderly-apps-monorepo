// import {
//   IonButton,
//   IonButtons,
//   IonContent,
//   IonHeader,
//   IonIcon,
//   IonItem,
//   IonLabel,
//   IonList,
//   IonModal,
//   IonTitle,
//   IonToolbar,
// } from "@ionic/react";
// import { useNotAtHomesQuery } from "@workspace/data/react-query/tables/use-not-at-homes-query";
// import { useStore } from "@workspace/data/zustand/use-store";
// import { notAtHomes as notAtHomesIcon } from "@workspace/constants/icons/icons";
// import { arrowUndoOutline } from "ionicons/icons";
// interface UpdateUnitsModalProps {
//   modalProps: any;
// }

// export const UpdateUnitsModal = ({ modalProps }: UpdateUnitsModalProps) => {
//   const { data: notAtHomes } = useNotAtHomesQuery();
//   const { isUpdateUnitsModalOpen, selectedUnits } =
//     useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const handleClick = (unit: any) => {
//     set("notAtHomeDetails", {
//       selectedAddress: unit,
//       isOnHouseClickActionSheetOpen: true,
//     });
//   };

//   return (
//     <IonModal
//       ref={modalProps.modalRef}
//       presentingElement={modalProps.presentingElement}
//       isOpen={isUpdateUnitsModalOpen}
//     >
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Update Units</IonTitle>
//           <IonButtons slot="end">
//             <IonButton
//               onClick={() =>
//                 set("notAtHomeDetails", { isUpdateUnitsModalOpen: false })
//               }
//             >
//               Close
//             </IonButton>
//           </IonButtons>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonList inset>
//           {selectedUnits && (
//             <IonLabel>
//               {selectedUnits[0].house_number} {selectedUnits[0].street},{" "}
//               {selectedUnits[0].suburb}
//             </IonLabel>
//           )}

//           {notAtHomes &&
//             notAtHomes
//               .filter((unit) =>
//                 selectedUnits?.some(
//                   (selectedUnit) => selectedUnit.id === unit.id
//                 )
//               )
//               .map((unit) => {
//                 return (
//                   <IonItem key={unit.id} onClick={() => handleClick(unit)}>
//                     <IonLabel>Unit: {unit.unit_number}</IonLabel>
//                     {unit.returned && <IonIcon icon={notAtHomesIcon} />}
//                     {!unit.returned && <IonIcon icon={arrowUndoOutline} />}
//                   </IonItem>
//                 );
//               })}
//         </IonList>
//       </IonContent>
//     </IonModal>
//   );
// };
