import { Tables } from "@amodeo/data/supabase/supabase-types";
import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";
import { Title } from "../util/Title.js";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { formatName } from "@amodeo/util/formatters/formatName";
import { Divider } from "../util/Divider.js";
import { Section } from "./components/Section.js";
import { Row } from "../util/Row.js";
import { Part } from "./components/Part.js";
import { Participant } from "./components/Participant.js";
import { Time } from "./components/Time.js";
import { JW_SLATE } from "@amodeo/util/colors/jw-colors";
import { ApplySection } from "./components/ApplySection.js";
import { LivingSection } from "./components/LivingSection.js";
import { NextWeekParticipants } from "./components/next-week-participants/NextWeekParticipants.js";

type ChairmanOutlinePDFData = {
  data: {
    thisWeek: Tables<"_view_midweek_meeting_schedule">;
    nextWeek?: Tables<"_view_midweek_meeting_schedule">;
  };
};

const styles = StyleSheet.create({
  page: {
    padding: 12,
    fontSize: 10,
  },
});

function ChairmanOutlinePDF({ data }: ChairmanOutlinePDFData) {
  const { thisWeek, nextWeek } = data;

  const meetingTime = new Date().setHours(19, 0, 0, 0);
  let startTime = meetingTime;

  const time = (minutes: number) => {
    startTime = startTime + minutes * 60000;
    return new Date(startTime)
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/(AM|PM)/i, "");
  };

  const setTime = (minutes: number) => {
    startTime = new Date().setHours(19, 0, 0, 0) + minutes * 60000;
    return new Date(startTime)
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .replace(/(AM|PM)/i, "");
  };

  return (
    <Document>
      <Page size={"A4"} style={styles.page}>
        <Title style={{ color: "black" }}>
          {formatWeekDate(thisWeek.week_id || "")} CHAIRMANS OUTLINE (
          {formatName(thisWeek.midweek_assignments.chairman, {
            format: "first last",
          })}
          )
        </Title>

        <Divider></Divider>

        <Section>
          <Row style={{ width: "100%" }}>
            <Part>
              Song {thisWeek.midweek_meeting_data.mwb_song_first || ""} & Prayer
            </Part>
            <Participant>
              {formatName(thisWeek.midweek_assignments.prayer_opening, {
                format: "first last",
              })}
            </Participant>
            <Time>{time(0)}</Time>
          </Row>
          <Row style={{ width: "100%" }}>
            <Part>Opening Comments (1 min)</Part>
            <Participant>{""}</Participant>
            <Time>{time(5)}</Time>
          </Row>
        </Section>

        <Text
          style={{
            backgroundColor: JW_SLATE,
            color: "white",
            paddingVertical: 3,
            paddingHorizontal: 5,
          }}
        >
          Treasures from God's Word
        </Text>

        <Section>
          <Row>
            <Part>
              {thisWeek.midweek_meeting_data.mwb_tgw_talk_title || ""} (10 min)
            </Part>
            <Participant>
              {formatName(thisWeek.midweek_assignments.treasures)}
            </Participant>
            <Time>{time(1)}</Time>
          </Row>
        </Section>

        <Section>
          <Row>
            <Part>
              {thisWeek.midweek_meeting_data.mwb_tgw_gems_title || ""} (10 min)
            </Part>
            <Participant>
              {formatName(thisWeek.midweek_assignments.gems)}
            </Participant>
            <Time>{time(10)}</Time>
          </Row>
        </Section>

        <Section>
          <Row style={{ fontFamily: "Helvetica-Bold" }}>
            <Part>
              {thisWeek.midweek_meeting_data.mwb_tgw_bread_title || ""} (4 min)
            </Part>
            <Participant>
              {formatName(thisWeek.midweek_assignments.school_1_bible_reading)}
            </Participant>
            <Time style={{ fontFamily: "Helvetica" }}>{time(10)}</Time>
          </Row>
          <Row>
            <Part style={{ paddingHorizontal: 13 }}>
              {thisWeek.midweek_meeting_data.mwb_tgw_bread || ""}
            </Part>
          </Row>
        </Section>

        <ApplySection data={thisWeek} time={time}></ApplySection>

        <LivingSection
          data={thisWeek}
          time={time}
          setTime={setTime}
        ></LivingSection>

        <Divider></Divider>

        <Row style={{ paddingBottom: 2 }}>
          <Part>Concluding Comments (3 min)</Part>
          <Participant>{""}</Participant>
          <Time>{setTime(97)}</Time>
        </Row>

        {nextWeek && (
          <NextWeekParticipants
            nextWeekDetails={nextWeek}
          ></NextWeekParticipants>
        )}

        <Row style={{ paddingTop: 20 }}>
          <Part>
            Song {thisWeek.midweek_meeting_data.mwb_song_conclude || ""} &
            Prayer
          </Part>
          <Participant>
            {formatName(thisWeek.midweek_assignments.prayer_closing, {
              format: "first last",
            })}
          </Participant>
          <Time>{setTime(100)}</Time>
        </Row>
      </Page>
    </Document>
  );
}

ChairmanOutlinePDF.Download = ({
  children,
  data,
}: {
  children?: React.ReactNode;
} & ChairmanOutlinePDFData) => (
  <PDFDownloadLink
    document={<ChairmanOutlinePDF data={data} />}
    fileName={`Chairman's Outline ~ ${formatWeekDate(data.thisWeek.week_id as string)} ~ ${formatName(data.thisWeek.midweek_assignments.chairman, { format: "first last" })}.pdf`}
  >
    {children || "Download"}
  </PDFDownloadLink>
);

ChairmanOutlinePDF.Render = ({ data }: ChairmanOutlinePDFData) => {
  console.log("ChairmanOutlinePDFData:", data);
  return (
    <div style={{ height: "80vh", width: "100vw" }}>
      <PDFViewer width={"100%"} height={"100%"}>
        <ChairmanOutlinePDF data={data} />
      </PDFViewer>
    </div>
  );
};

export default ChairmanOutlinePDF;
