import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { MidweekParticipantOptions } from "./components/options/MidweekParticipantOptions.js";
import { MidweekParticipantFilters } from "./components/filters/MidweekParticipantFilters.js";
import { MidweekAssignmentDetails } from "./components/details/MidweekAssignmentDetails.js";
import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";
import { useMidweekAssignmentsFormState } from "./hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { useUpsertMidweekAssignmentMutation } from "@amodeo/data/react-query/midweek-meeting_2/use-upsert-midweek-assignment-mutation";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { tryCatch } from "@amodeo/util/errors/try-catch";

export function MidweekParticipantSelectModal({
  modalProps,
}: {
  modalProps: ModalProps;
}) {
  const { newAssignmentDetails } = useMidweekAssignmentsFormState();
  const { week_id } = useOrderlyPageParams("midweek_meeting_edit");
  const { mutateAsync } = useUpsertMidweekAssignmentMutation();

  const handleSelect = async () => {
    if (newAssignmentDetails) {
      const { error } = await tryCatch(
        mutateAsync({
          week_id,
          ...newAssignmentDetails,
        })
      );

      if (error) {
        return {
          successMessage: null,
          errorMessage: error.message,
          closeOnSuccess: true,
        };
      }

      return {
        successMessage: "Assignment updated",
        errorMessage: null,
        closeOnSuccess: true,
      };
    }

    return {
      successMessage: null,
      errorMessage: "Sorry an error occurred",
      closeOnSuccess: false,
    };
  };
  return (
    <SelectModal
      modalProps={modalProps}
      id="midweek-meeting-assignments"
      onSelect={handleSelect}
    >
      <MidweekAssignmentDetails></MidweekAssignmentDetails>
      <MidweekParticipantFilters></MidweekParticipantFilters>
      <MidweekParticipantOptions></MidweekParticipantOptions>
    </SelectModal>
  );
}
