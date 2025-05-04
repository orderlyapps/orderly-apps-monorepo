import { IonRow, IonCol } from "@ionic/react";
import { assignmentData } from "../../../../../hooks/use-midweek-participants-list/helper/get-extra-data/helper/assignmentData.js";
import { ParticipantType } from "../../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";

export function PreviousAssignments({
  participant,
}: {
  participant: ParticipantType;
}) {
  return (
    <div>
      <IonRow className="ion-margin-top">
        <IonCol>
          <strong>Previous Assignments</strong>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          {participant.previousAssignments.map((assignment) => {
            return (
              <IonRow key={assignment.week_id + assignment.assignment}>
                <IonCol size="8">
                  {assignmentData[assignment.assignment].type}:
                </IonCol>
                <IonCol>
                  {`${assignment.weeksSinceAssignment} week`}
                  {assignment.weeksSinceAssignment === 1 ? "" : "s"}
                </IonCol>
              </IonRow>
            );
          })}
        </IonCol>
      </IonRow>
    </div>
  );
}
