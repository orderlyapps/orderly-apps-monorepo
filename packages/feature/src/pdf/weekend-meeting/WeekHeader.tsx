import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { StyleSheet, Text } from "@react-pdf/renderer";
import { WeekendMeetingPDFData } from "./WeekendMeetingPDF.js";
import { Row } from "../util/Row.js";
import { JW_BLUE } from "@amodeo/util/colors/jw-colors";

const styles = StyleSheet.create({
  row: {
    fontFamily: "Helvetica-Bold",
    fontSize: 13,
    borderTop: 1,
    borderColor: JW_BLUE,
  },
  date: {
    color: JW_BLUE,
    width: 90,
  },
  theme: {
    paddingRight: 5,
  },
  id: {
    fontSize: 10,
  },
});

export const WeekHeader = ({
  data,
}: {
  data: WeekendMeetingPDFData["data"][number];
}) => {
  return (
    <>
      {data.week_id === "2025-06-09" && (
        <Row style={styles.row}>
          <Text style={styles.date}>{formatWeekDate("2025-06-02")}</Text>
          <Text style={{ ...styles.theme, marginBottom: 50 }}>
            CIRCUIT ASSEMBLY with Branch Representative
          </Text>
        </Row>
      )}
      <Row style={styles.row}>
        <Text style={styles.date}>{formatWeekDate(data.week_id)}</Text>
        <Text style={styles.theme}>{data.outline_theme}</Text>
        <Text style={styles.id}>{data.outline_id}</Text>
      </Row>
    </>
  );
};
