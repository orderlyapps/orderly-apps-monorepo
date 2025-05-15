import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { PublisherDataProvider } from "./components/publisher-data-provider/PublisherDataProvider.js";
import { Name } from "./components/name/Name.js";
import { EditPublisherModal } from "./components/edit-publisher-modal/EditPublisherModal.js";
import { Delete } from "./components/delete/Delete.js";
import { MidweekParticipation } from "./components/midweek-participation/MidweekParticipation.js";
import { ConfirmUpdateAlert } from "./components/confirm-update-alert/ConfirmUpdateAlert.js";

export const PublisherDetails = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  return (
    <PublisherDataProvider>
      <EditPublisherModal modalProps={modalProps} />
      <ConfirmUpdateAlert />
      <Name />
      <MidweekParticipation />
      <Delete />
    </PublisherDataProvider>
  );
};


