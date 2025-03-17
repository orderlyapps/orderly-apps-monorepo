import { useEffect, useState } from "react";
import { MapboxGeocodeResponse, MapboxFeatures } from "./mapbox-types.js";

const MAPBOX_API_TOKEN =
  "pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ";

const MINIMUM_QUERY_LENGTH = 20;

export const useSearchSuburb = (
  suburbQuery: string,
  {
    // country,
    // bbox,
    minCharacters = MINIMUM_QUERY_LENGTH,
    enabled = true,
  }: {
    country?: string;
    bbox?: number[];
    minCharacters?: number;
    enabled?: boolean;
  } = {}
) => {
  const [features, setFeatures] = useState<MapboxFeatures[] | null>(null);

  const bbox2 = [151.38416, -32.8162, 151.8343, -32.27097];
  const bboxStr = `${bbox2[0]},${bbox2[1]},${bbox2[2]},${bbox2[3]}`;

  const searchParams = new URLSearchParams({
    q: suburbQuery,
    bbox: bboxStr,
    country: "AU",
    types: "place",
    proximity: "151.57822,-32.68492",
    access_token: MAPBOX_API_TOKEN,
  }).toString();

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const searchSuburb = async () => {
      try {
        const urlv6 = `https://api.mapbox.com/search/geocode/v6/forward?${searchParams}`;
        const response = await fetch(urlv6);
        const data: MapboxGeocodeResponse = await response.json();
        const features = data.features;

        setFeatures(features);
      } catch (error) {
        console.error(error);
      }
    };

    if (suburbQuery.length >= minCharacters) {
      searchSuburb();
    } else {
      setFeatures(null);
    }
  }, [suburbQuery]);

  return features;
};

export default useSearchSuburb;
