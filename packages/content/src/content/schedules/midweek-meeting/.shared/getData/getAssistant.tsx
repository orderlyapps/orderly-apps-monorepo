import { GetAssignmentDataProps } from "../types.js";

export const getAssignmentAssistant = ({
  assignment_id,
  data: { participants, meeting_data },
  applyAssignmentNumber,
  schoolNumber,
}: GetAssignmentDataProps) => {
  if (assignment_id === "cbs_conductor") {
    const reader = `${participants["cbs_reader"]?.first_name || ""} ${participants["cbs_reader"]?.last_name || ""}`;

    return { assistantsName: reader, show: true, label: "Reader: ", assignment_id: "cbs_reader" };
  }

  if (assignment_id.includes("apply")) {
    const meeting_data_key =
      `mwb_ayf_part${applyAssignmentNumber}_type` as keyof typeof meeting_data;

    const assignmentIsNotTalk = meeting_data[meeting_data_key] !== "Talk";

    const assistant_assignment_id =
      `school_${schoolNumber}_assistant_${applyAssignmentNumber}` as keyof typeof participants;

    const assistantsName = `${participants[assistant_assignment_id]?.first_name || ""} ${participants[assistant_assignment_id]?.last_name || ""}`;

    return {
      assistantsName,
      show: assignmentIsNotTalk,
      label: "Assistant: ",
      assignment_id: assistant_assignment_id,
    };
  }

  return null;
};
