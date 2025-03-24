import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useOutlinesQuery } from "@amodeo/data/react-query/weekend-meeting/tables/use-outlines-query";
import { useSpeakerAssignmentsQuery } from "@amodeo/data/react-query/weekend-meeting/tables/use-speaker-assignments-query";
import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonText,
  IonModal,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";

export const OutlineSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data: speakerAssignments } = useSpeakerAssignmentsQuery(
    { startDate: week_id, endDate: week_id },
    { enabled: !!week_id }
  );
  const { data: outlines } = useOutlinesQuery(!!speakerAssignments);

  const outline = outlines?.find(
    (o) => o.id === speakerAssignments?.[0]?.outline_id
  );

  return (
    <>
      <IonItem onClick={() => setIsOpen(true)}>
        <IonLabel>
          <strong>Outline:</strong>
        </IonLabel>
        <IonText>{outline?.theme}</IonText>
      </IonItem>
      <IonModal {...modalProps} isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>OutlineSelect</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="full centered">This is a Modal</div>
        </IonContent>
      </IonModal>
    </>
  );
};
