import { IonAlert } from "@ionic/react";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";

export const ConfirmUpdateAlert = () => {
  const { isConfirmUpdateAlertOpen, updateState } = usePublisherData();
  const handleUpdate = () => {
    console.log("Update");
    updateState({ isConfirmUpdateAlertOpen: false });
  };

  return (
    <IonAlert
      isOpen={isConfirmUpdateAlertOpen}
      message="Are you sure you want to update?"
      buttons={[
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Update",
          role: "update",
          handler: handleUpdate,
        },
      ]}
    />
  );
};
