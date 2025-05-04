import { IonRow, IonCol } from "@ionic/react";
import { assignmentData } from "../../../../../hooks/use-midweek-participants-list/helper/get-extra-data/helper/assignmentData.js";
import { ParticipantType } from "../../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";

export function NextAssignments({
  participant,
}: {
  participant: ParticipantType;
}) {
  return (
    <div>
      <IonRow className="ion-margin-top">
        <IonCol>
          <strong>Next Assignments</strong>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          {participant.nextAssignments.map((assignment) => {
            return (
              <IonRow key={assignment.week_id + assignment.assignment}>
                <IonCol size="8">
                  {assignmentData[assignment.assignment].type}:
                </IonCol>
                <IonCol>
                  {`${assignment.weeksUntillAssignment} week`}
                  {assignment.weeksUntillAssignment === 1 ? "" : "s"}
                </IonCol>
              </IonRow>
            );
          })}
        </IonCol>
      </IonRow>
    </div>
  );
}
