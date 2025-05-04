import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import { IonLabel, IonText } from "@ionic/react";

export function AssignmentDetailsHeader({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) {
  return (
    <IonLabel>
      <IonText color={assignmentData?.color || ""}>
        <strong>
          {assignmentData?.label}
          {assignmentData?.time && ` (${assignmentData.time} min)`}
        </strong>
      </IonText>
    </IonLabel>
  );
}
