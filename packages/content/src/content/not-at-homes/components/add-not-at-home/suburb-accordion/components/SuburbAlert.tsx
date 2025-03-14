// import { IonAlert, IonLoading } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";
// import { useInsertSuburb_2Mutation } from "@workspace/data/react-query/mutations/use-insert-suburb-2-mutation";

// export const SuburbAlert = () => {
//   const { confirmNewSuburbAlert, newSuburb, showNewSuburbLoading } =
//     useStore.use.notAtHomeDetails();

//   const { mutateAsync } = useInsertSuburb_2Mutation();

//   const set = useStore.use.setStoreProperties();

//   const handleDismiss = () => {
//     set("notAtHomeDetails", { confirmNewSuburbAlert: false });
//   };

//   const handleConfirm = async () => {
//     set("notAtHomeDetails", {
//       confirmNewSuburbAlert: false,
//       showNewSuburbLoading: true,
//     });

//     try {
//       const selectedSuburb = await mutateAsync(newSuburb);
//       set("notAtHomeDetails", {
//         showNewSuburbLoading: false,
//         showNewSuburbToast: true,
//         newSuburbToastMessage: `Suburb ${newSuburb.name} added successfully`,
//         newSuburbToastColor: "success",
//         accordionGroupValue: "street",
//         selectedSuburb,
//         selectedStreet: undefined,
//         searchNewSuburb: false,
//         suburbSearchTerm: "",
//       });
//     } catch (error: unknown) {
//       const errorMessage =
//         error instanceof Error ? error.message : "An unexpected error occurred";

//       // Check for specific Supabase error types if needed
//       const isUniqueViolation = errorMessage.includes("duplicate key value");

//       set("notAtHomeDetails", {
//         showNewSuburbLoading: false,
//         showNewSuburbToast: true,
//         newSuburbToastColor: isUniqueViolation ? "warning" : "danger",
//         newSuburbToastMessage: isUniqueViolation
//           ? `Suburb ${newSuburb.name} already exists`
//           : `Failed to add suburb ${newSuburb.name}: ${errorMessage}`,
//       });
//     }
//   };

//   return (
//     <>
//       <IonAlert
//         isOpen={confirmNewSuburbAlert}
//         onDidDismiss={handleDismiss}
//         header="Confirm Suburb"
//         message={`Are you sure you want to add ${newSuburb.name}?`}
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
//       <IonLoading isOpen={showNewSuburbLoading} spinner="dots"></IonLoading>
//     </>
//   );
// };
