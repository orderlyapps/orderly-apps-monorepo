import { IonAlert } from "@ionic/react";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";

export const ConfirmUpdateAlert = () => {

  const { isConfirmUpdateAlertOpen, setState } = usePublisherData();
  const handleUpdate = () => {
    console.log("Update");
    setState((state) => ({ ...state, isConfirmUpdateAlertOpen: false }));
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
