import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { IonRow, IonCol, IonButton } from "@ionic/react";
import { useMidweekAssignmentsFormState } from "../../../../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { ParticipantType } from "../../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";

export function SelectParticipant({
  currentAssignment,
  participant,
}: {
  participant: ParticipantType;
  currentAssignment: MidweekAssignments;
}) {
  const { onSelectParticipant } = useMidweekAssignmentsFormState();
  return (
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
  );
}
