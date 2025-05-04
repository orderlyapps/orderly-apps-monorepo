import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";
import { IonLabel } from "@ionic/react";

export const Label = ({
  assignmentData: { label, color },
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  return (
    <IonLabel className="ion-text-nowrap" color={color}>
      <strong>{label}</strong>
    </IonLabel>
  );
};
