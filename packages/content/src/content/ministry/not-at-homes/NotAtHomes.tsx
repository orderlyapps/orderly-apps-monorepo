import { MapLibre } from "@amodeo/feature/maps/maplibre/map-libre/MapLibre";
import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { AddNotAtHomeModal } from "./components/add-not-at-home-modal/AddNotAtHomeModal.js";
import { useNotAtHomesQuery } from "@amodeo/data/react-query/not-at-homes/use-not-at-homes-query";
import { ReturnAndWriteUnitAddressesSource } from "@amodeo/feature/maps/maplibre/not-at-homes/sources/ReturnAddressesSource";
import { notAtHomesToFeatureCollection } from "@amodeo/feature/util/maps/maplibre/not-at-homes/helper/notAtHomesToFeatureCollection";
import { handleMapClick } from "@amodeo/feature/util/maps/maplibre/not-at-homes/helper/handleMapClick";
import { WriteHouseAddressesSource } from "@amodeo/feature/maps/maplibre/not-at-homes/sources/WriteAddressesSource";
import { UpdateNotAtHomeActionSheet } from "./components/update-not-at-homes-action-sheet/UpdateNotAtHomeActionSheet.js";
import { UpdateUnitsModal } from "./components/modify-units-modal/ModifyUnitsModal.js";
import { useDoNotCallQuery } from "@amodeo/data/react-query/not-at-homes/use-do-not-call-query";
import { DNCAddressesSource } from "@amodeo/feature/maps/maplibre/not-at-homes/sources/DNCAddressesSource";

export const NotAtHomes = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { data: notAtHomes } = useNotAtHomesQuery();
  const { data: doNotCall } = useDoNotCallQuery();

  if (!notAtHomes) {
    return null;
  }

  const {
    writeAddresses,
    returnAddresses,
    doNotCallAddresses,
  }: ReturnType<typeof notAtHomesToFeatureCollection> =
    notAtHomesToFeatureCollection(notAtHomes, doNotCall);

  return (
    <MapLibre
      geolocateControl
      onClick={(event, mapRef) => handleMapClick(event, mapRef)}
    >
      <DNCAddressesSource data={doNotCallAddresses} />
      <WriteHouseAddressesSource data={writeAddresses} />
      <ReturnAndWriteUnitAddressesSource data={returnAddresses} />
      <AddNotAtHomeModal modalProps={modalProps}></AddNotAtHomeModal>
      <UpdateNotAtHomeActionSheet />
      <UpdateUnitsModal modalProps={modalProps} />
    </MapLibre>
  );
};
