import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { MapMouseEvent, MapRef } from "@vis.gl/react-maplibre";
import { GeoJSONSource } from "maplibre-gl";
import { RefObject } from "react";

export const handleMapClick = async (
  event: MapMouseEvent,
  mapRef: RefObject<MapRef>
) => {
  if (!mapRef.current) return;
  const features = mapRef.current.queryRenderedFeatures(event.point);

  if (!features[0]?.properties) return;

  await handleIfCluster(features, mapRef);
  await handleIfHouse(features, mapRef);
  await handleIfUnits(features, mapRef);
};

async function handleIfCluster(features: any, mapRef: RefObject<MapRef>) {
  if (!mapRef.current) return;
  if (features[0].properties?.cluster) {
    const clusterId = features[0].properties.cluster_id;
    const sourceIds = ["return-addresses", "write-addresses"];

    for (const sourceId of sourceIds) {
      const source = mapRef.current.getSource(sourceId) as GeoJSONSource;
      if (!source) continue;

      try {
        const zoom = await source.getClusterExpansionZoom(clusterId);
        mapRef.current.easeTo({
          center: features[0].geometry.coordinates || [0, 0],
          zoom,
          duration: 500,
        });
        break; // Exit loop once we've found and handled the correct source
      } catch (error) {
        // Continue to next source if this one doesn't contain the cluster
        continue;
      }
    }
  }
}

async function handleIfHouse(features: any, mapRef: RefObject<MapRef>) {
  if (!mapRef.current) return;
  if (features[0].properties?.house_number && !features[0].properties?.units) {
    useStore.getState().onHouseMarkerClick(features[0].properties);
  }
}

async function handleIfUnits(features: any, mapRef: RefObject<MapRef>) {
  if (!mapRef.current) return;
  if (features[0].properties?.units) {
    useStore
      .getState()
      .onUnitsMarkerClick(JSON.parse(features[0].properties?.units));
  }
}
