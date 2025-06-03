import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { PublisherDataProvider } from "./components/publisher-data-provider/PublisherDataProvider.js";
import { Name } from "./components/details/name/Name.js";
import { EditPublisherModal } from "./components/edit-publisher-modal/EditPublisherModal.js";
import { Delete } from "./components/delete/Delete.js";
import { MidweekParticipation } from "./components/details/midweek-participation/MidweekParticipation.js";
import { useSettings } from "#shells/orderly/pages/settings/settings/SettingsPage.js";

export const PublisherDetails = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  const { canEdit } = useSettings();

  return (
    <PublisherDataProvider>
      {canEdit && (
        <>
          <EditPublisherModal modalProps={modalProps} />
        </>
      )}
      <Name />
      <MidweekParticipation />
      {canEdit && (
        <>
          <Delete />
        </>
      )}
    </PublisherDataProvider>
  );
};
