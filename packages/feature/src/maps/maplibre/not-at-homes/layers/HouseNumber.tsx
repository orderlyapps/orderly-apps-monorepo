import { Layer } from "@vis.gl/react-maplibre";

export function HouseNumber({ source }: { source: string }) {
  return (
    <Layer
      id={source + "-labels"}
      type="symbol"
      source={source}
      layout={{
        "text-field": ["get", "house_number"],
        "text-font": ["Noto Sans Bold"],
        "text-offset": [
          "case",
          ["has", "units"],
          ["literal", [0, -0.6]],
          ["literal", [0, 0]],
        ],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          16.75,
          0,
          17,
          5,
          22,
          [
            "case",
            [">", ["get", "unit_count"], 0],
            ["+", ["*", ["get", "unit_count"], 6], 90],
            100,
          ],
        ],
        "text-allow-overlap": true,
        "text-ignore-placement": true,
        visibility: "visible",
        "symbol-placement": "point",
        "text-padding": 2,
      }}
      paint={{
        "text-color": "#FFF",
      }}
    />
  );
}
