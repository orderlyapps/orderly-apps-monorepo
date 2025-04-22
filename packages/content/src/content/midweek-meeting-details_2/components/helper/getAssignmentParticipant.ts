import { GetAssignmentDataProps } from "./types.js";

export const getAssignmentParticipant = ({
  assignment,
  data,
}: GetAssignmentDataProps) => {
  if (!data.participants[assignment]) return null;
  const name = `${data.participants[assignment].first_name} ${data.participants[assignment].last_name}`;
  const first_name = data.participants[assignment].first_name;
  return { name, first_name };
};
