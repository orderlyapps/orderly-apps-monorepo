import { AssignmentProps } from "../details/components/Assignment.js";

export const schoolDoesNotExist = ({ assignment_id, data }: AssignmentProps) => {
  return (
    (assignment_id.includes("school_2") || assignment_id === "counselor_2") &&
    !data.participants.counselor_2
  );
};
