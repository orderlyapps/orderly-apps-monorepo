import { Tables } from "@amodeo/data/supabase/supabase-types";
import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { Title } from "./components/Title.js";
import { Schedule } from "./Schedule.js";

export type WeekendMeetingPDFData = {
  data: Tables<"_view_weekend_meeting_pdf">[];
};

const styles = StyleSheet.create({
  page: {
    padding: 15,
    fontSize: 12,
  },
});

function WeekendMeetingPDF({ data }: WeekendMeetingPDFData) {
  if (!data || !data[0] || data.length < 1) {
    return null;
  }
  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View>
          <Title data={data} />
          <Schedule data={data} />
        </View>
      </Page>
    </Document>
  );
}

WeekendMeetingPDF.Download = ({
  children,
  data,
}: {
  children?: React.ReactNode;
} & WeekendMeetingPDFData) => (
  <PDFDownloadLink
    document={<WeekendMeetingPDF data={data} />}
    fileName="WeekendMeeting.pdf"
  >
    {children || "Download"}
  </PDFDownloadLink>
);

WeekendMeetingPDF.Render = ({ data }: WeekendMeetingPDFData) => {
  console.log("WeekendMeetingPDFData:", data);

  return (
    <div style={{ height: "80vh", width: "100vw" }}>
      <PDFViewer width={"100%"} height={"100%"}>
        <WeekendMeetingPDF data={data} />
      </PDFViewer>
    </div>
  );
};

export default WeekendMeetingPDF;
