import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonList,
  IonRange
} from "@ionic/react";
import { useFilters } from "../../helper/use-filters/useFilters.js";

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
        </IonList>
      </IonAccordion>
    </IonAccordionGroup>
  );
};
