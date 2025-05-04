import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";

export const Participant = ({
  assignmentData: { participant },
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  if (!participant) return null;

  return <div>{participant.name}</div>;
};
