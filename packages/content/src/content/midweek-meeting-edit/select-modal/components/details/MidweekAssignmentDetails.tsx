import {
  IonList,
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonLabel,
  IonText,
  IonNote,
} from "@ionic/react";
import { useMidweekAssignmentsFormState } from "../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";

export const MidweekAssignmentDetails = () => {
  const { assignmentData } = useMidweekAssignmentsFormState();
  return (
    <IonList lines="none">
      <IonAccordionGroup>
        <IonAccordion value="details">
          <IonItem slot="header">
            <IonLabel>
              <IonText color={assignmentData?.color || ""}>
                <strong>
                  {assignmentData?.label}
                  {assignmentData?.time && ` (${assignmentData.time} min)`}
                </strong>
              </IonText>
            </IonLabel>
          </IonItem>

          <IonList slot="content" lines="none">
            {assignmentData?.details && (
              <IonItem>
                <IonNote>{assignmentData?.details}</IonNote>
              </IonItem>
            )}
            <IonItem className="ion-no-padding ion-no-margin ion-padding-horizontal">
              <IonLabel>
                <strong>Participant:</strong>
              </IonLabel>
              <IonText>{assignmentData?.participant?.name}</IonText>
            </IonItem>
            {assignmentData?.assistant?.show && (
              <>
                <IonItem className="ion-no-padding ion-no-margin ion-padding-horizontal">
                  <IonLabel>
                    <strong>Assistant:</strong>
                  </IonLabel>
                  <IonText>{assignmentData?.assistant?.assistantsName}</IonText>
                </IonItem>
              </>
            )}
          </IonList>
        </IonAccordion>
      </IonAccordionGroup>
    </IonList>
  );
};
