import { GetAssignmentDataProps } from "./types.js";

const fixedTimingParts = {
  treasures: "10",
  gems: "10",
  school_1_bible_reading: "4",
  school_2_bible_reading: "4",
  cbs_conductor: "30",
};

export const getAssignmentTime = ({
  assignment,
  data,
  applyAssignmentNumber,
  livingAssignmentNumber,
}: GetAssignmentDataProps) => {
  const applyTimeData =
    `mwb_ayf_part${applyAssignmentNumber}_time` as keyof typeof data.meeting_data;

  const livingTimeData =
    `mwb_lc_part${livingAssignmentNumber}_time` as keyof typeof data.meeting_data;

  const time =
    data.meeting_data[applyTimeData] ||
    data.meeting_data[livingTimeData] ||
    fixedTimingParts[assignment as keyof typeof fixedTimingParts];
  return time;
};
