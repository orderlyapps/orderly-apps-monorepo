import { IonButton, IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
import { GetAssignmentDataReturnType } from "../../../helper/types.js";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export const Edit = ({
  assignmentData,
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  const setMidweekMeetingEditModalOpen =
    useStore.use.setMidweekMeetingEditModalOpen();
  return (
    <>
      <IonButton
        fill="clear"
        expand="block"
        color="light"
        onClick={() => setMidweekMeetingEditModalOpen(true)}
      >
        <IonIcon icon={createOutline} slot="icon-only" size="large" />
      </IonButton>
    </>
  );
};
