import { useCongregationsQuery } from "@amodeo/data/react-query/congregations/tables/use-congregations-query";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

export function CongregationSelect() {
  const congregations = useCongregationsQuery().data || [];
  const congregation = useStore.use.congregation_id();
  const setCongregation = useStore.use.setCongregation();

  const handleChange = (ev: any) => setCongregation(ev.target.value);

  return (
    <IonItem>
      <IonLabel>
        <strong>Congregation:</strong>
      </IonLabel>
      <IonSelect
        aria-label="Congregation"
        interface="popover"
        placeholder="Select congregation"
        slot="end"
        value={congregation}
        onIonChange={handleChange}
      >
        {congregations.map((congregation) => (
          <IonSelectOption key={congregation.id} value={congregation.id}>
            {congregation.name}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
}
