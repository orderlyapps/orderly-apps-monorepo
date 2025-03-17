import { Layer } from "@vis.gl/react-maplibre";

export function ClusterCount({ source }: { source: string }) {
  return (
    <Layer
      id={source + "cluster-count"}
      type="symbol"
      source={source}
      filter={["has", "point_count"]}
      paint={{
        "text-color": "#FFF",
      }}
      layout={{
        "text-field": "{point_count_abbreviated}",
        "text-font": ["Noto Sans Bold"],
        "text-anchor": "center",
        "text-size": [
          "interpolate",
          ["linear"],
          ["get", "point_count"],
          3,
          10,
          100,
          66,
        ],
      }}
    />
  );
}
