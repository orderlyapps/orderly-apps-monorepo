import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import { IonItem, IonLabel } from "@ionic/react";

export const AddExistingParticipant = ({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) => {
  return (
    <IonItem>
      <IonLabel>Add Existing Participant</IonLabel>
    </IonItem>
  );
};
