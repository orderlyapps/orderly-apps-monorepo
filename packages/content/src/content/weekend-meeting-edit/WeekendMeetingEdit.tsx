import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useOutgoingSpeakerDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/use-outgoing-speaker-details-query";
import { useWeekendMeetingDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/use-weekend-meeting-details-query";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { SpeakerSelect } from "./components/SpeakerSelect.js";

export const WeekendMeetingEdit = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { week_id } = useOrderlyPageParams("weekend_meeting_edit");

  const { data: weekendMeeting } = useWeekendMeetingDetailsQuery(week_id, {
    enabled: true,
  });
  console.log("🚀 ~ weekendMeeting:", weekendMeeting)
  
  // const { data: outgoingSpeakers } = useOutgoingSpeakerDetailsQuery(week_id, {
  //   enabled: !!weekendMeeting,
  // });

  return (
    <div>
      {weekendMeeting && (
        <>
          <SpeakerSelect
            modalProps={modalProps}
            weekendMeeting={weekendMeeting}
            // outgoingSpeakers={outgoingSpeakers}
          ></SpeakerSelect>
        </>
      )}
    </div>
  );
};
