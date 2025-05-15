import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { EditName } from "./components/edit-name/EditName.js";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";
import { EditMidweekParticipation } from "./components/edit-midweek-participation/EditMidweekParticipation.js";

export const EditPublisherModal = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  const { modalID } = usePublisherData();

  const handleUpdate = async () => {
    return {
      successMessage: "Publisher updated",
      errorMessage: null,
      closeOnSuccess: true,
    };
  };

  return (
    <SelectModal
      modalProps={modalProps}
      modalID={modalID}
      onSelect={handleUpdate}
    >
      <EditName />
      <EditMidweekParticipation />
    </SelectModal>
  );
};


