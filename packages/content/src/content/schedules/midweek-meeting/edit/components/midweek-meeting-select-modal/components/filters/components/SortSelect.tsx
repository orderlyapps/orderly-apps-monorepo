import { IonItem, IonSelect, IonLabel, IonSelectOption } from "@ionic/react";
import { MidweekAssignmentFilters } from "../../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";

export function SortSelect({
  setSortValue,
  sortValue,
}: {
  setSortValue: (sortValue: MidweekAssignmentFilters) => void;
  sortValue: string;
}) {
  return (
    <IonItem>
      <IonSelect
        placeholder="Select"
        onIonChange={({ detail }) => {
          setSortValue(detail.value);
        }}
        value={sortValue}
        interface="action-sheet"
      >
        <IonLabel slot={"label"}>Sort by:</IonLabel>
        <IonSelectOption value="averageWeeksBetweenAssignments">
          Average Assignments
        </IonSelectOption>
        <IonSelectOption value="weeksSinceLastSpecificAssignment">
          Specific Assignment
        </IonSelectOption>
        <IonSelectOption value="weeksSinceLastAssignment">
          Last Assignment
        </IonSelectOption>
        <IonSelectOption value="weeksBetweenPreviousAndNextAssignments">
          Between Assignments
        </IonSelectOption>
      </IonSelect>
    </IonItem>
  );
}
