import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { EditName } from "./components/edit-name/EditName.js";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";
import { EditMidweekParticipation } from "./components/edit-midweek-participation/EditMidweekParticipation.js";
import { useUpdateMidweekParticipationMutation } from "@amodeo/data/react-query/publishers/congregation/use-update-midweek-participation-mutation";
import { tryCatch } from "@amodeo/util/errors/try-catch";

export const EditPublisherModal = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  const { modalID, midweek_participation, id } = usePublisherData();
  const { mutateAsync } = useUpdateMidweekParticipationMutation();

  const handleUpdate = async () => {
    const { data, error } = await tryCatch(
      mutateAsync({
        p_participant_id: id,
        p_assignments: midweek_participation || [],
      })
    );

    if (error) {
      return {
        successMessage: null,
        errorMessage: error?.message || "",
        closeOnSuccess: false,
      };
    }
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

// const sdg =
