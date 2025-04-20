import { StyleSheet, Text, View } from "@react-pdf/renderer";
import { WeekendMeetingPDFData } from "./WeekendMeetingPDF.js";
import { WeekHeader } from "./WeekHeader.js";
import { Assignment } from "./Assignments.js";
import { Row } from "../util/Row.js";
import { Column } from "../util/Column.js";
import { OutgoingSpeakers } from "./OutgoingSpeakers.js";

const styles = StyleSheet.create({
  section: { flexGrow: 1 },
  weekSection: { marginBottom: 10 },
});

export const Schedule = ({ data }: WeekendMeetingPDFData) => (
  <View>
    {data &&
      data.map((item: WeekendMeetingPDFData["data"][number]) => {
        return (
          <View key={item.week_id} style={styles.weekSection}>
            <WeekHeader key={item.week_id} data={item} />
            <Row>
              <Column style={styles.section}>
                <Assignment
                  label="Speaker"
                  name={item.speaker_first_name + " " + item.speaker_last_name}
                />
                <Assignment
                  label="Chairman"
                  name={
                    item.chairman_first_name + " " + item.chairman_last_name
                  }
                />
                <Assignment
                  label="Reader"
                  name={item.reader_first_name + " " + item.reader_last_name}
                />
              </Column>
              <OutgoingSpeakers data={item.outgoing_speakers} />
            </Row>
          </View>
        );
      })}
  </View>
);
