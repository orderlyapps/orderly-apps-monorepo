import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { SpeakerSelect } from "./components/speaker-select/SpeakerSelect.js";
import { OutlineSelect } from "./components/outline-select/OutlineSelect.js";
import { OutgoingSpeakers } from "./components/outgoing-speakers/OutgoingSpeakers.js";
import { ChairmanSelect } from "./components/chairman-select/ChairmanSelect.js";
import { WeekendMeetingAlert } from "./components/weekend-meeting-alert/WeekendMeetingAlert.js";
import { WeekendMeetingToast } from "./components/weekend-meeting-toast/WeekendMeetingToast.js";
import { ReaderSelect } from "./components/reader-select/ReaderSelect.js";

export const WeekendMeetingEdit = ({
  modalProps,
}: {
  modalProps: ModalProps;
}) => {
  return (
    <>
      <SpeakerSelect modalProps={modalProps} />
      <OutlineSelect modalProps={modalProps} />
      <ChairmanSelect modalProps={modalProps} />
      <ReaderSelect modalProps={modalProps} />
      <OutgoingSpeakers />
      <WeekendMeetingAlert />
      <WeekendMeetingToast />
    </>
  );
};
