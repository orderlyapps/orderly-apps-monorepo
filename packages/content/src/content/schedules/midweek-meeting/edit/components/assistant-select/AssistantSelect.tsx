import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { IonItem, IonLabel, IonText } from "@ionic/react";
import { useMidweekAssignmentsFormState } from "../midweek-meeting-select-modal/hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";

export function AssistantSelect({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) {
  const { openSelectParticipantModal } = useMidweekAssignmentsFormState();
  return (
    <>
      {assignmentData.assistant?.show && (
        <>
          <IonItem
            onClick={() =>
              openSelectParticipantModal({
                currentAssignment: assignmentData.assistant
                  ?.assignment_id as MidweekAssignments,
                modalTitle: "Modal Data",
                assignmentData,
              })
            }
          >
            <IonLabel>
              <strong>{assignmentData.assistant?.label}</strong>
            </IonLabel>
            <IonText>
              {assignmentData.assistant?.assistantsName || "No Assistant"}
            </IonText>
          </IonItem>
        </>
      )}
    </>
  );
}
