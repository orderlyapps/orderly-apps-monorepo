import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { usePublishersQuery } from "@amodeo/data/react-query/publishers/tables/use-publishers-query";
import { useOutlinesQuery } from "@amodeo/data/react-query/weekend-meeting/tables/use-outlines-query";
import { useSpeakerAssignmentsQuery } from "@amodeo/data/react-query/weekend-meeting/tables/use-speaker-assignments-query";
import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { formatName } from "@amodeo/util/formatters/formatName";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { SpeakerOptions } from "./components/speaker-options/SpeakerOptions.js";
import { DeleteAssignmentButton } from "./components/delete-assignment-button/DeleteAssignmentButton.js";
import { usePublicTalkDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-public-talk-details-query";

export const SpeakerSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data } = usePublicTalkDetailsQuery(week_id);

  return (
    <>
      <IonItem onClick={() => setIsOpen(true)}>
        <IonLabel>
          <strong>Speaker:</strong>
        </IonLabel>
        <IonText>{formatName(data?.speaker as any)}</IonText>
      </IonItem>
      <IonModal {...modalProps} isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Select Speaker</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <DeleteAssignmentButton />
          <SpeakerOptions />
        </IonContent>
      </IonModal>
    </>
  );
};
