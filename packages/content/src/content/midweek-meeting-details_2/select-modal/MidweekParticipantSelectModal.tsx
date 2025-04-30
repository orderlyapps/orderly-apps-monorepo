import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { MidweekParticipantOptions } from "./components/options/MidweekParticipantOptions.js";
import { MidweekParticipantFilters } from "./components/filters/MidweekParticipantFilters.js";
import { MidweekAssignmentDetails } from "./components/details/MidweekAssignmentDetails.js";
import { SelectModal } from "@amodeo/ui/ionic/select-modal/SelectModal";

export function MidweekParticipantSelectModal({
  modalProps,
}: {
  modalProps: ModalProps;
}) {
  return (
    <SelectModal
      modalProps={modalProps}
      id="midweek-meeting-assignments"
      onSelect={() =>
        new Promise<
          | { successMessage: string; errorMessage: null }
          | { successMessage: null; errorMessage: string }
        >((resolve) => resolve({ successMessage: null, errorMessage: "error" }))
      }
    >
      <MidweekAssignmentDetails></MidweekAssignmentDetails>
      <MidweekParticipantFilters></MidweekParticipantFilters>
      <MidweekParticipantOptions></MidweekParticipantOptions>
    </SelectModal>
  );
}


