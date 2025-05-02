import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
  IonRange,
} from "@ionic/react";
import { useFilters } from "../../helper/use-filters/useFilters.js";
import { assignmentTypes } from "../../helper/assignment-types/assignmentTypes.js";

export const AssignmentFilters = ({
  assignmentType,
}: {
  assignmentType: "reader" | "chairman";
}) => {
  const { filters, updateFilter } = useFilters(assignmentType);
  return (
    <IonAccordionGroup>
      <IonAccordion>
        <IonItem slot="header">
          <IonLabel>
            <strong>Filters</strong>
          </IonLabel>
        </IonItem>
        <IonList slot="content">
          <IonItem>
            <IonRange
              labelPlacement="stacked"
              pin
              label={`${filters.averageAssignments} week${
                filters.averageAssignments === 1 ? "" : "s"
              } average assignments`}
              min={0}
              max={6}
              value={filters.averageAssignments}
              onIonChange={({ detail }) =>
                updateFilter({
                  averageAssignments: detail.value as number,
                })
              }
              ticks={true}
              snaps={true}
            ></IonRange>
          </IonItem>
          <IonItem>
            <IonRange
              labelPlacement="stacked"
              pin
              label={`${filters.lastAssignment} week${
                filters.lastAssignment === 1 ? "" : "s"
              } since last assignment`}
              min={0}
              max={6}
              value={filters.lastAssignment}
              onIonChange={({ detail }) =>
                updateFilter({
                  lastAssignment: detail.value as number,
                })
              }
              ticks={true}
              snaps={true}
            ></IonRange>
          </IonItem>
          <IonItem>
            <IonRange
              labelPlacement="stacked"
              pin
              label={`${filters.lastChairmanAssignment} week${
                filters.lastChairmanAssignment === 1 ? "" : "s"
              } since last ${assignmentTypes[assignmentType]} assignment`}
              min={0}
              max={6}
              value={filters.lastChairmanAssignment}
              onIonChange={({ detail }) =>
                updateFilter({
                  lastChairmanAssignment: detail.value as number,
                })
              }
              ticks={true}
              snaps={true}
            ></IonRange>
          </IonItem>
          <IonItem>
            <IonRange
              labelPlacement="stacked"
              pin
              label={`${filters.betweenAssignments} week${
                filters.betweenAssignments === 1 ? "s" : ""
              } between assignments`}
              min={0}
              max={6}
              value={filters.betweenAssignments}
              onIonChange={({ detail }) =>
                updateFilter({
                  betweenAssignments: detail.value as number,
                })
              }
              ticks={true}
              snaps={true}
            ></IonRange>
          </IonItem>
        </IonList>
      </IonAccordion>
    </IonAccordionGroup>
  );
};
