import { IonButton } from "@ionic/react";
import { useFilters } from "../../../helper/use-filters/useFilters.js";
import { useParticipantsList } from "../../../helper/use-participants-list/useParticipantsList.js";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { formatName } from "@amodeo/util/formatters/formatName";
import { assignmentTypes } from "../../../helper/assignment-types/assignmentTypes.js";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";

export const AssignmentSelectButton = ({
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
      slot="end"
      onClick={() =>
        updateFilter({
          selectAlert: true,
          assignmentData: {
            week_id,
            participant_id: participant.id as string,
            assignment: assignmentType,
          },
          alertMessage: `Confirm ${formatName(participant)} as the ${assignmentTypes[assignmentType]} assignment for the week of ${formatWeekDate(week_id)}?`,
          mutationType: "upsert",
        })
      }
    >
      Select
    </IonButton>
  );
};
