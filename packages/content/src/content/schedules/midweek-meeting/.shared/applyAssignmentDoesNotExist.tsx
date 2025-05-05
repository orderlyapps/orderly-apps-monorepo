import { AssignmentProps } from "../details/components/assignment/Assignment.js";

export const applyAssignmentDoesNotExist = ({
  assignment_id,
  data,
}: AssignmentProps) => {
  const assignmentString = assignment_id.match(/school_\d_apply_(\d)/)?.[1] || "0";
  const assignmentNumber = parseInt(assignmentString);
  const assignmentsCount = parseInt(data.meeting_data.mwb_ayf_count || "0");
  return assignmentNumber > assignmentsCount;
};
