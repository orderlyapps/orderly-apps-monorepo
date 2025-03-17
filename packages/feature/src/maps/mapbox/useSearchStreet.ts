import { TablesInsert } from "@amodeo/data/supabase/supabase-types";
import { useEffect, useState } from "react";
import { MapboxFeatures } from "./mapbox-types.js";

const MAPBOX_API_TOKEN =
  "pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ";

export const useSearchStreet = (
  streetQuery: string,
  suburb: TablesInsert<"suburbs_2">,
  {
    bbox,
    country,
    enabled = true,
    minCharacters = 2,
  }: {
    bbox?: [];
    country?: string;
    enabled?: boolean;
    minCharacters?: number;
  } = {}
) => {
  const [features, setFeatures] = useState<MapboxFeatures[] | null>(null);

  // TODO add bbox to street search
  // TODO move api key to .env

  const bboxStr = `${suburb.bbox[0]},${suburb.bbox[1]},${suburb.bbox[2]},${suburb.bbox[3]}`;
  const centerStr = `${suburb.center[0]},${suburb.center[1]}`;

  const searchParams = new URLSearchParams({
    q: streetQuery,
    bbox: bboxStr,
    locality: suburb.name,
    country: "AU",
    types: "street",
    proximity: centerStr,
    access_token: MAPBOX_API_TOKEN,
  }).toString();

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const fetchData = async () => {
      try {
        const searchString = `https://api.mapbox.com/search/geocode/v6/forward?${searchParams}`;
        const response = await fetch(searchString);
        const data = await response.json();
        const features = data.features;
        setFeatures(features);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (streetQuery.length >= minCharacters) {
      fetchData();
    } else {
      setFeatures([]);
    }
  }, [streetQuery, bbox, suburb, country]);

  return features;
};

// export default useSearchStreet;
