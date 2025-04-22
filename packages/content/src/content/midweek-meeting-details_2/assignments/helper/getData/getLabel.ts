import {
  MidweekAssignments,
  Tables,
} from "@amodeo/data/supabase/supabase-types";
import { GetAssignmentDataProps } from "../types.js";

const extraData = {
  chairman: "Chairman",
  prayer_opening: "Opening Prayer",
  prayer_closing: "Closing Prayer",
  counselor_2: "Counselor",
};

type AssignmentData = {
  [key in MidweekAssignments]?:
    | keyof Tables<"_view_midweek_meeting_details">["meeting_data"]
    | keyof typeof extraData;
};

const labelKeys: AssignmentData = {
  chairman: "chairman",
  prayer_opening: "prayer_opening",
  treasures: "mwb_tgw_talk_title",
  gems: "mwb_tgw_gems_title",
  school_1_bible_reading: "mwb_tgw_bread_title",
  school_1_apply_1: "mwb_ayf_part1_title",
  school_1_apply_2: "mwb_ayf_part2_title",
  school_1_apply_3: "mwb_ayf_part3_title",
  school_1_apply_4: "mwb_ayf_part4_title",
  school_2_bible_reading: "mwb_tgw_bread_title",
  school_2_apply_1: "mwb_ayf_part1_title",
  school_2_apply_2: "mwb_ayf_part2_title",
  school_2_apply_3: "mwb_ayf_part3_title",
  school_2_apply_4: "mwb_ayf_part4_title",
  living_1: "mwb_lc_part1_title",
  living_2: "mwb_lc_part2_title",
  cbs_conductor: "mwb_lc_cbs_title",
  prayer_closing: "prayer_closing",
  counselor_2: "counselor_2",
};

export const getAssignmentLabel = ({
  assignment,
  data,
}: GetAssignmentDataProps) => {
  const extended_meeting_data = { ...data.meeting_data, ...extraData };
  const label =
    (labelKeys[assignment] && extended_meeting_data[labelKeys[assignment]]) ||
    null;
  return label;
};
