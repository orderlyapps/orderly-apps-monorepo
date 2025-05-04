import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { IonRow, IonCol } from "@ionic/react";
import { ParticipantType } from "../../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";
import { assignmentData } from "../../../../../hooks/use-midweek-participants-list/helper/get-extra-data/helper/assignmentData.js";

export function LastSpecificAssignment({
  currentAssignment,
  participant,
}: {
  participant: ParticipantType;
  currentAssignment: MidweekAssignments;
}) {
  return (
    <IonRow>
      <IonCol size="8">
        Last {assignmentData[currentAssignment].type || ""} Assignment:
      </IonCol>
      <IonCol>
        {participant.lastSpecificAssignment?.weeksSinceAssignment
          ? participant.lastSpecificAssignment.weeksSinceAssignment
          : "N/A"}
        weeks
      </IonCol>
    </IonRow>
  );
}
