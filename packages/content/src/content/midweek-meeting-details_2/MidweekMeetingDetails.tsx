import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useMidweekMeetingDetailsQuery } from "@amodeo/data/react-query/midweek-meeting_2/use-midweek-meeting-details-query";
import { Assignment } from "./assignments/Assignment.js";
import { IonAccordionGroup } from "@ionic/react";
import { ModalProps } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { MidweekParticipantSelectModal } from "./select-modal/MidweekParticipantSelectModal.js";

export const MidweekMeetingDetails = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  const { week_id } = useOrderlyPageParams("midweek_meeting_details");
  const { data } = useMidweekMeetingDetailsQuery({ week_id });

  if (!data?.[0]) {
    return <div>MidweekMeetingDetails</div>;
  }
  const weekData = data[0];

  return (
    <>
      {/* <MidweekParticipantSelectModal modalProps={modalProps} /> */}
      <IonAccordionGroup>
        <Assignment assignment="chairman" data={weekData} />
        <Assignment assignment="prayer_opening" data={weekData} />
        <Assignment assignment="treasures" data={weekData} />
        <Assignment assignment="gems" data={weekData} />
        <Assignment assignment="school_1_bible_reading" data={weekData} />
        <Assignment assignment="school_1_apply_1" data={weekData} />
        <Assignment assignment="school_1_apply_2" data={weekData} />
        <Assignment assignment="school_1_apply_3" data={weekData} />
        <Assignment assignment="school_1_apply_4" data={weekData} />
        <Assignment assignment="counselor_2" data={weekData} />
        <Assignment assignment="school_2_bible_reading" data={weekData} />
        <Assignment assignment="school_2_apply_1" data={weekData} />
        <Assignment assignment="school_2_apply_2" data={weekData} />
        <Assignment assignment="school_2_apply_3" data={weekData} />
        <Assignment assignment="school_2_apply_4" data={weekData} />
        <Assignment assignment="living_1" data={weekData} />
        <Assignment assignment="living_2" data={weekData} />
        <Assignment assignment="cbs_conductor" data={weekData} />
        <Assignment assignment="prayer_closing" data={weekData} />
      </IonAccordionGroup>
    </>
  );
};


