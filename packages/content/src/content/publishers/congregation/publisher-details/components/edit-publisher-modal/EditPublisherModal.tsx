import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { useEditPublisherForm } from "../../../hooks/use-edit-publisher-form.js";
import { EditName } from "./components/edit-name/EditName.js";

export const EditPublisherModal = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  const { modalID } = useEditPublisherForm();

  const handleUpdate = async () => {
    return {
      successMessage: "Publisher updated",
      errorMessage: null,
      closeOnSuccess: true,
    };
  };

  return (
    <SelectModal modalProps={modalProps} id={modalID} onSelect={handleUpdate}>
      <EditName />
    </SelectModal>
  );
};
