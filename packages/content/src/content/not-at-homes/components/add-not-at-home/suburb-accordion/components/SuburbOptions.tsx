// import { IonItem, IonCheckbox } from "@ionic/react";
// import { useSuburbs_2Query } from "@workspace/data/react-query/tables/use-suburbs-2-query";
// import { Tables } from "@workspace/data/supabase/supabase-types";
// import { useStore } from "@workspace/data/zustand/use-store";

// export function SuburbOptions() {
//   const { data: suburbs } = useSuburbs_2Query();
//   const { selectedSuburb, suburbSearchTerm, selectedStreet } =
//     useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const filteredSuburbs =
//     suburbs?.filter((s: Tables<"suburbs_2">) => {
//       if (s.id === selectedSuburb?.id) return true;
//       return s.name.toLowerCase().includes(suburbSearchTerm.toLowerCase());
//     }) || [];

//   const handleSuburbSelect = (newSelectedSuburb: Tables<"suburbs_2">) => {
//     set("notAtHomeDetails", {
//       selectedSuburb: newSelectedSuburb,
//       selectedStreet:
//         newSelectedSuburb !== selectedSuburb ? undefined : selectedStreet,
//       selectedHouseNumber: "",
//       selectedUnitNumber: "",
//       accordionGroupValue: "street", // Close accordion
//     });
//   };

//   return (
//     <>
//       {suburbs &&
//         filteredSuburbs.map((s: Tables<"suburbs_2">) => (
//           <IonItem key={s.id}>
//             <IonCheckbox
//               checked={selectedSuburb?.id === s.id}
//               onIonChange={() => handleSuburbSelect(s)}
//             >
//               {s.name}
//             </IonCheckbox>
//           </IonItem>
//         ))}
//     </>
//   );
// }
