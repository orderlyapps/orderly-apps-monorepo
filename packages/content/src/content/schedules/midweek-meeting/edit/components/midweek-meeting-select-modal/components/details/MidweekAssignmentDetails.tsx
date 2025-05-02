import {
  IonList,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
} from "@ionic/react";
import { useMidweekAssignmentsFormState } from "../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { AssignmentDetailsHeader } from "./components/AssignmentDetailsHeader.js";
import { AssignmentDetailsContent } from "./components/AssignmentDetailsContent.js";

export const MidweekAssignmentDetails = () => {
  const { assignmentData } = useMidweekAssignmentsFormState();

  if (!assignmentData) return null;

  return (
    <IonList lines="none">
      <IonAccordionGroup>
        <IonAccordion value="details">
          <IonItem slot="header">
            <AssignmentDetailsHeader assignmentData={assignmentData} />
          </IonItem>

          <IonList slot="content" lines="none">
            <AssignmentDetailsContent assignmentData={assignmentData} />
          </IonList>
        </IonAccordion>
      </IonAccordionGroup>
    </IonList>
  );
};
