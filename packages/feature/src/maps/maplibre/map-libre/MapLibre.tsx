import { Map, MapRef, ViewStateChangeEvent } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapLayerMouseEvent, StyleSpecification } from "maplibre-gl";
import { forwardRef, ForwardedRef } from "react";
import light from "./styles/light.json" with { type: "json" };
import dark from "./styles/dark.json" with { type: "json" };
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
        onMove={(e: ViewStateChangeEvent) => setMapView(e.viewState)}
        mapStyle={
          theme === "dark"
            ? (dark as StyleSpecification)
            : (light as StyleSpecification)
        }
        reuseMaps
        attributionControl={false}
        onClick={(event: MapLayerMouseEvent) => {
          console.log("🚀 ~ event:", event);
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
