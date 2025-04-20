import { formatStartEndDate } from "@amodeo/util/dateTime/format-start-end-date/formatStartEndDate";
import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { WeekendMeetingPDFData } from "../WeekendMeetingPDF.js";
import { JW_BLUE } from "@amodeo/util/colors/jw-colors";

const styles = StyleSheet.create({
  section: {
    fontSize: 16,
    color: JW_BLUE,
    fontFamily: "Helvetica-Bold",
  },
  outgoing: {
    fontSize: 10,
    color: "grey",
    fontFamily: "Helvetica-Bold",
    textAlign: "right",
  },
});

export const Title = ({ data }: WeekendMeetingPDFData) => (
  <View>
    <Text style={styles.section}>
      WEEKEND MEETING SCHEDULE for{" "}
      {formatStartEndDate(data[0]?.week_id, data[data.length - 1]?.week_id, {
        uppercase: true,
      })}
    </Text>
    <Text style={styles.outgoing}>OUTGOING SPEAKERS</Text>
  </View>
);
