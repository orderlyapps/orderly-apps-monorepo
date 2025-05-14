import { IonButton, IonActionSheet, IonToast } from "@ionic/react";
import { useState } from "react";
import { useDeletePublisherMutation } from "@amodeo/data/react-query/publishers/congregation/use-delete-publisher-mutation";
import { tryCatch } from "@amodeo/util/errors/try-catch";
import { useIonRouter } from "@ionic/react";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";

export const PublisherDelete = () => {
  const [showActionSheet, setShowActionSheet] = useState(false);
  const [toast, setToast] = useState({
    isOpen: false,
    message: "",
  });
  const { id } = usePublisherData();

  const router = useIonRouter();

  const { mutateAsync } = useDeletePublisherMutation();

  const handleDelete = async () => {
    const { data, error } = await tryCatch(mutateAsync({ id }));
    setShowActionSheet(false);
    if (error) {
      setToast({ isOpen: true, message: error.message });
    }

    if (data) {
      setToast({ isOpen: true, message: "Publisher deleted" });
      router.goBack();
    }
  };

  return (
    <>
      <IonButton
        color="danger"
        expand="block"
        className="ion-margin"
        onClick={() => setShowActionSheet(true)}
      >
        Delete Publisher
      </IonButton>
      <IonActionSheet
        isOpen={showActionSheet}
        header="Are you sure you want to delete this publisher?"
        buttons={[
          {
            text: "Delete",
            role: "destructive",
            data: {
              action: "delete",
            },
            handler: handleDelete,
          },
          {
            text: "Cancel",
            role: "cancel",
            data: {
              action: "cancel",
            },
          },
        ]}
        onDidDismiss={() => setShowActionSheet(false)}
      />
      <IonToast
        isOpen={toast.isOpen}
        message={toast.message}
        duration={1500}
        position="top"
        onDidDismiss={() => setToast({ isOpen: false, message: "" })}
      />
    </>
  );
};
