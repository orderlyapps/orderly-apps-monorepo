import { IonAlert } from "@ionic/react";
import { useFilters } from "../../../helper/use-filters/useFilters.js";
import { useUpsertWeekendAssignmentMutation } from "@amodeo/data/react-query/weekend-meeting/mutations/use-upsert-weekend-assignment-mutation";
import { useDeleteWeekendAssignmentMutation } from "@amodeo/data/react-query/weekend-meeting/mutations/use-delete-weekend-assignment-mutation";

export const AssignmentSelectAlert = ({
  assignmentType,
}: {
  assignmentType: "reader" | "chairman";
}) => {
  const {
    filters: { selectAlert, assignmentData, alertMessage, mutationType },
    updateFilter,
  } = useFilters(assignmentType);
  const { mutate: upsertMutate } = useUpsertWeekendAssignmentMutation();
  const { mutate: deleteMutate } = useDeleteWeekendAssignmentMutation();

  const handleConfirm = () => {
    if (mutationType === "upsert") {
      upsertMutate(assignmentData as any);
    }
    if (mutationType === "delete") {
      deleteMutate(assignmentData as any);
    }
    updateFilter({ selectAlert: false });
  };
  return (
    <IonAlert
      isOpen={selectAlert}
      message={alertMessage}
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            updateFilter({ selectAlert: false });
          },
        },
        {
          text: "OK",
          role: "confirm",
          handler: handleConfirm,
        },
      ]}
      onDidDismiss={() => updateFilter({ selectAlert: false })}
    />
  );
};
