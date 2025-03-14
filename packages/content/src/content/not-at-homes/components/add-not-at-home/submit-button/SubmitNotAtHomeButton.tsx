// import { IonButton } from "@ionic/react";
// import { useMap } from "@vis.gl/react-maplibre";
// import { useStore } from "@workspace/data/zustand/use-store";
// import searchAddress from "@workspace/maps/mapbox/searchAddress";
// import { useInsertNotAtHomeMutation } from "@workspace/data/react-query/mutations/use-insert-not-at-home-mutation";

// interface SubmitButtonProps {
//   dismissModal: () => void;
// }

// export const SubmitNotAtHomeButton = ({ dismissModal }: SubmitButtonProps) => {
//   const {
//     selectedSuburb,
//     selectedStreet,
//     selectedHouseNumber,
//     selectedUnitNumber,
//     addToLetterList,
//   } = useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();
//   const { current: map } = useMap();

//   const { mutate } = useInsertNotAtHomeMutation();

//   const handleSubmit = async () => {
//     dismissModal();
//     const address = await searchAddress({
//       suburb: selectedSuburb,
//       street: selectedStreet,
//       houseNumber: selectedHouseNumber,
//     });

//     mutate({
//       unit_number: selectedUnitNumber,
//       house_number: selectedHouseNumber,
//       location: [address.longitude, address.latitude],
//       returned: addToLetterList,
//       suburb: selectedSuburb.name,
//       street: selectedStreet.street_name,
//       written: false,
//       accuracy: address.accuracy,
//       confidence: address.confidence,
//       match_data: address.match_data,
//       created_by: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
//       congregation_id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
//     });

//     set("notAtHomeDetails", {
//       selectedHouseNumber: selectedUnitNumber === "" ? "" : selectedHouseNumber,
//       selectedUnitNumber: "",
//       addToLetterList: false,
//     });

//     map?.flyTo({ center: [address.longitude, address.latitude], zoom: 18 });
//   };

//   return (
//     <IonButton
//       onClick={handleSubmit}
//       expand="block"
//       className="ion-padding"
//       disabled={selectedHouseNumber === ""}
//     >
//       Submit
//     </IonButton>
//   );
// };
