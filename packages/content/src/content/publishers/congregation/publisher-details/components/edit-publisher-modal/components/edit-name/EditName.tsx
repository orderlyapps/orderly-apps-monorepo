import { IonList, IonItem, IonInput, IonButton } from "@ionic/react";
import { usePublisherData } from "../../../publisher-data-provider/PublisherDataProvider.js";

export const EditName = () => {
  const { first_name, last_name, detailsToEdit, updateState } =
    usePublisherData();

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
          onIonChange={(e) => updateState({ first_name: e.detail.value! })}
        />
      </IonItem>

      <IonItem>
        <IonInput
          label="Last Name"
          placeholder="Enter Last Name"
          value={last_name}
          onIonChange={(e) => updateState({ last_name: e.detail.value! })}
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
