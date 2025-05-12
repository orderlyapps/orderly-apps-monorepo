import { useEditPublisherForm } from "#content/publishers/congregation/hooks/use-edit-publisher-form.js";
import { IonList, IonItem, IonText } from "@ionic/react";
import { EditButton } from "@amodeo/ui/util/ionic/edit-button/EditButton";

export const PublisherName = () => {
  const { first_name, last_name, openModal } = useEditPublisherForm();

  return (
    <IonList inset>
      <IonItem>
        <IonText>
          <strong>
            {first_name} {last_name}
          </strong>
        </IonText>

        <EditButton onClick={openModal} />
      </IonItem>
    </IonList>
  );
};
