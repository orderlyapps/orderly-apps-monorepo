import { IonList, IonItem, IonInput, IonButton } from "@ionic/react";
import { useEditPublisherForm } from "../../hooks/use-edit-publisher-form.js";

export const EditName = () => {
  const { first_name, last_name, setFirstName, setLastName, detailsToEdit } =
    useEditPublisherForm();

  if (detailsToEdit !== "name") {
    return null;
  }

  return (
    <IonList inset>
      <IonItem>
        <IonInput
          label="First Name"
          placeholder="Enter First Name"
          value={first_name}
          onIonChange={(e) => setFirstName(e.detail.value!)}
        />
      </IonItem>

      <IonItem>
        <IonInput
          label="Last Name"
          placeholder="Enter Last Name"
          value={last_name}
          onIonChange={(e) => setLastName(e.detail.value!)}
        />
      </IonItem>

      <IonButton
        expand="block"
        className="ion-margin-top"
        onClick={() => {
          // updatePublisher();
        }}
      >
        Submit
      </IonButton>
    </IonList>
  );
};
