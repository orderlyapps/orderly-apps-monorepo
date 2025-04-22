import { IonLabel } from "@ionic/react";
import { GetAssignmentDataReturnType } from "../helper/types.js";

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
