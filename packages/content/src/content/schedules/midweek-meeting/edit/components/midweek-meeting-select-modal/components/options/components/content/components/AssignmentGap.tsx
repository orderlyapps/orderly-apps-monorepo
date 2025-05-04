import { IonRow, IonCol } from "@ionic/react";
import { ParticipantType } from "../../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";

export function AssignmentGap({ participant }: { participant: ParticipantType; }) {
  return (
    <>
      {participant.weeksBetweenPreviousAndNextAssignments && (
        <IonRow>
          <IonCol size="8"> Previous to Next Assignment:</IonCol>
          <IonCol>
            {participant.weeksBetweenPreviousAndNextAssignments} weeks
          </IonCol>
        </IonRow>
      )}
    </>
  );
}
