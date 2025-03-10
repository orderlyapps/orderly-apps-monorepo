import { Map, MapRef } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapLayerMouseEvent, StyleSpecification } from "maplibre-gl";
import { forwardRef, ForwardedRef } from "react";
import light from "./styles/light.json";
import dark from "./styles/dark.json";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export const MapLibre = forwardRef(
  (
    {
      children,
      onClick,
    }: {
      children?: React.ReactNode;
      onClick?: (e: MapLayerMouseEvent) => void;
    },
    ref: ForwardedRef<MapRef>
  ) => {
    const mapView = useStore.use.mapView();
    const setMapView = useStore.use.setMapView();
    const theme = useStore.use.theme();

    return (
      <Map
        initialViewState={mapView}
        onMove={setMapView}
        mapStyle={
          theme === "dark"
            ? (dark as StyleSpecification)
            : (light as StyleSpecification)
        }
        reuseMaps
        attributionControl={false}
        onClick={(event: MapLayerMouseEvent) => {
          onClick?.(event);
        }}
        ref={ref}
        maxZoom={19}
        minZoom={2.65}
      >
        {children}
      </Map>
    );
  }
);
