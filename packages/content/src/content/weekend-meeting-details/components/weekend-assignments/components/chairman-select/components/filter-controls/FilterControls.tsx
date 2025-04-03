import {
  IonItem,
  IonLabel,
  IonRange,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { FilterSettings } from "../types/ChairmanSelectTypes.js";

type FilterControlsProps = {
  filters: FilterSettings;
  updateFilter: <K extends keyof FilterSettings>(
    key: K,
    value: FilterSettings[K]
  ) => void;
  setFilters: (filters: FilterSettings) => void;
};

export const FilterControls = ({
  filters,
  updateFilter,
  setFilters,
}: FilterControlsProps) => {
  const compareWith = (o1: any, o2: any) => {
    return o1.type === o2.type && o1.stat === o2.stat;
  };

  return (
    <>
      <IonItem>
        <IonSelect
          placeholder="Select"
          onIonChange={({ detail }) => {
            setFilters({ ...filters, sortValue: detail.value });
          }}
          compareWith={compareWith}
          value={filters.sortValue}
        >
          <IonLabel slot={"label"}>Sort by:</IonLabel>
          <IonSelectOption
            value={{ type: "combined", stat: "averageAssignments" }}
          >
            Average Assignments
          </IonSelectOption>
          <IonSelectOption
            value={{ type: "combined", stat: "previousAssignment" }}
          >
            Last Assignment
          </IonSelectOption>
          <IonSelectOption
            value={{ type: "chairman", stat: "previousAssignment" }}
          >
            Last Chairman Assignment
          </IonSelectOption>
          <IonSelectOption
            value={{
              type: "combined",
              stat: "weeksBetweenPreviousAndNextAssignment",
            }}
          >
            Between Assignments
          </IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonRange
          labelPlacement="stacked"
          pin
          label={`Average Assignments ${filters.averageAssignments} Week${
            filters.averageAssignments > 1 ? "s" : ""
          }`}
          min={0}
          max={6}
          value={filters.averageAssignments}
          onIonChange={({ detail }) =>
            updateFilter("averageAssignments", detail.value as number)
          }
          ticks={true}
          snaps={true}
        ></IonRange>
      </IonItem>
      <IonItem>
        <IonRange
          labelPlacement="stacked"
          pin
          label={`Last Assignment ${filters.lastAssignment} Week${
            filters.lastAssignment > 1 ? "s" : ""
          }`}
          min={0}
          max={6}
          value={filters.lastAssignment}
          onIonChange={({ detail }) =>
            updateFilter("lastAssignment", detail.value as number)
          }
          ticks={true}
          snaps={true}
        ></IonRange>
      </IonItem>
      <IonItem>
        <IonRange
          labelPlacement="stacked"
          pin
          label={`Last Chairman Assignment ${filters.lastChairmanAssignment} Week${
            filters.lastChairmanAssignment > 1 ? "s" : ""
          }`}
          min={0}
          max={6}
          value={filters.lastChairmanAssignment}
          onIonChange={({ detail }) =>
            updateFilter("lastChairmanAssignment", detail.value as number)
          }
          ticks={true}
          snaps={true}
        ></IonRange>
      </IonItem>
      <IonItem>
        <IonRange
          labelPlacement="stacked"
          pin
          label={`Between Assignments ${filters.betweenAssignments} Week${
            filters.betweenAssignments > 1 ? "s" : ""
          }`}
          min={0}
          max={6}
          value={filters.betweenAssignments}
          onIonChange={({ detail }) =>
            updateFilter("betweenAssignments", detail.value as number)
          }
          ticks={true}
          snaps={true}
        ></IonRange>
      </IonItem>
    </>
  );
};
