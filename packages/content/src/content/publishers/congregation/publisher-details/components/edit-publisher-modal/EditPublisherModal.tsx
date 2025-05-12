import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";
import { useEditPublisherForm } from "../../../hooks/use-edit-publisher-form.js";

export const EditPublisherModal = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  const publisher = usePublisherData();
  const { modalID } = useEditPublisherForm(publisher);

  const handleUpdate = async () => {
    return {
      successMessage: "Publisher updated",
      errorMessage: null,
      closeOnSuccess: true,
    };
  };

  return (
    <SelectModal modalProps={modalProps} id={modalID} onSelect={handleUpdate}>
      <h1>Edit Publisher</h1>
    </SelectModal>
  );
};
