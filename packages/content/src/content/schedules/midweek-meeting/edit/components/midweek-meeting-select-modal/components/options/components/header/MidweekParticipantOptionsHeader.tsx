import { IonText } from "@ionic/react";
import { filterValues } from "../../../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { ParticipantType } from "../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";
import { properAssignments } from "../../../../hooks/use-midweek-participants-list/helper/get-extra-data/helper/assignmentData.js";

export function MidweekParticipantOptionsHeader({
  participant,
  sortValue,
}: {
  participant: ParticipantType;
  sortValue: keyof typeof filterValues;
}) {
  const hasAssignment = participant.currentAssignments.some((assignments) => {
    return properAssignments.includes(assignments.assignment);
  });

  return (
    <>
      <IonText
        slot="start"
        color={
          participant.isCurrentAssignee
            ? "primary"
            : hasAssignment
              ? "jw_brown_light"
              : ""
        }
      >
        <strong>
          {participant.first_name} {participant.last_name}
        </strong>
        {participant.averageWeeksBetweenAssignments
          ? ` (avg: ${participant.averageWeeksBetweenAssignments})`
          : ""}
      </IonText>

      <IonText slot="end" className="ion-margin-end">
        <strong>{participant[sortValue]}</strong>
      </IonText>
    </>
  );
}
