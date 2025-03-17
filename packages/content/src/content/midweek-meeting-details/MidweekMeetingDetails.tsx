import { useMidweekMeetingScheduleDetailsQuery } from "@amodeo/data/react-query/midweek-meeting/views/use-midweek-meeting-schedule-details-query";
import { School } from "./school/School.js";
import ChairmanOutlinePDF from "@amodeo/feature/pdf/chairman-outline/ChairmanOutline";
import { getNextWeek } from "@amodeo/util/dateTime/next-week/nextWeek";
import { IonButton, IonIcon } from "@ionic/react";
import { downloadPDF } from "@amodeo/ui/util/ionic/icons/icons";

export const MidweekMeetingDetails = ({ week }: { week: string }) => {
  const { data: thisWeek } = useMidweekMeetingScheduleDetailsQuery(week);
  const { data: nextWeek } = useMidweekMeetingScheduleDetailsQuery(
    getNextWeek(week)
  );

  return thisWeek ? (
    <div>
      <ChairmanOutlinePDF.Download data={{ thisWeek, nextWeek }}>
        <IonButton expand="block" className="ion-margin">
          Chairmans Outline
          <IonIcon slot="end" icon={downloadPDF}></IonIcon>
        </IonButton>
      </ChairmanOutlinePDF.Download>
      <School data={thisWeek} />
    </div>
  ) : null;
};
