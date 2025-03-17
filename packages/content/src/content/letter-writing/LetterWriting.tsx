import { UpdateNotAtHomeActionSheet } from "#content/not-at-homes/components/update-not-at-homes-action-sheet/UpdateNotAtHomeActionSheet.js";
import { useNotAtHomesQuery } from "@amodeo/data/react-query/not-at-homes/use-not-at-homes-query";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
  IonText,
} from "@ionic/react";

type Address = {
  house_number: string;
  unit_number?: string;
};

type StreetData = {
  streetName: string;
  addresses: Address[];
};

type SuburbData = {
  suburbName: string;
  streets: StreetData[];
};

export const LetterWriting = () => {
  const { data: rawData } = useNotAtHomesQuery();
  const set = useStore.use.setStoreProperties();

  const data = rawData?.filter((nah) => nah.returned);

  const organizedData: SuburbData[] = data
    ? Array.from(new Set(data.map((nah) => nah.suburb)))
        .sort()

        .map((suburb) => {
          const suburbRecords = data.filter((nah) => nah.suburb === suburb);
          const streets = Array.from(
            new Set(suburbRecords.map((record) => record.street))
          )
            .sort()
            .map((street) => {
              const streetRecords = suburbRecords.filter(
                (record) => record.street === street
              );
              const addresses = streetRecords
                .map((record) => ({
                  ...record,
                }))
                .sort(
                  (a, b) => Number(a.house_number) - Number(b.house_number)
                );

              return {
                streetName: street,
                addresses,
              };
            });

          return {
            suburbName: suburb,
            streets,
          };
        })
    : [];

  const handleClick = (address: any) => {
    set("notAtHomes", {
      selectedAddress: address,
      isUpdateNotAtHomesActionSheetOpen: true,
    });
  };

  return (
    <>
      {organizedData.length < 1 && (
        <IonText className="full centered">No addresses available</IonText>
      )}
      <IonList inset>
        <IonAccordionGroup>
          {organizedData.map((suburb) => (
            <IonAccordion key={suburb.suburbName}>
              <IonItem slot="header" color="light">
                <IonLabel>{suburb.suburbName}</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                <IonAccordionGroup>
                  {suburb.streets.map((street) => (
                    <IonAccordion key={street.streetName}>
                      <IonItem slot="header">
                        <IonLabel>{street.streetName}</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        <IonList>
                          {street.addresses.map((address) => (
                            <IonItem
                              key={`${address.house_number}-${address.unit_number || ""}`}
                              onClick={() => {
                                handleClick(address);
                              }}
                            >
                              <IonLabel>
                                {address.unit_number
                                  ? `${address.unit_number}/${address.house_number}`
                                  : address.house_number}
                              </IonLabel>
                            </IonItem>
                          ))}
                        </IonList>
                      </div>
                    </IonAccordion>
                  ))}
                </IonAccordionGroup>
              </div>
            </IonAccordion>
          ))}
        </IonAccordionGroup>
      </IonList>
      <UpdateNotAtHomeActionSheet></UpdateNotAtHomeActionSheet>
    </>
  );
};
