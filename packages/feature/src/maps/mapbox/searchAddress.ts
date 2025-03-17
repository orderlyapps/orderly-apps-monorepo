import { Database, Tables } from "@amodeo/data/supabase/supabase-types";
import { BBox } from "geojson";
import { MapboxGeocodeResponse } from "./mapbox-types.js";

type QueryType = {
  houseNumber: string;
  street: Omit<
    Database["public"]["Functions"]["insert_street_and_return"]["Returns"][number],
    "id"
  >;
  suburb: Tables<"suburbs_2">;
  bbox?: BBox;
  country?: string;
};

const MAPBOX_API_TOKEN =
  "pk.eyJ1IjoiZGFtaWFuYW1vZGVvIiwiYSI6ImNqeWxnb3lsejA4OXozYmxpajhzMXdvZjQifQ.OJBOK5ZvGEX2VaScbW_zUQ";

export const searchAddress = async ({
  houseNumber,
  street,
  suburb,
}: QueryType) => {
  const centerStr = `${street.longitude},${street.latitude}`;
  const bboxStr = `${suburb.bbox[0]},${suburb.bbox[1]},${suburb.bbox[2]},${suburb.bbox[3]}`;

  const searchParams = new URLSearchParams({
    address_number: houseNumber,
    street: street.street_name,
    locality: suburb.name,
    country: "AU",
    types: "address",
    proximity: centerStr,
    bbox: bboxStr,
    limit: "1",
    access_token: MAPBOX_API_TOKEN,
  }).toString();

  const searchString = `https://api.mapbox.com/search/geocode/v6/forward?${searchParams}`;

  return await fetch(searchString)
    .then((response) => {
      return response.json();
    })
    .then((data: MapboxGeocodeResponse) => {
      return {
        longitude: data.features[0]?.geometry.coordinates[0],
        latitude: data.features[0]?.geometry.coordinates[1],
        accuracy: data.features[0]?.properties.coordinates.accuracy,
        confidence: data.features[0]?.properties.match_code.confidence,
        match_data: data.features[0]?.properties.match_code,
      };
    });
};

export default searchAddress;
