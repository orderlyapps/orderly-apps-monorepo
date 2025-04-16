import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatStartEndDate } from "@amodeo/util/dateTime/format-start-end-date/formatStartEndDate";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

type WeekendMeetingPDFData = {
  data?: Tables<"_view_weekend_meeting_pdf">[];
};

const styles = StyleSheet.create({
  page: {
    padding: 12,
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
          <Text>
            Weekend Meeting Schedule for{" "}
            {formatStartEndDate(data[0].week_id, data[data.length - 1]?.week_id)}
          </Text>
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
