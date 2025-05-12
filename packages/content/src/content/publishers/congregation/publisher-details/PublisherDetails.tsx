import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { PublisherDataProvider } from "./components/publisher-data-provider/PublisherDataProvider.js";
import { PublisherName } from "./components/publisher-name/PublisherName.js";
import { EditPublisherModal } from "./components/edit-publisher-modal/EditPublisherModal.js";
import { IonItem } from "@ionic/react";
import { PublisherDelete } from "./components/publisher-delete/PublisherDelete.js";

export const PublisherDetails = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  return (
    <PublisherDataProvider>
      <EditPublisherModal modalProps={modalProps} />
      <PublisherName />
      <PublisherDelete />
    </PublisherDataProvider>
  );
};


