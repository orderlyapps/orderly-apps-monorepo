import { IonButton } from "@ionic/react";
import { useParticipantsList } from "../../../helper/use-participants-list/useParticipantsList.js";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

export const AssignmentSelectButton = ({
  participant,
  assignmentType,
}: {
  participant: ReturnType<typeof useParticipantsList>["participants"][number];
  assignmentType: "reader" | "chairman";
}) => {
  // const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  // const { updateFilter } = useFilters(assignmentType);
  const handleAssignmentSelectClick =
  useStore.use.handleSelectWeekendAssignmentClick();
  // console.log("🚀 ~ handleAssignmentSelectClick:", handleAssignmentSelectClick)
  return (
    <IonButton
      slot="end"
      onClick={
        () =>
          handleAssignmentSelectClick({
            assignment: assignmentType,
            participant_id: participant.id as string,
          })
        // updateFilter({
        //   selectAlert: true,
        //   assignmentData: {
        //     week_id,
        //     participant_id: participant.id as string,
        //     assignment: assignmentType,
        //   },
        //   alertMessage: `Confirm ${formatName(participant)} as the ${assignmentTypes[assignmentType]} assignment for the week of ${formatWeekDate(week_id)}?`,
        //   mutationType: "upsert",
        // })
      }
    >
      Select
    </IonButton>
  );
};
