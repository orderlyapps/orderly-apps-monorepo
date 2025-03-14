// import { IonActionSheet } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";
// import { useDeleteNotAtHomeMutation } from "@workspace/data/react-query/mutations/use-delete-not-at-home-mutation";
// import { useUpdateNotAtHomesMutation } from "@workspace/data/react-query/mutations/use-update-not-at-homes-mutation";

// export function ActionSheet({}) {
//   const {
//     isOnHouseClickActionSheetOpen,
//     // selectedSuburb,
//     // selectedStreet,
//     // selectedHouseNumber,
//     selectedAddress,
//   } = useStore.use.notAtHomeDetails();

//   const set = useStore.use.setStoreProperties();
//   const { mutateAsync: deleteNotAtHome } = useDeleteNotAtHomeMutation();
//   const { mutateAsync: updateNotAtHome } = useUpdateNotAtHomesMutation();

//   const handleDelete = async () => {
//     try {
//       deleteNotAtHome(selectedAddress.id);
//     } catch (e) {}
//   };

//   const handleLetterList = async () => {
//     try {
//       updateNotAtHome({
//         id: selectedAddress.id,
//         returned: !selectedAddress.returned,
//       });
//     } catch (e) {}
//   };

//   return (
//     <IonActionSheet
//       isOpen={isOnHouseClickActionSheetOpen}
//       header={`${selectedAddress.unit_number ? `${selectedAddress.unit_number}/` : ""}${selectedAddress.house_number} ${selectedAddress.street}, ${selectedAddress.suburb}`}
//       className="action-sheet-jw-blue"
//       buttons={[
//         {
//           text: "Delete",
//           role: "destructive",
//           data: {
//             action: "delete",
//           },
//           handler: handleDelete,
//         },
//         {
//           text: `Send to ${selectedAddress.returned ? "Return List" : "Letter List"}`,
//           data: {
//             action: "share",
//           },
//           handler: handleLetterList,
//         },
//         {
//           text: "Cancel",
//           role: "cancel",
//           data: {
//             action: "cancel",
//           },
//         },
//       ]}
//       onDidDismiss={() =>
//         set("notAtHomeDetails", {
//           isOnHouseClickActionSheetOpen: false,
//         })
//       }
//     ></IonActionSheet>
//   );
// }
