import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  View,
} from "@react-pdf/renderer";
import { TemplatePDFTitle } from "./components/template-pdf-title/TemplatePDFTitle.js";

type PDFData = {
  data?: any;
};

function TemplatePDF({ data }: PDFData) {
  console.log("PDFData:", data);

  return (
    <Document>
      <Page size={"A4"} style={{ padding: 12, fontSize: 12 }}>
        <View>
          <TemplatePDFTitle />
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
