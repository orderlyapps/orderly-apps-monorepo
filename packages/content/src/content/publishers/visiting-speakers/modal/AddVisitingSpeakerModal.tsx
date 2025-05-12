import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { useNewVisitingSpeakerForm } from "../hooks/use-new-visiting-speaker-form.js";

type AddVisitingSpeakerModalProps = {
  modalProps: ModalProps;
};

export const AddVisitingSpeakerModal = ({ modalProps }: AddVisitingSpeakerModalProps) => {
  const { modalID } = useNewVisitingSpeakerForm();
  const onSelect = async () => {
    return {
      successMessage: "Visiting Speaker added",
      errorMessage: null,
      closeOnSuccess: true,
    };
  };
  return (
    <SelectModal modalProps={modalProps} id={modalID} onSelect={onSelect}>
      Add Visiting Speaker
    </SelectModal>
  );
};
