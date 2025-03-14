// import {
//   IonAccordionGroup,
//   IonButton,
//   IonButtons,
//   IonContent,
//   IonHeader,
//   IonList,
//   IonModal,
//   IonTitle,
//   IonToolbar,
// } from "@ionic/react";
// import { SuburbAccordion } from "./suburb-accordion/SuburbAccordion.js";
// import { useStore } from "@amodeo/data/zustand/use-store";
// import { StreetAccordion } from "./street-accordion/StreetAccordion.js";
// import { HouseNumberInput } from "./house-number-input/HouseNumberInput.js";
// import { SubmitNotAtHomeButton } from "./submit-button/SubmitNotAtHomeButton.js";

// interface AddNotAtHomeModalProps {
//   modalProps: any;
//   dismissModal: () => void;
// }

// export const AddNotAtHomeModal = ({
//   modalProps,
//   dismissModal,
// }: AddNotAtHomeModalProps) => {
//   const {
//     accordionGroupValue,
//   } = useStore.use.notAtHomeDetails();

//   return (
//     <IonModal {...modalProps}>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Add Not At Home</IonTitle>
//           <IonButtons slot="end">
//             <IonButton onClick={() => dismissModal()}>Close</IonButton>
//           </IonButtons>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         <IonList inset>
//           <IonAccordionGroup value={accordionGroupValue}>
//             <SuburbAccordion />
//             <StreetAccordion />
//           </IonAccordionGroup>
//           <HouseNumberInput />
//         </IonList>
//         <SubmitNotAtHomeButton
//           dismissModal={dismissModal}
//         />
//       </IonContent>
//     </IonModal>
//   );
// };
