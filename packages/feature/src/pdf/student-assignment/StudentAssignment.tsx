import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

type StudentAssignmentPDFData = {
  data?: any;
};

const styles = StyleSheet.create({
  page: {
    padding: 12,
    fontSize: 12,
  },
});

function StudentAssignmentPDF({ data }: StudentAssignmentPDFData) {
  console.log("StudentAssignmentPDFData:", data);

  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <View>
          <Text>StudentAssignment PDF</Text>
        </View>
      </Page>
    </Document>
  );
}

StudentAssignmentPDF.Download = ({
  children,
  data,
}: {
  children?: React.ReactNode;
} & StudentAssignmentPDFData) => (
  <PDFDownloadLink
    document={<StudentAssignmentPDF data={data} />}
    fileName="StudentAssignment.pdf"
  >
    {children || "Download"}
  </PDFDownloadLink>
);

StudentAssignmentPDF.Render = ({ data }: { data?: StudentAssignmentPDFData }) => {
  return (
    <PDFViewer width={"95%"} height={"95%"}>
      <StudentAssignmentPDF data={data} />
    </PDFViewer>
  );
};

export default StudentAssignmentPDF;