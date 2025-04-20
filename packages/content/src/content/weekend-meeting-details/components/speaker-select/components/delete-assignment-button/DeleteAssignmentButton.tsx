import { IonButton } from "@ionic/react";
import { useDeleteSpeakerAssignmentMutation } from "@amodeo/data/react-query/weekend-meeting/mutations/use-delete-speaker-assignment-mutation";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export const DeleteAssignmentButton = () => {
  const { mutate } = useDeleteSpeakerAssignmentMutation();

  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const congregation_id = useStore.getState().congregation.id;

  return (
    <IonButton
      expand="block"
      color="danger"
      onClick={() => mutate({ week_id: week_id!, congregation_id })}
    >
      Clear Speaker
    </IonButton>
  );
};

