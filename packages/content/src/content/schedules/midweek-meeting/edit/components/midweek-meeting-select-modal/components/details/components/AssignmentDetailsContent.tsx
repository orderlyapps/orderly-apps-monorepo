import { AssigmentData } from "#content/schedules/midweek-meeting/details/components/helper/getAssignmentData.js";
import { IonItem, IonNote, IonLabel, IonText } from "@ionic/react";

export function AssignmentDetailsContent({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) {
  return (
    <>
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
    </>
  );
}
