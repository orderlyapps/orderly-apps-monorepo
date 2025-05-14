import { IonList, IonItem, IonText } from "@ionic/react";
import { EditButton } from "@amodeo/ui/util/ionic/edit-button/EditButton";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";

export const Name = () => {
  const { first_name, last_name, openEditModal } = usePublisherData();

  return (
    <IonList inset>
      <IonItem>
        <IonText>
          <strong>
            {first_name} {last_name}
          </strong>
        </IonText>

        <EditButton onClick={() => openEditModal({ detailsToEdit: "name" })} />
      </IonItem>
    </IonList>
  );
};
