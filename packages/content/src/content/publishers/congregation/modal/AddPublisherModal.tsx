import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { useNewPublisherForm } from "../hooks/use-new-publisher-form.js";

type AddPublisherModalProps = {
  modalProps: ModalProps;
};

export const AddPublisherModal = ({ modalProps }: AddPublisherModalProps) => {
  const { modalID } = useNewPublisherForm();
  const onSelect = async () => {
    return {
      successMessage: "Publisher added",
      errorMessage: null,
      closeOnSuccess: true,
    };
  };
  return (
    <SelectModal modalProps={modalProps} id={modalID} onSelect={onSelect}>
      Add Publisher
    </SelectModal>
  );
};
