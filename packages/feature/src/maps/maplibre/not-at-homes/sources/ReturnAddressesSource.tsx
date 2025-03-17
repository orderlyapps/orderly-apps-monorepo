import { Source } from "@vis.gl/react-maplibre";
import { FeatureCollection } from "geojson";
import { clusterMaxZoom, clusterRadius } from "../helper/layerStyles.js";
import { Cluster } from "../layers/Cluster.js";
import { ClusterCount } from "../layers/ClusterCount.js";
import { House } from "../layers/House.js";
import { HouseNumber } from "../layers/HouseNumber.js";
import { UnitCount } from "../layers/UnitCount.js";

export const SOURCE_ID = "return-addresses";

export function ReturnAndWriteUnitAddressesSource({ data }: { data: FeatureCollection }) {
  return (
    <Source
      id={SOURCE_ID}
      type="geojson"
      data={data}
      clusterMaxZoom={clusterMaxZoom}
      clusterRadius={clusterRadius}
      cluster={true}
      clusterProperties={{
        not_at_home_count: ["+", ["get", "unit_count"]],
      }}
    >
      <House source={SOURCE_ID} color={"#f80000"} />
      <HouseNumber source={SOURCE_ID} />
      <UnitCount source={SOURCE_ID} />
      <Cluster source={SOURCE_ID} color={"#4a6da7"} />
      <ClusterCount source={SOURCE_ID} />
    </Source>
  );
}
