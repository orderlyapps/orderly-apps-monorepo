import { Database } from "@amodeo/data/supabase/supabase-types";

export const assistant: Record<
  string,
  Database["public"]["Enums"]["midweek_assignment"]
> = {
  school_1_apply_1: "school_1_assistant_1",
  school_2_apply_1: "school_2_assistant_1",
  school_1_apply_2: "school_1_assistant_2",
  school_2_apply_2: "school_2_assistant_2",
  school_1_apply_3: "school_1_assistant_3",
  school_2_apply_3: "school_2_assistant_3",
  school_1_apply_4: "school_1_assistant_4",
  school_2_apply_4: "school_2_assistant_4",
};

export const assignmentData: Record<string, string | null> = {
  school_1_bible_reading: "Bible Reading",
  school_2_bible_reading: "Bible Reading",
  school_1_apply_1: "mwb_ayf_part1_title",
  school_2_apply_1: "mwb_ayf_part1_title",
  school_1_apply_2: "mwb_ayf_part2_title",
  school_2_apply_2: "mwb_ayf_part2_title",
  school_1_apply_3: "mwb_ayf_part3_title",
  school_2_apply_3: "mwb_ayf_part3_title",
  school_1_apply_4: "mwb_ayf_part4_title",
  school_2_apply_4: "mwb_ayf_part4_title",
};
export const assignmentType: Record<string, string | null> = {
  school_1_bible_reading: "Bible Reading",
  school_2_bible_reading: "Bible Reading",
  school_1_apply_1: "mwb_ayf_part1_type",
  school_2_apply_1: "mwb_ayf_part1_type",
  school_1_apply_2: "mwb_ayf_part2_type",
  school_2_apply_2: "mwb_ayf_part2_type",
  school_1_apply_3: "mwb_ayf_part3_type",
  school_2_apply_3: "mwb_ayf_part3_type",
  school_1_apply_4: "mwb_ayf_part4_type",
  school_2_apply_4: "mwb_ayf_part4_type",
};

export const time: Record<string, string | null> = {
  school_1_bible_reading: "4",
  school_2_bible_reading: "4",
  school_1_apply_1: "mwb_ayf_part1_time",
  school_2_apply_1: "mwb_ayf_part1_time",
  school_1_apply_2: "mwb_ayf_part2_time",
  school_2_apply_2: "mwb_ayf_part2_time",
  school_1_apply_3: "mwb_ayf_part3_time",
  school_2_apply_3: "mwb_ayf_part3_time",
  school_1_apply_4: "mwb_ayf_part4_time",
  school_2_apply_4: "mwb_ayf_part4_time",
};

export const material: Record<string, string | null> = {
  school_1_bible_reading: "mwb_tgw_bread",
  school_2_bible_reading: "mwb_tgw_bread",
  school_1_apply_1: "mwb_ayf_part1",
  school_2_apply_1: "mwb_ayf_part1",
  school_1_apply_2: "mwb_ayf_part2",
  school_2_apply_2: "mwb_ayf_part2",
  school_1_apply_3: "mwb_ayf_part3",
  school_2_apply_3: "mwb_ayf_part3",
  school_1_apply_4: "mwb_ayf_part4",
  school_2_apply_4: "mwb_ayf_part4",
};

export const counselor: Record<
  string,
  Database["public"]["Enums"]["midweek_assignment"]
> = {
  "1": "chairman",
  "2": "counselor_2",
};

export const schoolName: Record<string, string> = {
  "1": "Main Hall",
  "2": "Second School",
};
