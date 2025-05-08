import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import { IonButton, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";

export const AddNewParticipant = ({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) => {
  return (
    <IonList inset>
      <IonItem>
        <IonInput label="First Name" placeholder="Enter First Name"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput label="Last Name" placeholder="Enter Last Name"></IonInput>
      </IonItem>
      <IonButton expand="block" className="ion-margin-top">Add</IonButton>
    </IonList>
  );
};
