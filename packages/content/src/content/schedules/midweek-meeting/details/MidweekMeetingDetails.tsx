import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useMidweekMeetingDetailsQuery } from "@amodeo/data/react-query/midweek-meeting/use-midweek-meeting-details-query";
import { Assignment } from "./components/assignment/Assignment.js";
import { IonAccordionGroup, IonButton } from "@ionic/react";
import { InitMidweekMeetingData } from "./components/init-midweek-meeting-data/InitMidweekMeetingData.js";
import ChairmanOutline from "@amodeo/feature/pdf/chairman-outline/ChairmanOutline";

export const MidweekMeetingDetails = () => {
  const { week_id } = useOrderlyPageParams("midweek_meeting_details");
  const { data } = useMidweekMeetingDetailsQuery({ week_id });
  // Convert week_id to a date, add 7 days, and format back to week_id string
  const nextWeekId = new Date(week_id);
  nextWeekId.setDate(nextWeekId.getDate() + 7);
  const nextWeek = nextWeekId.toISOString().split("T")[0];
  const { data: nextWeekData } = useMidweekMeetingDetailsQuery({
    week_id: nextWeek || "",
  });

  if (!data?.[0]) {
    return IS_ORDERLY_APP ? <InitMidweekMeetingData /> : null;
  }

  const weekData = data[0];

  return (
    <>
      <IonAccordionGroup>
        <Assignment assignment_id="chairman" data={weekData} />
        <Assignment assignment_id="prayer_opening" data={weekData} />
        <Assignment assignment_id="treasures" data={weekData} />
        <Assignment assignment_id="gems" data={weekData} />
        <Assignment assignment_id="school_1_bible_reading" data={weekData} />
        <Assignment assignment_id="school_1_apply_1" data={weekData} />
        <Assignment assignment_id="school_1_apply_2" data={weekData} />
        <Assignment assignment_id="school_1_apply_3" data={weekData} />
        <Assignment assignment_id="school_1_apply_4" data={weekData} />
        <Assignment assignment_id="counselor_2" data={weekData} />
        <Assignment assignment_id="school_2_bible_reading" data={weekData} />
        <Assignment assignment_id="school_2_apply_1" data={weekData} />
        <Assignment assignment_id="school_2_apply_2" data={weekData} />
        <Assignment assignment_id="school_2_apply_3" data={weekData} />
        <Assignment assignment_id="school_2_apply_4" data={weekData} />
        <Assignment assignment_id="living_1" data={weekData} />
        <Assignment assignment_id="living_2" data={weekData} />
        <Assignment assignment_id="cbs_conductor" data={weekData} />
        <Assignment assignment_id="prayer_closing" data={weekData} />
      </IonAccordionGroup>

      <ChairmanOutline.Download
        data={{
          thisWeek: weekData,
          nextWeek: nextWeekData ? nextWeekData[0] : null,
        }}
      >
        <IonButton expand="full" className="ion-padding">
          Chairman's Outline
        </IonButton>
      </ChairmanOutline.Download>
    </>
  );
};
