import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";

type PDFData = {
  data?: any;
};

function TemplatePDF({ data }: PDFData) {
  console.log("PDFData:", data);

  return (
    <Document>
      <Page size={"A4"} style={{ padding: 12, fontSize: 12 }}>
        <View>
          <Text>Template PDF</Text>
        </View>
      </Page>
    </Document>
  );
}

TemplatePDF.Download = ({
  children,
  data,
}: {
  children?: React.ReactNode;
} & PDFData) => (
  <PDFDownloadLink
    document={<TemplatePDF data={data} />}
    fileName="Template.pdf"
  >
    {children || "Download"}
  </PDFDownloadLink>
);

TemplatePDF.Render = ({ data }: { data?: PDFData }) => {
  return (
    <PDFViewer width={"95%"} height={"95%"}>
      <TemplatePDF data={data} />
    </PDFViewer>
  );
};

export default TemplatePDF;
