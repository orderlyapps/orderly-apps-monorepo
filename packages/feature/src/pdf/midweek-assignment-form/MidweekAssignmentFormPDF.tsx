import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { Note } from "./Note.js";
import { Content } from "./Content.js";
import { Title } from "./Title.js";

type Data = {
  time: string;
  details: string | null;
  assistant: {
    assistantsName: string;
    show: boolean;
    label: string;
  } | null;
  label: string | null;
  color: string;
  participant: {
    name: string;
    first_name: string;
  } | null;
  padding: string;
  date: string;
  school: {
    number: string | null;
    label: string;
  };
  counsellor: {
    name: string;
  };
};

type MidweekAssignmentFormPDFData = {
  data: Data;
};

const styles = StyleSheet.create({
  page: {
    padding: 12,
    fontSize: 12,
  },
});

function MidweekAssignmentFormPDF({
  data: {
    label,
    time,
    participant,
    date,
    school,
    assistant,
    counsellor,
    details,
  },
}: MidweekAssignmentFormPDFData) {
  return (
    <Document>
      <Page size={"A6"} style={styles.page}>
        <View>
          <Title />
          <Content label={"Student"} info={participant?.name || null} />
          <Content label={"Date"} info={date || null} />
          <Content
            label={"Assignment"}
            info={label + " (" + time + " min)" || null}
          />
          <Content label={"School"} info={school?.label || null} />
          {assistant?.show && (
            <Content
              label={"Assistant"}
              info={assistant?.assistantsName || null}
            />
          )}
          <Content label={"Counsellor"} info={counsellor.name || null} />
          <Content label={"Material"} info={details || null} />
        </View>
        <Note />
      </Page>
    </Document>
  );
}

MidweekAssignmentFormPDF.Download = ({
  children,
  data,
}: {
  children?: React.ReactNode;
} & MidweekAssignmentFormPDFData) => (
  <PDFDownloadLink
    document={<MidweekAssignmentFormPDF data={data} />}
    fileName="MidweekAssignmentForm.pdf"
  >
    {children || "Download"}
  </PDFDownloadLink>
);

MidweekAssignmentFormPDF.Render = ({ data }: MidweekAssignmentFormPDFData) => {
  console.log("MidweekAssignmentFormPDFData:", data);

  return (
    <div style={{ height: "80vh", width: "100vw" }}>
      <PDFViewer width={"100%"} height={"100%"}>
        <MidweekAssignmentFormPDF data={data} />
      </PDFViewer>
    </div>
  );
};

export default MidweekAssignmentFormPDF;
