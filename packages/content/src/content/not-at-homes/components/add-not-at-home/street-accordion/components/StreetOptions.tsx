// import { IonItem, IonCheckbox } from "@ionic/react";
// import { useStreetsQuery } from "@workspace/data/react-query/tables/use-streets-query";
// import { Database } from "@workspace/data/supabase/supabase-types";
// import { useStore } from "@workspace/data/zustand/use-store";

// export function StreetOptions() {
//   const { data: streets } = useStreetsQuery();
//   const { selectedStreet, streetSearchTerm, selectedSuburb } =
//     useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const filteredStreets =
//     streets?.filter((s) => {
//       if (s.suburb_id !== selectedSuburb?.id) return false;
//       if (s.id === selectedStreet?.id) return true;
//       return s.street_name
//         .toLowerCase()
//         .includes(streetSearchTerm.toLowerCase());
//     }) || [];

//   const handleStreetSelect = (
//     selectedStreet: Database["public"]["Functions"]["insert_street_and_return"]["Returns"][number]
//   ) => {
//     set("notAtHomeDetails", {
//       selectedStreet,
//       accordionGroupValue: "closed", // Close accordion
//     });
//   };

//   return (
//     <>
//       {streets &&
//         filteredStreets.map((s) => (
//           <IonItem key={s.id}>
//             <IonCheckbox
//               checked={selectedStreet?.id === s.id}
//               onIonChange={() => handleStreetSelect(s)}
//             >
//               {s.street_name}
//             </IonCheckbox>
//           </IonItem>
//         ))}
//     </>
//   );
// }
