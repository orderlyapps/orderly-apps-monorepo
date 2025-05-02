import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { MidweekParticipantSelectModal } from "./select-modal/MidweekParticipantSelectModal.js";
import {
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonNote,
  IonRow,
  IonText,
} from "@ionic/react";
import { useMidweekAssignmentsFormState } from "./select-modal/hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { useMidweekMeetingDetailsQuery } from "@amodeo/data/react-query/midweek-meeting_2/use-midweek-meeting-details-query";
import { assignmentData } from "./select-modal/hooks/use-midweek-participants-list/helper/get-extra-data/helper/assignmentData.js";
import { getAssignmentData } from "#content/midweek-meeting-details_2/assignments/helper/getAssignmentData.js";
import { Time } from "#content/midweek-meeting-details_2/assignments/components/Time.js";
import { Details } from "#content/midweek-meeting-details_2/assignments/components/Details.js";
import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";

export const MidweekMeetingEdit = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { assignment_id, week_id } = useOrderlyPageParams(
    "midweek_meeting_edit"
  );
  const { openSelectParticipantModal } = useMidweekAssignmentsFormState();

  const { data } = useMidweekMeetingDetailsQuery({ week_id });

  if (!data?.[0]) {
    return <div>MidweekMeetingDetails</div>;
  }
  const weekData = data[0];

  const assignmentData = getAssignmentData({
    assignment: assignment_id,
    data: weekData,
  });

  return (
    <>
      <IonItem
        onClick={() =>
          openSelectParticipantModal({
            currentAssignment: assignment_id,
            modalTitle: "Modal Data",
            assignmentData,
          })
        }
        className="ion-margin-top"
      >
        <IonLabel color={assignmentData.color} className="ion-text-nowrap">
          <strong>{assignmentData.label}</strong>
        </IonLabel>
        <IonText>
          {assignmentData.participant?.name || "No Participant"}
        </IonText>
      </IonItem>

      {assignmentData.assistant?.show && (
        <>
          <IonItem
            onClick={() =>
              openSelectParticipantModal({
                currentAssignment: assignmentData.assistant
                  ?.assignment_id as MidweekAssignments,
                modalTitle: "Modal Data",
                assignmentData,
              })
            }
          >
            <IonLabel>
              <strong>{assignmentData.assistant?.label}</strong>
            </IonLabel>
            <IonText>
              {assignmentData.assistant?.assistantsName || "No Assistant"}
            </IonText>
          </IonItem>
        </>
      )}

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

      <MidweekParticipantSelectModal
        modalProps={modalProps}
      ></MidweekParticipantSelectModal>
    </>
  );
};
