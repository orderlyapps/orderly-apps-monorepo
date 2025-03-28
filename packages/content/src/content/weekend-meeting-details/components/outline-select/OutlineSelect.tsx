import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useOutlinesQuery } from "@amodeo/data/react-query/weekend-meeting/tables/use-outlines-query";
import { useSpeakerAssignmentsQuery } from "@amodeo/data/react-query/weekend-meeting/tables/use-speaker-assignments-query";
import { usePublicTalkDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-public-talk-details-query";
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
import { useSpeakerDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-speaker-details-query";

export const OutlineSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data: publicTalkDetails } = usePublicTalkDetailsQuery(week_id);
  const { data: speaker } = useSpeakerDetailsQuery(
    publicTalkDetails?.speaker?.id ?? ""
  );
  return (
    <>
      <IonItem onClick={() => setIsOpen(true)}>
        <IonLabel>
          <strong>Outline:</strong>
        </IonLabel>
        <IonText>{publicTalkDetails?.outline?.theme}</IonText>
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
          {speaker?.outlines?.map((outline) => (
            <IonItem key={outline.id} onClick={() => setIsOpen(false)}>
              <IonLabel>
                {outline.id} {outline.theme}
              </IonLabel>
            </IonItem>
          ))}
        </IonContent>
      </IonModal>
    </>
  );
};
