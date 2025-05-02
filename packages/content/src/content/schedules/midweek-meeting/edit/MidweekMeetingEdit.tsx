import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { MidweekParticipantSelectModal } from "./components/midweek-meeting-select-modal/MidweekParticipantSelectModal.js";
import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { useMidweekMeetingDetailsQuery } from "@amodeo/data/react-query/midweek-meeting_2/use-midweek-meeting-details-query";

import { AssistantSelect } from "./components/assistant-select/AssistantSelect.js";
import { ParticipantSelect } from "./components/participant-select/ParticipantSelect.js";
import {
  AssigmentData,
  getAssignmentData,
} from "../details/assignments/helper/getAssignmentData.js";
import { Time } from "../details/assignments/components/Time.js";
import { Details } from "../details/assignments/components/Details.js";

function AssignmentDetails({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) {
  return (
    <IonItem className="ion-margin-top" lines="none">
      <IonGrid className={assignmentData.time && "ion-margin-top"}>
        <IonRow>
          <IonCol>
            <Time assignmentData={assignmentData} />
            <Details assignmentData={assignmentData} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
}

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
    </>
  );
};
