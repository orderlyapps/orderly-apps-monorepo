import { GetAssignmentDataProps } from "../types.js";

const detailKeys = {
  treasures: "mwb_tgw_talk",
  gems: "mwb_weekly_bible_reading",
  school_1_bible_reading: "mwb_tgw_bread",
  school_2_bible_reading: "mwb_tgw_bread",
  cbs_conductor: "mwb_lc_cbs",
};

export const getAssignmentDetails = ({
  assignment,
  data,
  applyAssignmentNumber,
  livingAssignmentNumber,
}: GetAssignmentDataProps) => {
  const otherDetails = detailKeys[
    assignment as keyof typeof detailKeys
  ] as keyof typeof data.meeting_data;

  const applyDetails = ("mwb_ayf_part" +
    applyAssignmentNumber) as keyof typeof data.meeting_data;

  const livingDetails = ("mwb_lc_part" +
    livingAssignmentNumber) as keyof typeof data.meeting_data;

  const livingDetailsContent = ("mwb_lc_part" +
    livingAssignmentNumber +
    "_content") as keyof typeof data.meeting_data;

  const details =
    (otherDetails && data.meeting_data[otherDetails]) ||
    (applyDetails && data.meeting_data[applyDetails]) ||
    (data.meeting_data[livingDetails] &&
      `${data.meeting_data[livingDetailsContent] ? `(${data.meeting_data[livingDetailsContent]}) ` : ""}${data.meeting_data[livingDetails]}`) ||
    null;
  return details;
};
