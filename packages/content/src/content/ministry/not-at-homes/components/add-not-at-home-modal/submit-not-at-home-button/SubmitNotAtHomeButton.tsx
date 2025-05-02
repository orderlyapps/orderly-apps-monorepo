import { IonButton } from "@ionic/react";
import { useInsertNotAtHomeMutation } from "@amodeo/data/react-query/not-at-homes/use-insert-not-at-home-mutation";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import searchAddress from "@amodeo/feature/util/maps/mapbox/searchAddress";
import { useMap } from "@amodeo/feature/util/maps/maplibre/map-libre/useMap";

interface SubmitButtonProps {
  dismissModal: () => void;
}

export const SubmitNotAtHomeButton = ({ dismissModal }: SubmitButtonProps) => {
  const {
    addSuburb,
    addStreet,
    addHouseNumber,
    addUnitNumber,
    addToLetterList,
  } = useStore.use.notAtHomes();
  const set = useStore.use.setStoreProperties();
  const { current: map } = useMap();

  const { mutate } = useInsertNotAtHomeMutation();

  const handleSubmit = async () => {
    dismissModal();
    const address = await searchAddress({
      suburb: addSuburb as any,
      street: addStreet as any,
      houseNumber: addHouseNumber,
    });

    mutate({
      unit_number: addUnitNumber,
      house_number: addHouseNumber,
      location: [address.longitude, address.latitude],
      returned: addToLetterList,
      suburb: addSuburb?.name as string,
      street: addStreet?.street_name as string,
      written: false,
      accuracy: address.accuracy as string,
      confidence: address.confidence as string,
      match_data: address.match_data as any,
      created_by: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
      congregation_id: "a42cc43a-562f-4ed4-ac74-73dfdb42aaa5",
    } as any);

    set("notAtHomes", {
      addHouseNumber: addUnitNumber === "" ? "" : addHouseNumber,
      addUnitNumber: "",
      addToLetterList: false,
    });

    map?.flyTo({
      center: [address.longitude, address.latitude] as any,
      zoom: 18,
    });
  };

  return (
    <IonButton
      onClick={handleSubmit}
      expand="block"
      className="ion-padding"
      disabled={addHouseNumber === ""}
    >
      Submit
    </IonButton>
  );
};
