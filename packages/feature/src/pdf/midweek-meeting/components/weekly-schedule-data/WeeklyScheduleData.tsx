import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { Assignment } from "./components/assignment/Assignment.js";
import { JW_BROWN, JW_RED, JW_SLATE } from "@amodeo/util/colors/jw-colors";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { MidweekMeetingPDFData } from "../../MidweekMeetingPDF.js";
import { formatName } from "@amodeo/util/formatters/formatName";

const SECTION_PADDING = 5;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  dateItem: {
    marginBottom: 5,
  },
});

export const WeeklyScheduleData = ({
  data: { midweek_meeting_data, midweek_assignments },
}: MidweekMeetingPDFData) => {
  if (!midweek_meeting_data || midweek_meeting_data.length === 0) {
    return null;
  }
  const assignment = midweek_meeting_data.map((meeting_data) => {
    const assignments = midweek_assignments.find(
      (a) => a.week_id === meeting_data.mwb_week_date
    );
    return { ...assignments, meeting_data };
  });

  return (
    <View style={styles.container}>
      {assignment.map(({ meeting_data, assignments }) => {
        if (meeting_data.mwb_week_date === "2025-11-03") {
          return (
            <View
              key={meeting_data.mwb_week_date}
              style={styles.dateItem}
              wrap={false}
            >
              <View
                style={{
                  flexDirection: "row",
                  borderTop: "1px solid black",
                  marginTop: 10,
                  paddingTop: 3,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Helvetica-Bold",
                    fontSize: 15,
                    flexGrow: 1,
                  }}
                >
                  {formatWeekDate(meeting_data.mwb_week_date)}
                </Text>
                <Text
                  style={{
                    fontFamily: "Helvetica-Bold",
                    fontSize: 14,
                    marginBottom: 30,
                  }}
                >
                  Circuit Assembly with Branch Representative
                </Text>
              </View>
            </View>
          );
        }

        return (
          <View
            key={meeting_data.mwb_week_date}
            style={styles.dateItem}
            wrap={false}
          >
            <View
              style={{
                flexDirection: "row",
                borderTop: "1px solid black",
                marginTop: 10,
                paddingTop: 3,
              }}
            >
              <Text
                style={{
                  fontFamily: "Helvetica-Bold",
                  fontSize: 15,
                  flexGrow: 1,
                }}
              >
                {formatWeekDate(meeting_data.mwb_week_date)}
              </Text>
              <View
                style={{
                  flexDirection: "row-reverse",
                  width: 300,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    paddingTop: 7,
                  }}
                >
                  {formatName(assignments?.chairman)}
                </Text>
                <Text
                  style={{
                    color: "grey",
                    fontFamily: "Helvetica-Bold",
                    fontSize: 10,
                    paddingTop: 8.4,
                  }}
                >
                  Chairman:{" "}
                </Text>
              </View>
            </View>
            <Assignment
              color={"grey"}
              firstText={"Opening Prayer"}
              thirdText={formatName(assignments?.prayer_opening) || ""}
            />
            <View style={{ height: SECTION_PADDING }}></View>

            <Assignment
              color={JW_SLATE}
              firstText={meeting_data.mwb_tgw_talk_title || ""}
              thirdText={formatName(assignments?.treasures) || ""}
            />
            <Assignment
              color={JW_SLATE}
              firstText={"2. Spiritual Gems"}
              thirdText={formatName(assignments?.gems) || ""}
            />
            {/* School 1 */}
            {!!assignments?.counselor_2 && (
              <>
                <View style={{ height: SECTION_PADDING }}></View>
                <Assignment
                  secondSchool={!!assignments?.counselor_2}
                  color={"grey"}
                  firstText={assignments?.counselor_2 && "Main Hall"}
                  thirdText={""}
                  schoolLabel
                />
              </>
            )}
            <Assignment
              secondSchool={!!assignments?.counselor_2}
              color={JW_SLATE}
              firstText={"3. Bible Reading"}
              assistants
              thirdText={formatName(assignments?.school_1_bible_reading) || ""}
            />
            {!assignments?.counselor_2 && (
              <View style={{ height: SECTION_PADDING }}></View>
            )}
            <Assignment
              secondSchool={!!assignments?.counselor_2}
              color={JW_BROWN}
              firstText={meeting_data.mwb_ayf_part1_title || ""}
              secondText={formatName(assignments?.school_1_assistant_1)}
              thirdText={formatName(assignments?.school_1_apply_1) || ""}
              time={meeting_data.mwb_ayf_part1_time || ""}
            />
            <Assignment
              secondSchool={!!assignments?.counselor_2}
              color={JW_BROWN}
              firstText={meeting_data.mwb_ayf_part2_title || ""}
              secondText={formatName(assignments?.school_1_assistant_2)}
              thirdText={formatName(assignments?.school_1_apply_2) || ""}
              time={meeting_data.mwb_ayf_part2_time || ""}
            />
            <Assignment
              secondSchool={!!assignments?.counselor_2}
              color={JW_BROWN}
              firstText={meeting_data.mwb_ayf_part3_title || ""}
              secondText={formatName(assignments?.school_1_assistant_3)}
              thirdText={formatName(assignments?.school_1_apply_3) || ""}
              time={meeting_data.mwb_ayf_part3_time || ""}
            />
            <Assignment
              secondSchool={!!assignments?.counselor_2}
              color={JW_BROWN}
              firstText={meeting_data.mwb_ayf_part4_title || ""}
              secondText={formatName(assignments?.school_1_assistant_4)}
              thirdText={formatName(assignments?.school_1_apply_4) || ""}
              time={meeting_data.mwb_ayf_part4_time || ""}
            />

            {/* School 2 */}
            {!!assignments?.counselor_2 && (
              <>
                <View style={{ height: SECTION_PADDING }}></View>

                <Assignment
                  secondSchool={!!assignments?.counselor_2}
                  color={"grey"}
                  firstText={assignments?.counselor_2 && "Second School"}
                  counselor
                  thirdText={formatName(assignments?.counselor_2) || ""}
                  schoolLabel
                />
                <Assignment
                  secondSchool={!!assignments?.counselor_2}
                  color={JW_SLATE}
                  firstText={"3. Bible Reading"}
                  // assistants
                  thirdText={
                    formatName(assignments?.school_2_bible_reading) || ""
                  }
                />
                <Assignment
                  secondSchool={!!assignments?.counselor_2}
                  color={JW_BROWN}
                  firstText={meeting_data.mwb_ayf_part1_title || ""}
                  secondText={formatName(assignments?.school_2_assistant_1)}
                  thirdText={formatName(assignments?.school_2_apply_1) || ""}
                  time={meeting_data.mwb_ayf_part1_time || ""}
                />
                <Assignment
                  secondSchool={!!assignments?.counselor_2}
                  color={JW_BROWN}
                  firstText={meeting_data.mwb_ayf_part2_title || ""}
                  secondText={formatName(assignments?.school_2_assistant_2)}
                  thirdText={formatName(assignments?.school_2_apply_2) || ""}
                  time={meeting_data.mwb_ayf_part2_time || ""}
                />
                <Assignment
                  secondSchool={!!assignments?.counselor_2}
                  color={JW_BROWN}
                  firstText={meeting_data.mwb_ayf_part3_title || ""}
                  secondText={formatName(assignments?.school_2_assistant_3)}
                  thirdText={formatName(assignments?.school_2_apply_3) || ""}
                  time={meeting_data.mwb_ayf_part3_time || ""}
                />
                <Assignment
                  secondSchool={!!assignments?.counselor_2}
                  color={JW_BROWN}
                  firstText={meeting_data.mwb_ayf_part4_title || ""}
                  secondText={formatName(assignments?.school_2_assistant_4)}
                  thirdText={formatName(assignments?.school_2_apply_4) || ""}
                  time={meeting_data.mwb_ayf_part4_time || ""}
                />
              </>
            )}

            {/* Living */}
            <View style={{ height: SECTION_PADDING }}></View>

            <Assignment
              color={JW_RED}
              firstText={meeting_data.mwb_lc_part1_title || ""}
              thirdText={formatName(assignments?.living_1) || ""}
              time={meeting_data.mwb_lc_part1_time || ""}
            />
            <Assignment
              color={JW_RED}
              firstText={meeting_data.mwb_lc_part2_title || ""}
              thirdText={formatName(assignments?.living_2) || ""}
              time={meeting_data.mwb_lc_part2_time || ""}
            />
            <Assignment
              color={JW_RED}
              firstText={meeting_data.mwb_lc_cbs_title || ""}
              secondText={formatName(assignments?.cbs_reader)}
              reader
              thirdText={formatName(assignments?.cbs_conductor) || ""}
            />
            <View style={{ height: SECTION_PADDING }}></View>

            <Assignment
              color={"grey"}
              firstText={"Closing Prayer"}
              thirdText={formatName(assignments?.prayer_closing) || ""}
            />
          </View>
        );
      })}
    </View>
  );
};
