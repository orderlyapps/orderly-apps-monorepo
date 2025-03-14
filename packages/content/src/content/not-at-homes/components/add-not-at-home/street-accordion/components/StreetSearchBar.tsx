// import { IonSearchbar } from "@ionic/react";
// import { useStore } from "@workspace/data/zustand/use-store";
// import { useEffect, useRef } from "react";

// export function StreetSearchBar() {
//   const searchBarRef = useRef<HTMLIonSearchbarElement>(null);

//   const { streetSearchTerm, searchNewStreet } = useStore.use.notAtHomeDetails();
//   const set = useStore.use.setStoreProperties();

//   const handleSearchChange = (e: CustomEvent) => {
//     const value = e.detail.value || "";
//     set("notAtHomeDetails", {
//       streetSearchTerm: value,
//       accordionGroupValue: "street", // Close accordion
//     });
//   };

//   useEffect(() => {
//     if (searchNewStreet) {
//       searchBarRef.current?.setFocus();
//     }
//   }, [searchNewStreet]);

//   return (
//     <IonSearchbar
//       ref={searchBarRef}
//       value={streetSearchTerm}
//       onIonInput={handleSearchChange}
//     />
//   );
// }
