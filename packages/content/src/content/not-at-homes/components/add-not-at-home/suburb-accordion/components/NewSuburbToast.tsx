// import { IonToast } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";

// export function NewSuburbToast() {
//   const { showNewSuburbToast, newSuburbToastMessage, newSuburbToastColor } =
//     useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const handleDismiss = () => {
//     set("notAtHomeDetails", { showNewSuburbToast: false });
//   };

//   return (
//     <>
//       <IonToast
//         isOpen={showNewSuburbToast}
//         onDidDismiss={handleDismiss}
//         message={newSuburbToastMessage}
//         color={newSuburbToastColor}
//         duration={2000}
//       />
//     </>
//   );
// }
