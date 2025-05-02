import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { IonGrid, IonRow, IonCol, IonButton } from "@ionic/react";
import { assignmentData } from "../../../hooks/use-midweek-participants-list/helper/get-extra-data/helper/assignmentData.js";
import { ParticipantType } from "../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";
import { useMidweekAssignmentsFormState } from "../../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";

export function MidweekParticipantOptionsContent({
  participant,
  currentAssignment,
}: {
  participant: ParticipantType;
  currentAssignment: MidweekAssignments;
}) {
  const { onSelectParticipant } = useMidweekAssignmentsFormState();
  return (
    <IonGrid>
      <IonRow>
        <IonCol size="8">Average Assignments:</IonCol>
        <IonCol>
          {participant.averageAssignments
            ? participant.averageAssignments
            : "N/A"}{" "}
          {participant.averageAssignments === 1 ? "week" : "weeks"}
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="8">
          Last {assignmentData[currentAssignment]?.type || ""} Assignment:
        </IonCol>
        <IonCol>
          {participant.lastSpecificAssignment?.weeksSinceAssignment
            ? participant.lastSpecificAssignment.weeksSinceAssignment
            : "N/A"}{" "}
          weeks
        </IonCol>
      </IonRow>

      {participant.weeksBetweenPreviousAndNextAssignments && (
        <>
          <IonRow>
            <IonCol size="8"> Previous to Next Assignment:</IonCol>
            <IonCol>
              {participant.weeksBetweenPreviousAndNextAssignments} weeks
            </IonCol>
          </IonRow>
        </>
      )}

      <IonRow className="ion-margin-top">
        <IonCol>
          <strong>Previous Assignments</strong>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          {participant.pastAssignments.map((assignment) => {
            return (
              <IonRow>
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

      <IonRow>
        <IonCol>
          <IonButton
            onClick={() =>
              onSelectParticipant({
                alertMessage: "Please confirm your selection",
                newAssignmentDetails: {
                  participant_id: participant.id || "",
                  assignment: currentAssignment,
                },
              })
            }
          >
            Select
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
