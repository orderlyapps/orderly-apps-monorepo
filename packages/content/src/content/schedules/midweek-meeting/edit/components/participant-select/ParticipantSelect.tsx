import { IonItem, IonLabel, IonText } from "@ionic/react";
import { useMidweekAssignmentsFormState } from "../midweek-meeting-select-modal/hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { AssigmentData } from "#content/schedules/midweek-meeting/details/assignments/helper/getAssignmentData.js";

export function ParticipantSelect({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) {
  const { openSelectParticipantModal } = useMidweekAssignmentsFormState();
  return (
    <IonItem
      onClick={() =>
        openSelectParticipantModal({
          currentAssignment: assignmentData.assignment_id,
          modalTitle: "SelectParticipant",
          assignmentData: assignmentData,
        })
      }
      className="ion-margin-top"
    >
      <IonLabel color={assignmentData.color} className="ion-text-nowrap">
        <strong>{assignmentData.label}</strong>
      </IonLabel>
      <IonText>{assignmentData.participant?.name || "No Participant"}</IonText>
    </IonItem>
  );
}
