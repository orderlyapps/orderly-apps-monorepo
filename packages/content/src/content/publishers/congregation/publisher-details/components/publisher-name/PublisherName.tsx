import { IonList, IonItem, IonInput, IonButton } from "@ionic/react";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";
import { useEditPublisherForm } from "../../../hooks/use-edit-publisher-form.js";


export const PublisherName = () => {
  const publisher = usePublisherData();
  const { first_name, last_name, setFirstName, setLastName } = useEditPublisherForm(publisher);

  return (
    <IonList inset>
      <IonItem>
        <IonInput
          label="First Name"
          placeholder="Enter First Name"
          value={first_name}
          onIonChange={(e) => setFirstName(e.detail.value!)} />
      </IonItem>

      <IonItem>
        <IonInput
          label="Last Name"
          placeholder="Enter Last Name"
          value={last_name}
          onIonChange={(e) => setLastName(e.detail.value!)} />
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
