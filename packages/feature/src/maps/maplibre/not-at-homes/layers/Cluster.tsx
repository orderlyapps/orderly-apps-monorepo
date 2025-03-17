import { Layer } from "@vis.gl/react-maplibre";

export function Cluster({ source, color }: { source: string; color: string }) {
  return (
    <Layer
      id={source + "-cluster"}
      type="circle"
      source={source}
      filter={["has", "point_count"]}
      paint={{
        "circle-color": [
          "step",
          ["get", "point_count"],
          color,
          2,
          color,
          5,
          color,
        ],
        "circle-radius": [
          "interpolate",
          ["linear"],
          ["get", "point_count"],
          3,
          10,
          150,
          100,
        ],
      }}
    />
  );
}
