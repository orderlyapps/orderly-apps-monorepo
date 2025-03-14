// import {
//   Document,
//   Page,
//   PDFDownloadLink,
//   PDFViewer,
//   Text,
//   View,
//   StyleSheet,
// } from "@react-pdf/renderer";

// function TemplatePDF() {
//   return (
//     <Document>
//       <Page size={"A4"} style={{ padding: 12, fontSize: 12 }}>
//         <View>
//           <Text>Template PDF</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// }

// TemplatePDF.Download = ({ children }: { children?: React.ReactNode }) => (
//   <PDFDownloadLink document={<TemplatePDF />} fileName="Template.pdf">
//     {children || "Download"}
//   </PDFDownloadLink>
// );

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "red",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: "#E4E4E4",
//     flexGrow: 1,
//   },
// });

// TemplatePDF.Render = () => {
//   return (
//     <PDFViewer width={"95%"} height={"95%"}>
//       <Document>
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <Text>Section #1</Text>
//           </View>
//           <View style={styles.section}>
//             <Text>Section #2</Text>
//           </View>
//         </Page>
//       </Document>
//     </PDFViewer>
//   );
// };

// export default TemplatePDF;
