import { Database } from "@amodeo/data/supabase/supabase-types";

type NotAtHomes =
  Database["public"]["Functions"]["get_not_at_homes_with_coordinates"]["Returns"];
type NotAtHome = {
  units?: any;
} & NotAtHomes[number];

export const notAtHomesToFeatureCollection = (
  notAtHomes: NotAtHomes,
  doNotCall: NotAtHomes
) => {
  const createFeature = ({
    longitude,
    latitude,
    street,
    ...rest
  }: Partial<NotAtHome>) => {
    return {
      type: "Feature" as const,
      geometry: {
        type: "Point" as const,
        coordinates: [longitude, latitude] as [number, number],
      },
      properties: {
        street,
        ...rest,
        unit_count: rest.returned ? 0 : 1,
        letters: rest.returned ? 1 : 0,
      },
    };
  };

  function mergeUnits(
    acc: Record<string, NonNullable<ReturnType<typeof createFeature>>>,
    item: NotAtHome
  ) {
    // Create a unique key for each address
    const addressKey = `${item.house_number}-${item.street}-${item.suburb}-${item.longitude}-${item.latitude}`;

    if (!acc[addressKey]) {
      acc[addressKey] = {
        ...createFeature({
          street: item.street,
          house_number: item.house_number,
          longitude: item.longitude,
          latitude: item.longitude,
          units: [item],
          returned: item.returned,
        }),
        geometry: { coordinates: [item.longitude, item.latitude] },
      } as NonNullable<ReturnType<typeof createFeature>>;
    } else {
      // Add unit number to existing address
      acc[addressKey].properties.units.push(item);
      acc[addressKey].properties.unit_count += item.returned ? 0 : 1;
      acc[addressKey].properties.letters += item.returned ? 1 : 0;
    }
    return acc;
  }

  const returnHousesFeatures = notAtHomes
    .filter((item: any) => !item.returned && !item.unit_number)
    .map(createFeature)
    .filter(
      (
        feature: any
      ): feature is NonNullable<ReturnType<typeof createFeature>> =>
        feature !== null
    );

  const letterHousesFeatures = notAtHomes
    .filter((item: any) => item.returned && !item.unit_number)
    .map(createFeature)
    .filter(
      (
        feature: any
      ): feature is NonNullable<ReturnType<typeof createFeature>> =>
        feature !== null
    );

  const returnUnitsFeatures = Object.values(
    notAtHomes
      .filter((item: any) => item.unit_number)
      .reduce(
        mergeUnits,
        {} as Record<string, NonNullable<ReturnType<typeof createFeature>>>
      )
  );

  const doNotCallAddresses = doNotCall.map(createFeature);

  return {
    returnAddresses: {
      type: "FeatureCollection" as const,
      features: [...returnUnitsFeatures, ...returnHousesFeatures],
    },
    writeAddresses: {
      type: "FeatureCollection" as const,
      features: [...letterHousesFeatures],
    },
    doNotCallAddresses: {
      type: "FeatureCollection" as const,
      features: [...doNotCallAddresses],
    },
  };
};
