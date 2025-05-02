import { IonItem, IonRange } from "@ionic/react";
import { MidweekAssignmentFilters, useMidweekAssignmentsFormState } from "../../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";

export const MidweekParticipantFilterRanges = ({
  filterName,
}: {
  filterName: MidweekAssignmentFilters;
}) => {
  const { filterValues, updateFilter } = useMidweekAssignmentsFormState();

  return (
    <IonItem>
      <IonRange
        labelPlacement="stacked"
        pin
        label={`${filterValues[filterName]} week${filterValues[filterName] === 1 ? "" : "s"} ${filterName} assignments`}
        min={0}
        max={6}
        value={filterValues[filterName]}
        onIonChange={({ detail }) => updateFilter({
          filterName,
          value: detail.value as number,
        })}
        ticks={true}
        snaps={true}
      ></IonRange>
    </IonItem>
  );
};
