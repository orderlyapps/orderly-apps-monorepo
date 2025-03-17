import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Row } from "../../util/Row.js";

const styles = StyleSheet.create({
  row: { gap: 5, paddingLeft: 13 },
  part: { width: 135 },
  participant: { width: 130 },
  assistant: { color: "grey" },
});

export function SchoolParts({
  details,
}: {
  details: Tables<"_view_midweek_meeting_schedule">;
}) {
  return (
    <>
      <Row style={styles.row}>
        <Text style={styles.part}>Bible Reading </Text>
        <Text style={styles.participant}>
          {formatName(details.midweek_assignments.school_1_bible_reading, {
            format: "first last",
          })}
        </Text>
      </Row>

      <Row style={styles.row}>
        <Text style={styles.part}>
          {details.midweek_meeting_data.mwb_ayf_part1_type}
        </Text>
        <Text style={styles.participant}>
          {formatName(details.midweek_assignments.school_1_apply_1, {
            format: "first last",
          })}
        </Text>
        {details.midweek_meeting_data.mwb_ayf_part1_type !== "Talk" && (
          <Text style={styles.assistant}>
            (
            {formatName(details.midweek_assignments.school_1_assistant_1, {
              format: "first last",
            })}
            )
          </Text>
        )}
      </Row>

      {parseInt(details.midweek_meeting_data.mwb_ayf_count || "") > 1 && (
        <Row style={styles.row}>
          <Text style={styles.part}>
            {details.midweek_meeting_data.mwb_ayf_part2_type}
          </Text>
          <Text style={styles.participant}>
            {formatName(details.midweek_assignments.school_1_apply_2, {
              format: "first last",
            })}
          </Text>
          {details.midweek_meeting_data.mwb_ayf_part2_type !== "Talk" && (
            <Text style={styles.assistant}>
              (
              {formatName(details.midweek_assignments.school_1_assistant_2, {
                format: "first last",
              })}
              )
            </Text>
          )}
        </Row>
      )}

      {parseInt(details.midweek_meeting_data.mwb_ayf_count || "") > 2 && (
        <Row style={styles.row}>
          <Text style={styles.part}>
            {details.midweek_meeting_data.mwb_ayf_part3_type}
          </Text>
          <Text style={styles.participant}>
            {formatName(details.midweek_assignments.school_1_apply_3, {
              format: "first last",
            })}
          </Text>
          {details.midweek_meeting_data.mwb_ayf_part3_type !== "Talk" && (
            <Text style={styles.assistant}>
              (
              {formatName(details.midweek_assignments.school_1_assistant_3, {
                format: "first last",
              })}
              )
            </Text>
          )}
        </Row>
      )}

      {parseInt(details.midweek_meeting_data.mwb_ayf_count || "") > 3 && (
        <Row style={styles.row}>
          <Text style={styles.part}>
            {details.midweek_meeting_data.mwb_ayf_part4_type}
          </Text>
          <Text style={styles.participant}>
            {formatName(details.midweek_assignments.school_1_apply_4, {
              format: "first last",
            })}
          </Text>
          {details.midweek_meeting_data.mwb_ayf_part4_type !== "Talk" && (
            <Text style={styles.assistant}>
              (
              {formatName(details.midweek_assignments.school_1_assistant_4, {
                format: "first last",
              })}
              )
            </Text>
          )}
        </Row>
      )}
    </>
  );
}
