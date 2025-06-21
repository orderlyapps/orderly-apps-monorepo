import { Tables } from "@amodeo/data/supabase/supabase-types";
import { JW_BROWN } from "@amodeo/util/colors/jw-colors";
import { Text } from "@react-pdf/renderer";
import { Section } from "./Section.js";
import { Row } from "../../util/Row.js";
import { Part } from "./Part.js";
import { Participant } from "./Participant.js";
import { formatName } from "@amodeo/util/formatters/formatName";
import { Time } from "./Time.js";

export function ApplySection({
  data,
  // time,
}: {
  data: Tables<"_view_midweek_meeting_details">;
  time?: (minutes: number) => string;
}) {
  // console.log(time(1))
  const applyStartTime = 31;
  return (
    <>
      <Text
        style={{
          backgroundColor: JW_BROWN,
          color: "white",
          paddingVertical: 3,
          paddingHorizontal: 5,
        }}
      >
        Apply Yourself to the Field Ministry
      </Text>
      <Section>
        <Row style={{ fontFamily: "Helvetica-Bold" }}>
          <Part>
            {data.meeting_data.mwb_ayf_part1_title || ""} (
            {data.meeting_data.mwb_ayf_part1_time || ""} min)
          </Part>
          <Participant>
            {formatName(data.participants.school_1_apply_1 as any)}
          </Participant>
          <Time style={{ fontFamily: "Helvetica" }}>7:{applyStartTime}</Time>
        </Row>
        <Row>
          <Part style={{ paddingHorizontal: 13 }}>
            {data.meeting_data.mwb_ayf_part1 || ""}
          </Part>
          <Participant style={{ color: "grey" }}>
            {formatName(data.participants.school_1_assistant_1 as any)}
          </Participant>
        </Row>
      </Section>

      {parseInt(data.meeting_data.mwb_ayf_count || "") > 1 && (
        <Section>
          <Row style={{ fontFamily: "Helvetica-Bold" }}>
            <Part>
              {data.meeting_data.mwb_ayf_part2_title || ""} (
              {data.meeting_data.mwb_ayf_part2_time || ""} min)
            </Part>
            <Participant>
              {formatName(data.participants.school_1_apply_2 as any)}
            </Participant>
            <Time style={{ fontFamily: "Helvetica" }}>
              7:
              {applyStartTime +
                parseInt(data.meeting_data.mwb_ayf_part1_time || "") +
                1}
            </Time>
          </Row>
          <Row>
            <Part style={{ paddingHorizontal: 13 }}>
              {data.meeting_data.mwb_ayf_part2 || ""}
            </Part>
            <Participant style={{ color: "grey" }}>
              {formatName(data.participants.school_1_assistant_2 as any)}
            </Participant>
          </Row>
        </Section>
      )}

      {parseInt(data.meeting_data.mwb_ayf_count || "") > 2 && (
        <Section>
          <Row style={{ fontFamily: "Helvetica-Bold" }}>
            <Part>
              {data.meeting_data.mwb_ayf_part3_title || ""} (
              {data.meeting_data.mwb_ayf_part3_time || ""} min)
            </Part>
            <Participant>
              {formatName(data.participants.school_1_apply_3 as any)}
            </Participant>
            <Time style={{ fontFamily: "Helvetica" }}>
              7:
              {applyStartTime +
                parseInt(data.meeting_data.mwb_ayf_part1_time || "") +
                parseInt(data.meeting_data.mwb_ayf_part2_time || "") +
                2}
            </Time>
          </Row>
          <Row>
            <Part style={{ paddingHorizontal: 13 }}>
              {data.meeting_data.mwb_ayf_part3 || ""}
            </Part>
            <Participant style={{ color: "grey" }}>
              {formatName(data.participants.school_1_assistant_3 as any)}
            </Participant>
          </Row>
        </Section>
      )}

      {parseInt(data.meeting_data.mwb_ayf_count || "") > 3 && (
        <Section>
          <Row style={{ fontFamily: "Helvetica-Bold" }}>
            <Part>
              {data.meeting_data.mwb_ayf_part4_title || ""} (
              {data.meeting_data.mwb_ayf_part4_time || ""} min)
            </Part>
            <Participant>
              {formatName(data.participants.school_1_apply_4 as any)}
            </Participant>
            <Time style={{ fontFamily: "Helvetica" }}>
              7:
              {applyStartTime +
                parseInt(data.meeting_data.mwb_ayf_part1_time || "") +
                parseInt(data.meeting_data.mwb_ayf_part2_time || "") +
                parseInt(data.meeting_data.mwb_ayf_part3_time || "") +
                3}
            </Time>
          </Row>
          <Row>
            <Part style={{ paddingHorizontal: 13 }}>
              {data.meeting_data.mwb_ayf_part4 || ""}
            </Part>
            <Participant style={{ color: "grey" }}>
              {formatName(data.participants.school_1_assistant_4 as any)}
            </Participant>
          </Row>
        </Section>
      )}
    </>
  );
}
