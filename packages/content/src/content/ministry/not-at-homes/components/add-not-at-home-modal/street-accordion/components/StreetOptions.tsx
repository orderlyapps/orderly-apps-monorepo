import { IonItem, IonCheckbox } from "@ionic/react";
import { useStreetsQuery } from "@amodeo/data/react-query/not-at-homes/use-streets-query";
import { Database } from "@amodeo/data/supabase/supabase-types";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export function StreetOptions() {
  const { data: streets } = useStreetsQuery();
  const { addStreet, streetSearchTerm, addSuburb } =
    useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const filteredStreets =
    streets?.filter((s) => {
      if (s.suburb_id !== addSuburb?.id) return false;
      if (s.id === addStreet?.id) return true;
      return s.street_name
        .toLowerCase()
        .includes(streetSearchTerm.toLowerCase());
    }) || [];

  const handleStreetSelect = (
    addStreet: Database["public"]["Functions"]["insert_street_and_return"]["Returns"][number]
  ) => {
    set("notAtHomes", {
      addStreet,
      accordionGroupValue: "closed", // Close accordion
    });
  };

  return (
    <>
      {streets &&
        filteredStreets.map((s) => (
          <IonItem key={s.id}>
            <IonCheckbox
              checked={addStreet?.id === s.id}
              onIonChange={() => handleStreetSelect(s)}
            >
              {s.street_name}
            </IonCheckbox>
          </IonItem>
        ))}
    </>
  );
}
