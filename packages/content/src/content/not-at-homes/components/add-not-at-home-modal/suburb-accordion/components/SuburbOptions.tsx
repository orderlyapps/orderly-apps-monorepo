import { IonItem, IonCheckbox } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { useSuburbs_2Query } from "@amodeo/data/react-query/not-at-homes/use-suburbs-2-query";

export function SuburbOptions() {
  const { data: suburbs } = useSuburbs_2Query();
  const { addSuburb, suburbSearchTerm, addStreet } = useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const filteredSuburbs =
    suburbs?.filter((s: Tables<"suburbs_2">) => {
      if (s.id === addSuburb?.id) return true;
      return s.name.toLowerCase().includes(suburbSearchTerm.toLowerCase());
    }) || [];

  const handleSuburbSelect = (newAddSuburb: Tables<"suburbs_2">) => {
    set("notAtHomes", {
      addSuburb: newAddSuburb,
      addStreet: newAddSuburb !== addSuburb ? undefined : addStreet,
      addHouseNumber: "",
      addUnitNumber: "",
      addToLetterList: false,
      accordionGroupValue: "street", // Close accordion
    });
  };

  return (
    <>
      {suburbs &&
        filteredSuburbs.map((s: Tables<"suburbs_2">) => (
          <IonItem key={s.id}>
            <IonCheckbox
              checked={addSuburb?.id === s.id}
              onIonChange={() => handleSuburbSelect(s)}
            >
              {s.name}
            </IonCheckbox>
          </IonItem>
        ))}
    </>
  );
}
