import { Tables } from "@amodeo/data/supabase/supabase-types";
import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
import { Title } from "../util/Title.js";
import { Container } from "./components/Container.js";
import { Label } from "./components/Label.js";
import { Detail } from "./components/Detail.js";
import { formatName } from "@amodeo/util/formatters/formatName";
import { Note } from "./components/Note.js";
import {
  assignmentData,
  assignmentType,
  assistant,
  counselor,
  material,
  schoolName,
  time,
} from "./components/helper.js";

type StudentAssignmentPDFData = {
  data: {
    data: Tables<"_view_midweek_meeting_schedule">;
    school: string;
    assignment: string;
  };
};

function StudentAssignmentPDF({ data }: StudentAssignmentPDFData) {
  return (
    <Document>
      <Page size={"A6"} style={{ padding: 10, fontSize: 11 }}>
        <Title style={{ color: "grey", textAlign: "center", paddingTop: 15 }}>
          Our Christian Life and
        </Title>
        <Title
          style={{ color: "grey", textAlign: "center", paddingBottom: 20 }}
        >
          Ministry Assignment
        </Title>
        <Container>
          <Label>Student:</Label>
          <Detail style={{ fontFamily: "Helvetica-Bold" }}>
            {formatName(
              data.data.midweek_assignments[
                data.assignment as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
              ]
            )}
          </Detail>
        </Container>
        <Container>
          <Label>Date:</Label>
          <Detail>{data.data.midweek_meeting_data.mwb_week_date_locale}</Detail>
        </Container>
        <Container>
          <Label>Assignment:</Label>
          <Detail>
            {(assignmentData[data.assignment] &&
              data.data.midweek_meeting_data[
                assignmentData[
                  data.assignment
                ] as keyof typeof data.data.midweek_meeting_data
              ]) ||
              "Bible Reading"}{" "}
            {(time[data.assignment] &&
              data.data.midweek_meeting_data[
                time[
                  data.assignment
                ] as keyof typeof data.data.midweek_meeting_data
              ]) ||
              "4"}{" "}
            min)
          </Detail>
        </Container>
        <Container>
          <Label>School:</Label>
          <Detail>{schoolName[data.school]}</Detail>
        </Container>
        {assignmentType[data.assignment] &&
          data.data.midweek_meeting_data[
            assignmentType[
              data.assignment
            ] as keyof typeof data.data.midweek_meeting_data
          ] !== "Talk" &&
          data.assignment !== "school_1_bible_reading" &&
          data.assignment !== "school_2_bible_reading" && (
            <Container>
              <Label>Assistant:</Label>
              <Detail>
                {formatName(
                  data.data.midweek_assignments[
                    assistant[
                      data.assignment
                    ] as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
                  ]
                )}
              </Detail>
            </Container>
          )}
        <Container>
          <Label>Counsellor:</Label>
          <Detail>
            {formatName(
              data.data.midweek_assignments[
                counselor[
                  data.school
                ] as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
              ]
            )}
          </Detail>
        </Container>
        <Container>
          <Label>Material:</Label>
          <Detail>
            {
              data.data.midweek_meeting_data[
                material[
                  data.assignment
                ] as keyof typeof data.data.midweek_meeting_data
              ]
            }
          </Detail>
        </Container>
        <Note></Note>
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

StudentAssignmentPDF.Render = ({ data }: StudentAssignmentPDFData) => {
  return (
    <PDFViewer width={"95%"} height={"95%"}>
      <StudentAssignmentPDF data={data} />
    </PDFViewer>
  );
};

export default StudentAssignmentPDF;
