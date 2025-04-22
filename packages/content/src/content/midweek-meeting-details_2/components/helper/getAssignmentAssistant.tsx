import { GetAssignmentDataProps } from "./types.js";

export const getAssignmentAssistant = ({
  assignment, data: { participants, meeting_data }, applyAssignmentNumber, schoolNumber,
}: GetAssignmentDataProps) => {
  if (assignment === "cbs_conductor") {
    const reader = `${participants["cbs_reader"]?.first_name || ""} ${participants["cbs_reader"]?.last_name || ""}`;

    return { assistantsName: reader, show: true, label: "Reader: " };
  }

  if (assignment.includes("apply")) {
    const meeting_data_key = `mwb_ayf_part${applyAssignmentNumber}_type` as keyof typeof meeting_data;

    const assignmentIsNotTalk = meeting_data[meeting_data_key] !== "Talk";

    const str = `school_${schoolNumber}_assistant_${applyAssignmentNumber}` as keyof typeof participants;

    const assistantsName = `${participants[str]?.first_name || ""} ${participants[str]?.last_name || ""}`;

    return { assistantsName, show: assignmentIsNotTalk, label: "Assistant: " };
  }

  return null;
};
