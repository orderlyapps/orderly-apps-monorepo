import { IonButton } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export const DeleteAssignmentButton = () => {
  const handleClick = useStore.use.handleDeleteSpeakerAssignmentClick();

  return (
    <>
      <IonButton
        expand="block"
        color="danger"
        onClick={handleClick}
        className="ion-margin"
      >
        Delete Assignment
      </IonButton>
    </>
  );
};
