// import { IonItem, IonText, IonLabel, IonNote } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";
// import { MapboxFeatures } from "@workspace/maps/mapbox/mapbox-types";
// import { useSearchSuburb } from "@workspace/maps/mapbox/useSearchSuburb";

// export function NewSuburbOptions() {
//   const { suburbSearchTerm, searchNewSuburb } =
//     useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const newSuburbOptions = useSearchSuburb(suburbSearchTerm, {
//     enabled: searchNewSuburb,
//     minCharacters: 3,
//   });

//   const handleSelect = (newSuburb: MapboxFeatures) => {
//     set("notAtHomeDetails", {
//       confirmNewSuburbAlert: true,
//       newSuburb: {
//         bbox: newSuburb.properties.bbox,
//         center: newSuburb.geometry.coordinates,
//         name: newSuburb.properties.name,
//         congregation_id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
//       },
//       accordionGroupValue: "suburb", // Keep accordion open
//     });
//   };

//   if (newSuburbOptions?.length === 0)
//     return (
//       <IonItem lines="none">
//         <IonText>No results found</IonText>
//       </IonItem>
//     );

//   return (
//     <>
//       {suburbSearchTerm.length < 3 && (
//         <IonItem lines="none">
//           {suburbSearchTerm.length < 1 ? (
//             <IonText>Start typing...</IonText>
//           ) : suburbSearchTerm.length < 3 ? (
//             <IonText>Keep typing...</IonText>
//           ) : null}
//         </IonItem>
//       )}

//       {newSuburbOptions?.map((o: MapboxFeatures) => {
//         return (
//           <IonItem
//             onClick={() => {
//               handleSelect(o);
//             }}
//             key={o.id}
//           >
//             <IonLabel>
//               {o.properties.name}
//               <br></br>
//               <IonNote>
//                 {o.properties.full_address.split(", ").slice(1).join(", ")}
//               </IonNote>
//             </IonLabel>
//           </IonItem>
//         );
//       })}
//     </>
//   );
// }
