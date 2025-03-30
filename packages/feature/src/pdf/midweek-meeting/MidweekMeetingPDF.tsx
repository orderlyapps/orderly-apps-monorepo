import { Tables } from "@amodeo/data/supabase/supabase-types";
import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { Title } from "./components/title/Title.js";
import { WeeklyScheduleData } from "./components/weekly-schedule-data/WeeklyScheduleData.js";

export type MidweekMeetingPDFData = {
  data: {
    midweek_meeting_data: Tables<"midweek_meeting_data">[];
    midweek_assignments: Tables<"_view_midweek_assignments">[];
  };
};

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
  },
});

function MidweekMeetingPDF({
  data: { midweek_meeting_data, midweek_assignments },
}: MidweekMeetingPDFData) {
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View>
          <Title midweek_meeting_data={midweek_meeting_data} />
          <WeeklyScheduleData
            data={{ midweek_meeting_data, midweek_assignments }}
          />
        </View>
      </Page>
    </Document>
  );
}

MidweekMeetingPDF.Download = ({
  children,
  data,
}: {
  children?: React.ReactNode;
} & MidweekMeetingPDFData) => (
  <PDFDownloadLink
    document={<MidweekMeetingPDF data={data} />}
    fileName="MidweekMeeting.pdf"
  >
    {children || "Download"}
  </PDFDownloadLink>
);

MidweekMeetingPDF.Render = ({ data }: MidweekMeetingPDFData) => {
  console.log("MidweekMeetingPDFData:", data);

  return (
    <div style={{ height: "80vh", width: "100vw" }}>
      <PDFViewer width={"100%"} height={"100%"}>
        <MidweekMeetingPDF data={data} />
      </PDFViewer>
    </div>
  );
};

export default MidweekMeetingPDF;
