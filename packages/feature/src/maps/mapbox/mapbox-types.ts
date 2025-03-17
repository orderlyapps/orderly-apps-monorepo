// v6 Response
export type MapboxGeocodeResponse = {
  type: "string";
  features: MapboxFeatures[];
  attribution: string;
};

export type MapboxFeatures = {
  id: string;
  type: string;
  geometry: {
    type: string;
    coordinates: [number, number];
    accuracy:
      | "rooftop"
      | "parcel"
      | "point"
      | "interpolated"
      | "approximate"
      | "intersection";
  };
  properties: {
    mapbox_id: string;
    feature_type: string;
    name: string;
    name_preferred: string;
    place_formatted: string;
    full_address: string;
    context: object;
    coordinates: {
      longitude: number;
      latitude: number;
      accuracy: string;
      routable_points?: Record<"name" | "longitude" | "latitude", any>[];
    };
    bbox: [MinLon, MinLat, MaxLon, MaxLat];
    match_code: {
      address_number: MapboxMatch;
      street: MapboxMatch;
      postcode: MapboxMatch;
      place: MapboxMatch;
      region: MapboxMatch;
      locality: MapboxMatch;
      country: MapboxMatch;
      confidence: MapboxConfidence;
    };
  };
};

export type MapboxMatch =
  | "matched"
  | "unmatched"
  | "not_applicable"
  | "inferred"
  | "medium";
export type MapboxConfidence = "exact" | "high" | "medium" | "low";

type MinLon = number;
type MinLat = number;
type MaxLon = number;
type MaxLat = number;
