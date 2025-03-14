// import { IonToast } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";

// export function NewStreetToast() {
//   const { showNewStreetToast, newStreetToastMessage, newStreetToastColor } =
//     useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const handleDismiss = () => {
//     set("notAtHomeDetails", { showNewStreetToast: false });
//   };

//   return (
//     <>
//       <IonToast
//         isOpen={showNewStreetToast}
//         onDidDismiss={handleDismiss}
//         message={newStreetToastMessage}
//         color={newStreetToastColor}
//         duration={2000}
//       />
//     </>
//   );
// }
