import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";
import { Text, StyleSheet } from "@react-pdf/renderer";
import { Row } from "../../../../util/Row.js";

const styles = StyleSheet.create({
  row: { gap: 5, paddingLeft: 13 },
  part: {
    width: 135,
    color: "grey",
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
  },
  participant: { width: 130 },
  assistant: { color: "grey" },
});

export function SchoolParts({
  details,
  school,
}: {
  details: Tables<"_view_midweek_meeting_schedule">;
  school: 1 | 2;
}) {
  return (
    <>
      <Row style={styles.row}>
        {school === 1 && <Text style={styles.part}>Bible Reading </Text>}
        <Text style={styles.participant}>
          {formatName(
            details.midweek_assignments[`school_${school}_bible_reading`],
            {
              format: "first last",
            }
          )}
        </Text>
      </Row>

      <Row style={styles.row}>
        {school === 1 && (
          <Text style={styles.part}>
            {details.midweek_meeting_data.mwb_ayf_part1_type}
          </Text>
        )}
        <Text style={styles.participant}>
          {formatName(details.midweek_assignments[`school_${school}_apply_1`], {
            format: "first last",
          })}
        </Text>
        {/* {details.midweek_meeting_data.mwb_ayf_part1_type !== "Talk" && (
          <Text style={styles.assistant}>
            (
            {formatName(
              details.midweek_assignments[`school_${school}_assistant_1`],
              {
                format: "first last",
              }
            )}
            )
          </Text>
        )} */}
      </Row>

      {parseInt(details.midweek_meeting_data.mwb_ayf_count || "") > 1 && (
        <Row style={styles.row}>
          {school === 1 && (
            <Text style={styles.part}>
              {details.midweek_meeting_data.mwb_ayf_part2_type}
            </Text>
          )}
          <Text style={styles.participant}>
            {formatName(
              details.midweek_assignments[`school_${school}_apply_2`],
              {
                format: "first last",
              }
            )}
          </Text>
          {/* {details.midweek_meeting_data.mwb_ayf_part2_type !== "Talk" && (
            <Text style={styles.assistant}>
              (
              {formatName(
                details.midweek_assignments[`school_${school}_assistant_2`],
                {
                  format: "first last",
                }
              )}
              )
            </Text>
          )} */}
        </Row>
      )}

      {parseInt(details.midweek_meeting_data.mwb_ayf_count || "") > 2 && (
        <Row style={styles.row}>
          {school === 1 && (
            <Text style={styles.part}>
              {details.midweek_meeting_data.mwb_ayf_part3_type}
            </Text>
          )}
          <Text style={styles.participant}>
            {formatName(
              details.midweek_assignments[`school_${school}_apply_3`],
              {
                format: "first last",
              }
            )}
          </Text>
          {/* {details.midweek_meeting_data.mwb_ayf_part3_type !== "Talk" && (
            <Text style={styles.assistant}>
              (
              {formatName(
                details.midweek_assignments[`school_${school}_assistant_3`],
                {
                  format: "first last",
                }
              )}
              )
            </Text>
          )} */}
        </Row>
      )}

      {parseInt(details.midweek_meeting_data.mwb_ayf_count || "") > 3 && (
        <Row style={styles.row}>
          {school === 1 && (
            <Text style={styles.part}>
              {details.midweek_meeting_data.mwb_ayf_part4_type}
            </Text>
          )}
          <Text style={styles.participant}>
            {formatName(
              details.midweek_assignments[`school_${school}_apply_4`],
              {
                format: "first last",
              }
            )}
          </Text>
          {/* {details.midweek_meeting_data.mwb_ayf_part4_type !== "Talk" && (
            <Text style={styles.assistant}>
              (
              {formatName(
                details.midweek_assignments[`school_${school}_assistant_4`],
                {
                  format: "first last",
                }
              )}
              )
            </Text>
          )} */}
        </Row>
      )}
    </>
  );
}
