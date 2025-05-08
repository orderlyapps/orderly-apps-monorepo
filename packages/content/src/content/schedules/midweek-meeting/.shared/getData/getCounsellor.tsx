import { GetAssignmentDataProps } from "../types.js";

export const getCounsellor = ({
  schoolNumber,
  data,
}: GetAssignmentDataProps) => {
  const name =
    schoolNumber === "1"
      ? `${data.participants.chairman?.first_name} ${data.participants.chairman?.last_name}`
      : data.participants.counselor_2
        ? `${data.participants.counselor_2?.first_name} ${data.participants.counselor_2?.last_name}`
        : "TBC";
  return { name };
};
