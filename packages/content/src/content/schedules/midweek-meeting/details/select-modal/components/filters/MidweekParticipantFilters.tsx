import {
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonText,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { MidweekParticipantFilterRanges } from "./ranges/MidweekParticipantFilterRanges.js";
import { useMidweekAssignmentsFormState } from "../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";

export const MidweekParticipantFilters = () => {
  const { setSortValue, sortValue } = useMidweekAssignmentsFormState();
  return (
    <IonAccordionGroup>
      <IonAccordion value="filters">
        <IonItem slot="header">
          <IonLabel>
            <IonText color="primary">
              <strong>Filter & Sort</strong>
            </IonText>
          </IonLabel>
        </IonItem>
        <IonList slot="content" lines="none">
          <IonItem>
            <IonSelect
              placeholder="Select"
              onIonChange={({ detail }) => {
                setSortValue(detail.value);
              }}
              // compareWith={compareWith}
              value={sortValue}
              interface="action-sheet"
            >
              <IonLabel slot={"label"}>Sort by:</IonLabel>
              <IonSelectOption value="averageAssignments">
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
          <MidweekParticipantFilterRanges filterName="averageAssignments" />
          <MidweekParticipantFilterRanges filterName="weeksSinceLastSpecificAssignment" />
          <MidweekParticipantFilterRanges filterName="weeksSinceLastAssignment" />
          <MidweekParticipantFilterRanges filterName="weeksBetweenPreviousAndNextAssignments" />
        </IonList>
      </IonAccordion>
    </IonAccordionGroup>
  );
};
