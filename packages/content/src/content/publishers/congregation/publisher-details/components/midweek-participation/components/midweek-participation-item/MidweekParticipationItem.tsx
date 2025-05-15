import {
  IonItemSliding,
  IonItem,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from "@ionic/react";
import { trash } from "ionicons/icons";
import { usePublisherData } from "../../../publisher-data-provider/PublisherDataProvider.js";

export const MidweekParticipationItem = ({
  children,
  searchString,
  searchQuery,
}: {
  children: React.ReactNode;
  searchString: string;
  searchQuery: string;
}) => {
  if (!searchString.includes(searchQuery)) {
    return null;
  }

  const { setState } = usePublisherData();

  return (
    <IonItemSliding>
      <IonItem>
        <IonLabel>{children}</IonLabel>
      </IonItem>

      <IonItemOptions side="end">
        <IonItemOption
          color="danger"
          onClick={() => {
            setState((state) => ({ ...state, isConfirmUpdateAlertOpen: true }));
          }}
        >
          <IonIcon slot="icon-only" icon={trash}></IonIcon>
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
