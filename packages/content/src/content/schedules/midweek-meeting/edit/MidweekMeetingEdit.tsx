import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { MidweekParticipantSelectModal } from "./components/midweek-meeting-select-modal/MidweekParticipantSelectModal.js";
import { useMidweekMeetingDetailsQuery } from "@amodeo/data/react-query/midweek-meeting_2/use-midweek-meeting-details-query";

import { AssistantSelect } from "./components/assistant-select/AssistantSelect.js";
import { ParticipantSelect } from "./components/participant-select/ParticipantSelect.js";

import { getAssignmentData } from "../.shared/getData/getAssignmentData.js";
import { AssignmentDetails } from "./components/assignment-details/AssignmentDetails.js";
import { AddParticipantModal } from "./components/add-partitpant-modal/AddParticipantModal.js";

export const MidweekMeetingEdit = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { assignment_id, week_id } = useOrderlyPageParams(
    "midweek_meeting_edit"
  );

  const { data } = useMidweekMeetingDetailsQuery({ week_id });

  if (!data?.[0]) {
    return <div>MidweekMeetingDetails</div>;
  }
  const weekData = data[0];

  const assignmentData = getAssignmentData({
    assignment_id,
    data: weekData,
  });

  return (
    <>
      <ParticipantSelect assignmentData={assignmentData} />

      <AssistantSelect assignmentData={assignmentData} />

      <AssignmentDetails assignmentData={assignmentData} />

      <MidweekParticipantSelectModal modalProps={modalProps} />

      <AddParticipantModal modalProps={modalProps} assignmentData={assignmentData}  />
    </>
  );
};
