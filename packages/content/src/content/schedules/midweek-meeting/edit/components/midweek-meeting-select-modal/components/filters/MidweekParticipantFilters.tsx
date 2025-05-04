import {
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonText,
  IonList,
} from "@ionic/react";
import { MidweekParticipantFilterRanges } from "./components/MidweekParticipantFilterRanges.js";
import { useMidweekAssignmentsFormState } from "../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { SortSelect } from "./components/SortSelect.js";

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
          <SortSelect setSortValue={setSortValue} sortValue={sortValue} />

          <MidweekParticipantFilterRanges filterName="averageWeeksBetweenAssignments" />

          <MidweekParticipantFilterRanges filterName="weeksSinceLastSpecificAssignment" />

          <MidweekParticipantFilterRanges filterName="weeksSinceLastAssignment" />

          <MidweekParticipantFilterRanges filterName="weeksBetweenPreviousAndNextAssignments" />
        </IonList>
      </IonAccordion>
    </IonAccordionGroup>
  );
};
