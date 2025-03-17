import { Layer } from "@vis.gl/react-maplibre";

export function UnitCount({ source }: { source: string }) {
  return (
    <Layer
      id={source + "-unit-count"}
      type="symbol"
      source={source}
      filter={["has", "units"]}
      layout={{
        "text-field": [
          "case",
          [">", ["get", "unit_count"], 0],
          [
            "concat",
            ["get", "unit_count"],
            ["case", [">", ["get", "unit_count"], 1], " units", " unit"],
          ],
          [
            "concat",
            ["get", "letters"],
            ["case", [">", ["get", "letters"], 1], " units", " unit"],
          ],
        ],
        "text-font": ["Noto Sans Bold"],
        "text-anchor": "center",
        "text-offset": [
          "case",
          ["has", "units"],
          ["literal", [0, 0.7]],
          ["literal", [0, 0]],
        ],
        "text-size": [
          "interpolate",
          ["linear"],
          ["zoom"],
          17,
          0,
          17.1,
          8,
          19,
          34,
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
