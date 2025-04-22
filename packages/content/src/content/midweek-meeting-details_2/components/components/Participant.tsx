import { GetAssignmentDataReturnType } from "../helper/types.js";

export const Participant = ({
  assignmentData: { participant },
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  if (!participant) return null;

  return <div>{participant.name}</div>;
};
