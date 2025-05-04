import { IonRow, IonCol } from "@ionic/react";
import { assignmentData } from "../../../../../hooks/use-midweek-participants-list/helper/get-extra-data/helper/assignmentData.js";
import { ParticipantType } from "../../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";

export function CurrentAssignments({
  participant,
}: {
  participant: ParticipantType;
}) {
  return (
    <div>
      <IonRow className="ion-margin-top">
        <IonCol>
          <strong>This Week</strong>
        </IonCol>

        <IonCol>
          <IonRow>
            {participant.currentAssignments.length === 0 && (
              <>
                <IonCol size="8">No Assignments</IonCol>
              </>
            )}

            {participant.currentAssignments.map((assignment, index) => {
              return (
                <IonCol
                  size="8"
                  key={assignment.week_id + assignment.assignment + index}
                >
                  {assignmentData[assignment.assignment].type}
                </IonCol>
              );
            })}
          </IonRow>
        </IonCol>
      </IonRow>
    </div>
  );
}
