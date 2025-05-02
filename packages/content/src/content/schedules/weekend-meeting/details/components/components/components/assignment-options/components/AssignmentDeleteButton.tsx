import { IonButton } from "@ionic/react";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export const AssignmentDeleteButton = ({
  assignmentType,
}: {
  assignmentType: "reader" | "chairman";
}) => {
  const handleAssignmentDeleteClick =
    useStore.use.handleDeleteWeekendAssignmentClick();
  return (
    <IonButton
      expand="block"
      fill="clear"
      slot="start"
      onClick={() =>
        handleAssignmentDeleteClick({
          assignment: assignmentType,
        })
      }
    >
      Delete Assignment
    </IonButton>
  );
};
