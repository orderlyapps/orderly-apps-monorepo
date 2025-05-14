import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { PublisherDataProvider } from "./components/publisher-data-provider/PublisherDataProvider.js";
import { Name } from "./components/name/Name.js";
import { EditPublisherModal } from "./components/edit-publisher-modal/EditPublisherModal.js";
import { IonItem } from "@ionic/react";
import { Delete } from "./components/delete/Delete.js";

export const PublisherDetails = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  return (
    <PublisherDataProvider>
      <EditPublisherModal modalProps={modalProps} />
      <Name />
      <Participation />
      <Delete />
    </PublisherDataProvider>
  );
};

export const Participation = () => {
  return <div>Participation</div>;
};
