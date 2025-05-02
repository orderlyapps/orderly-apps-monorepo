import { IonSearchbar } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { useEffect, useRef } from "react";

export function SuburbSearchBar() {
  const searchBarRef = useRef<HTMLIonSearchbarElement>(null);

  const { suburbSearchTerm, searchNewSuburb } = useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const handleSearchChange = (e: CustomEvent) => {
    const value = e.detail.value || "";
    set("notAtHomes", {
      suburbSearchTerm: value,
      accordionGroupValue: "suburb", // Close accordion
    });
  };

  useEffect(() => {
    if (searchNewSuburb) {
      searchBarRef.current?.setFocus();
    }
  }, [searchNewSuburb]);

  return (
    <IonSearchbar
      ref={searchBarRef}
      value={suburbSearchTerm}
      onIonInput={handleSearchChange}
    />
  );
}
