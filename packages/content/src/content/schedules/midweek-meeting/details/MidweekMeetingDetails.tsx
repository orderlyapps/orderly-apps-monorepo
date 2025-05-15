import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useMidweekMeetingDetailsQuery } from "@amodeo/data/react-query/midweek-meeting/use-midweek-meeting-details-query";
import { Assignment } from "./components/assignment/Assignment.js";
import { IonAccordionGroup } from "@ionic/react";
import { InitMidweekMeetingData } from "./components/init-midweek-meeting-data/InitMidweekMeetingData.js";

export const MidweekMeetingDetails = () => {
  const { week_id } = useOrderlyPageParams("midweek_meeting_details");
  const { data } = useMidweekMeetingDetailsQuery({ week_id });

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
    </>
  );
};
