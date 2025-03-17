import { Tables } from "@amodeo/data/supabase/supabase-types";
import { JW_RED } from "@amodeo/util/colors/jw-colors";
import { formatName } from "@amodeo/util/formatters/formatName";
import { Text } from "@react-pdf/renderer";
import { Row } from "../../util/Row.js";
import { Part } from "./Part.js";
import { Participant } from "./Participant.js";
import { Section } from "./Section.js";
import { Time } from "./Time.js";

export function LivingSection({
  data,
  time,
  setTime,
}: {
  data: Tables<"_view_midweek_meeting_schedule">;
  time: (minutes: number) => string;
  setTime: (minutes: number) => string;
}) {
  return (
    <>
      <Text
        style={{
          backgroundColor: JW_RED,
          color: "white",
          paddingVertical: 3,
          paddingHorizontal: 5,
        }}
      >
        Living as Christians
      </Text>
      <Text style={{ paddingVertical: 4, paddingLeft: 13 }}>
        Song {data.midweek_meeting_data.mwb_song_middle}
      </Text>
      <Section>
        <Row>
          <Part>
            {data.midweek_meeting_data.mwb_lc_part1_title || ""} (
            {data.midweek_meeting_data.mwb_lc_part1_time || ""} min)
          </Part>
          <Participant>
            {formatName(data.midweek_assignments.living_1)}
          </Participant>
          <Time>{setTime(52)}</Time>
        </Row>
      </Section>

      {parseInt(data.midweek_meeting_data.mwb_lc_count || "") > 1 && (
        <Section>
          <Row>
            <Part>
              {data.midweek_meeting_data.mwb_lc_part2_title || ""} (
              {data.midweek_meeting_data.mwb_lc_part2_time || ""} min)
            </Part>
            <Participant>
              {formatName(data.midweek_assignments.living_2)}
            </Participant>
            <Time>
              {time(
                parseInt(data.midweek_meeting_data.mwb_lc_part1_time || "")
              )}
            </Time>
          </Row>
        </Section>
      )}
      <Section>
        <Row>
          <Part>
            {data.midweek_meeting_data.mwb_lc_cbs_title || ""} (30 min)
          </Part>
          <Participant>
            {formatName(data.midweek_assignments.cbs_conductor)}
          </Participant>
          <Time>{setTime(67)}</Time>
        </Row>
        <Row>
          <Part style={{ textAlign: "right", color: "grey" }}>Reader:</Part>
          <Participant style={{ color: "grey" }}>
            {formatName(data.midweek_assignments.cbs_reader)}
          </Participant>
        </Row>
      </Section>
    </>
  );
}
