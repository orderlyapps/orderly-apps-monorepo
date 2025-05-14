import { IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon } from "@ionic/react";
import { trash } from "ionicons/icons";

export const MidweekParticipationItem = ({
  children, searchString, searchQuery,
}: {
  children: React.ReactNode;
  searchString: string;
  searchQuery: string;
}) => {
  if (!searchString.includes(searchQuery)) {
    return null;
  }
  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{children}</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption
          color="danger"
          onClick={() => {
            alert(`delete ${children}`);
          }}
        >
          <IonIcon slot="icon-only" icon={trash}></IonIcon>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
