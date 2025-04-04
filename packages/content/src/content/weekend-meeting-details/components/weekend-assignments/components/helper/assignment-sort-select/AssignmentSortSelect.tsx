import { IonItem, IonSelect, IonLabel, IonSelectOption } from "@ionic/react";
import { useFilters } from "../use-filters/useFilters.js";
import { assignmentTypes } from "../assignment-types/assignmentTypes.js";

export const AssignmentSortSelect = ({
  assignmentType,
}: {
  assignmentType: "reader" | "chairman";
}) => {
  const { filters, updateFilter } = useFilters(assignmentType);

  const compareWith = (o1: any, o2: any) => {
    return o1.type === o2.type && o1.stat === o2.stat;
  };

  return (
    <IonItem>
      <IonSelect
        placeholder="Select"
        onIonChange={({ detail }) => {
          updateFilter("sortValue", detail.value);
        }}
        compareWith={compareWith}
        value={filters.sortValue}
        interface="action-sheet"
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
          value={{ type: assignmentType, stat: "previousAssignment" }}
        >
          Last {assignmentTypes[assignmentType]} Assignment
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
  );
};
