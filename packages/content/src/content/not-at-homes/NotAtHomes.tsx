import { MapLibre } from "@amodeo/feature/maps/maplibre/map-libre/MapLibre";
import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { AddNotAtHome } from "./components/add-not-at-home/AddNotAtHome.js";

export const NotAtHomes = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  return (
    <MapLibre>
      <AddNotAtHome modalProps={modalProps}></AddNotAtHome>
    </MapLibre>
  );
};
