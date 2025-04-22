import { AssignmentProps } from "../Assignment.js";

export const schoolDoesNotExist = ({ assignment, data }: AssignmentProps) => {
  return (
    (assignment.includes("school_2") || assignment === "counselor_2") &&
    !data.participants.counselor_2
  );
};
