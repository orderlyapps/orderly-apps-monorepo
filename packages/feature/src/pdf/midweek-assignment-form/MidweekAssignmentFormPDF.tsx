import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

type MidweekAssignmentFormPDFData = {
  data?: any;
};

const styles = StyleSheet.create({
  page: {
    padding: 12,
    fontSize: 12,
  },
});

function MidweekAssignmentFormPDF({ data }: MidweekAssignmentFormPDFData) {

  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View>
          <Text>MidweekAssignmentForm PDF</Text>
        </View>
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