// import { IonAlert, IonLoading } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";
// import { useInsertStreetMutation } from "@workspace/data/react-query/mutations/use-insert-street-mutation";

// export const StreetAlert = () => {
//   const {
//     confirmNewStreetAlert,
//     newStreet,
//     showNewStreetLoading,
//     selectedSuburb,
//   } = useStore.use.notAtHomeDetails();

//   const { mutateAsync } = useInsertStreetMutation();

//   const set = useStore.use.setStoreProperties();

//   const handleDismiss = () => {
//     set("notAtHomeDetails", { confirmNewStreetAlert: false });
//   };

//   const handleConfirm = async () => {
//     set("notAtHomeDetails", {
//       confirmNewStreetAlert: false,
//       showNewStreetLoading: true,
//     });
//     try {
//       const selectedStreet = await mutateAsync({
//         p_congregation_id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
//         p_longitude: newStreet.longitude,
//         p_latitude: newStreet.latitude,
//         p_street_name: newStreet.street_name,
//         p_suburb_id: selectedSuburb.id,
//       });

//       set("notAtHomeDetails", {
//         showNewStreetLoading: false,
//         showNewStreetToast: true,
//         newStreetToastMessage: `Street ${newStreet.street_name} added successfully`,
//         newStreetToastColor: "success",
//         accordionGroupValue: "closed",
//         selectedStreet,
//         searchNewStreet: false,
//         streetSearchTerm: "",
//       });
//     } catch (error: unknown) {
//       const errorMessage =
//         error instanceof Error ? error.message : "An unexpected error occurred";

//       // Check for specific Supabase error types if needed
//       const isUniqueViolation = errorMessage.includes("duplicate key value");

//       set("notAtHomeDetails", {
//         showNewStreetLoading: false,
//         showNewStreetToast: true,
//         newStreetToastColor: isUniqueViolation ? "warning" : "danger",
//         newStreetToastMessage: isUniqueViolation
//           ? `Street ${newStreet.street_name} already exists`
//           : `Failed to add street ${newStreet.street_name}: ${errorMessage}`,
//       });
//     }
//   };

//   return (
//     <>
//       <IonAlert
//         isOpen={confirmNewStreetAlert}
//         onDidDismiss={handleDismiss}
//         header="Confirm Street"
//         message={`Are you sure you want to add ${newStreet.street_name}?`}
//         buttons={[
//           {
//             text: "Cancel",
//             role: "cancel",
//           },
//           {
//             text: "Add",
//             handler: handleConfirm,
//           },
//         ]}
//       />
//       <IonLoading isOpen={showNewStreetLoading} spinner="dots"></IonLoading>
//     </>
//   );
// };
