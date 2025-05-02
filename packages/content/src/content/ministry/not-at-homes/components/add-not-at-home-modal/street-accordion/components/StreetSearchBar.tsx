import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonSearchbar } from "@ionic/react";
import { useEffect, useRef } from "react";

export function StreetSearchBar() {
  const searchBarRef = useRef<HTMLIonSearchbarElement>(null);

  const { streetSearchTerm, searchNewStreet } = useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const handleSearchChange = (e: CustomEvent) => {
    const value = e.detail.value || "";
    set("notAtHomes", {
      streetSearchTerm: value,
      accordionGroupValue: "street", // Close accordion
    });
  };

  useEffect(() => {
    if (searchNewStreet) {
      searchBarRef.current?.setFocus();
    }
  }, [searchNewStreet]);

  return (
    <IonSearchbar
      ref={searchBarRef}
      value={streetSearchTerm}
      onIonInput={handleSearchChange}
    />
  );
}
