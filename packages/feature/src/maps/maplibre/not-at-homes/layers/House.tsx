import { Layer } from "@vis.gl/react-maplibre";

const unitSizes = [8, 3, 15, 140] as const;
const houseSizes = [8, 3, 10, 100] as const;

export function House({ source, color }: { source: string; color: string }) {
  return (
    <Layer
      id={source + "-point"}
      type="circle"
      paint={{
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["zoom"],
          12,
          ["case", ["has", "units"], unitSizes[0], houseSizes[0]],
          15,
          ["case", ["has", "units"], unitSizes[1], houseSizes[1]],
          17,
          ["case", ["has", "units"], unitSizes[2], houseSizes[2]],
          22,
          [
            "case",
            ["has", "units"],
            [
              "+",
              [
                "*",
                [
                  "case",
                  [">", ["get", "unit_count"], 1],
                  ["get", "unit_count"],
                  ["get", "letters"],
                ],
                15,
              ],
              unitSizes[3],
            ],
            houseSizes[3],
          ],
        ],

        "circle-color": [
          "case",
          ["has", "units"],
          ["case", [">", ["get", "unit_count"], 0], "#FF8800", "#28af4a"],
          color,
        ],
      }}
      source={source}
    />
  );
}
