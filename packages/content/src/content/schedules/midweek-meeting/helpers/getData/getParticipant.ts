import { GetAssignmentDataProps } from "../types.js";

export const getAssignmentParticipant = ({
  assignment_id,
  data,
}: GetAssignmentDataProps) => {
  if (!data.participants[assignment_id]) return null;
  const name = `${data.participants[assignment_id].first_name} ${data.participants[assignment_id].last_name}`;
  const first_name = data.participants[assignment_id].first_name;
  return { name, first_name };
};
