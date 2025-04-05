import { IonButton } from "@ionic/react";
import { useFilters } from "../../../helper/use-filters/useFilters.js";
import { useParticipantsList } from "../../../helper/use-participants-list/useParticipantsList.js";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { formatName } from "@amodeo/util/formatters/formatName";
import { assignmentTypes } from "../../../helper/assignment-types/assignmentTypes.js";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";

export const AssignmentDeleteButton = ({
  participant,
  assignmentType,
}: {
  participant: ReturnType<typeof useParticipantsList>["participants"][number];
  assignmentType: "reader" | "chairman";
}) => {
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { updateFilter } = useFilters(assignmentType);
  return (
    <IonButton
      fill="clear"
      slot="start"
      onClick={() =>
        updateFilter({
          selectAlert: true,
          assignmentData: {
            week_id,
            participant_id: participant.id as string,
            assignment: assignmentType,
          },
          alertMessage: `Confirm delete of ${formatName(participant)} as the ${assignmentTypes[assignmentType]} assignment for the week of ${formatWeekDate(week_id)}?`,
          mutationType: "delete",
        })
      }
    >
      Delete
    </IonButton>
  );
};
