import { useCongregationsQuery } from "@amodeo/data/react-query/congregations/tables/use-congregations-query";
import { Congregation } from "@amodeo/data/zustand/slices/congregation/use-congregation";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

export function CongregationSelect() {
  const congregations = useCongregationsQuery().data || [];
  const congregation = useStore.use.congregation();
  const setCongregation = useStore.use.setCongregation();

  const handleChange = (ev: any) => setCongregation(ev.target.value);
  
  const compareWith = (o1: Congregation, o2: Congregation) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

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
        compareWith={compareWith}
      >
        {congregations.map((congregation) => (
          <IonSelectOption key={congregation.id} value={congregation}>
            {congregation.name}
          </IonSelectOption>
        ))}
      </IonSelect>
    </IonItem>
  );
}
