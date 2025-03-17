import {
  GeolocateControl,
  Map,
  MapRef,
  ViewStateChangeEvent,
} from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import type { MapLayerMouseEvent, StyleSpecification } from "maplibre-gl";
import { useRef, RefObject } from "react";
import light from "./styles/light.json" with { type: "json" };
import dark from "./styles/dark.json" with { type: "json" };
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export const MapLibre = ({
  children,
  onClick,
  geolocateControl,
}: {
  children?: React.ReactNode;
  onClick?: (e: MapLayerMouseEvent, mapRef: RefObject<MapRef> ) => void;
  geolocateControl?: boolean;
}) => {
  const mapView = useStore.use.mapView();
  const setMapView = useStore.use.setMapView();
  const theme = useStore.use.theme();
  const mapRef = useRef<MapRef>(null);

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
        onClick?.(event, mapRef as RefObject<MapRef>);
      }}
      ref={mapRef}
      maxZoom={19}
      minZoom={2.65}
    >
      {children}
      {geolocateControl && <GeolocateControl position="top-right" />}
    </Map>
  );
};
