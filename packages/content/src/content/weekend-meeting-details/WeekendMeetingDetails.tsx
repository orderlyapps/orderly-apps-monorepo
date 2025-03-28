import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { SpeakerSelect } from "./components/speaker-select/SpeakerSelect.js";
import { OutlineSelect } from "./components/outline-select/OutlineSelect.js";
import { OutgoingSpeakers } from "./components/outgoing-speakers/OutgoingSpeakers.js";
import { WeekendAssignments } from "./components/weekend-assignments/WeekendAssignments.js";

export const WeekendMeetingEdit = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  return (
    <>
      <SpeakerSelect modalProps={modalProps} />
      <OutlineSelect modalProps={modalProps} />
      <WeekendAssignments modalProps={modalProps} />
      <OutgoingSpeakers />
    </>
  );
};
