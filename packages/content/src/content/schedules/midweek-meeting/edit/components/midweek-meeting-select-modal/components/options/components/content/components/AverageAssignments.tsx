import { IonRow, IonCol } from "@ionic/react";
import { ParticipantType } from "../../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";

export function AverageAssignments({ participant }: { participant: ParticipantType; }) {
  return (
    <IonRow>
      <IonCol size="8">Average Assignments:</IonCol>
      <IonCol>
        {participant.averageWeeksBetweenAssignments
          ? participant.averageWeeksBetweenAssignments
          : "N/A"}{" "}
        {participant.averageWeeksBetweenAssignments === 1 ? "week" : "weeks"}
      </IonCol>
    </IonRow>
  );
}
