import { useMidweekMeetingScheduleDetailsQuery } from "@amodeo/data/react-query/midweek-meeting/views/use-midweek-meeting-schedule-details-query";
import { School } from "./school/School.js";
import ChairmanOutlinePDF from "@amodeo/feature/pdf/chairman-outline/ChairmanOutline";
import { getNextWeek } from "@amodeo/util/dateTime/next-week/nextWeek";
import { IonButton, IonIcon } from "@ionic/react";
import { downloadPDF } from "@amodeo/ui/util/ionic/icons/icons";
import { Treasures } from "./treasures/Treasures.js";
import { Chairman } from "./chairman/Chairman.js";
import { Living } from "./living/Living.js";

export type MidweekMeetingData = ReturnType<
  typeof useMidweekMeetingScheduleDetailsQuery
>["data"];

export const MidweekMeetingDetails = ({ week }: { week: string }) => {
  const { data: thisWeek } = useMidweekMeetingScheduleDetailsQuery(week);
  const { data: nextWeek } = useMidweekMeetingScheduleDetailsQuery(
    getNextWeek(week)
  );

  return thisWeek ? (
    <div style={{paddingBottom: "10rem"}}>
      <Chairman data={thisWeek} />
      <Treasures data={thisWeek} />
      <School data={thisWeek} />
      <Living data={thisWeek}></Living>
      <div style={{height: "2rem"}}></div>
      <ChairmanOutlinePDF.Download data={{ thisWeek, nextWeek }}>
        <IonButton expand="block" className="ion-margin">
          Chairmans Outline
          <IonIcon slot="end" icon={downloadPDF}></IonIcon>
        </IonButton>
      </ChairmanOutlinePDF.Download>
    </div>
  ) : null;
};
