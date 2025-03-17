import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { IonItem, IonText, IonLabel, IonNote } from "@ionic/react";
import { MapboxFeatures } from "@amodeo/feature/util/maps/mapbox/mapbox-types";
import { useSearchStreet } from "@amodeo/feature/util/maps/mapbox/useSearchStreet";

export function NewStreetOptions() {
  const { streetSearchTerm, searchNewStreet, addSuburb } =
    useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();

  const newStreetOptions = useSearchStreet(
    streetSearchTerm,
    addSuburb as {
      congregation_id: string;
      id?: number | undefined;
      name: string;
      bbox: [number, number, number, number];
      center: [number, number];
    },
    {
      enabled: searchNewStreet,
      minCharacters: 3,
    }
  );

  const handleSelect = (newStreet: MapboxFeatures) => {
    set("notAtHomes", {
      confirmNewStreetAlert: true,
      addStreet: {
        street_name: newStreet.properties.name,
        longitude: newStreet.geometry.coordinates[0],
        latitude: newStreet.geometry.coordinates[1],
        suburb_id: addSuburb?.id as number,
        congregation_id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
      } as any,
      accordionGroupValue: "street", // Keep accordion open
    });
  };

  if (newStreetOptions?.length === 0 && streetSearchTerm.length > 2)
    return (
      <IonItem lines="none">
        <IonText>No results found</IonText>
      </IonItem>
    );

  return (
    <>
      {streetSearchTerm.length < 3 && (
        <IonItem lines="none">
          {streetSearchTerm.length < 1 ? (
            <IonText>Start typing...</IonText>
          ) : streetSearchTerm.length < 3 ? (
            <IonText>Keep typing...</IonText>
          ) : null}
        </IonItem>
      )}

      {newStreetOptions?.map((o: MapboxFeatures) => {
        return (
          <IonItem
            onClick={() => {
              handleSelect(o);
            }}
            key={o.id}
          >
            <IonLabel>
              {o.properties.name}
              <br></br>
              <IonNote>
                {o.properties.full_address.split(", ").slice(1).join(", ")}
              </IonNote>
            </IonLabel>
          </IonItem>
        );
      })}
    </>
  );
}
