import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import { IonButton, IonInput, IonItem, IonLabel, IonList } from "@ionic/react";
import { useAddParticipantForm } from "../../../../hooks/use-add-participant-form.js";

export const AddNewParticipant = ({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) => {
  const { setFirstName, setLastName, addNewParticipant } =
    useAddParticipantForm();

  return (
    <IonList inset>
      <IonItem>
        <IonInput
          label="First Name"
          placeholder="Enter First Name"
          onIonChange={(e) => setFirstName(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonInput
          label="Last Name"
          placeholder="Enter Last Name"
          onIonChange={(e) => setLastName(e.detail.value!)}
        />
      </IonItem>

      <IonButton
        expand="block"
        className="ion-margin-top"
        onClick={() => {
          addNewParticipant();
        }}
      >
        Add
      </IonButton>
    </IonList>
  );
};
