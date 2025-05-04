import { IonButton, IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
import { orderlyPath, useOrderlyPageParams } from "#shells/orderly/routes.js";
import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";

export const Edit = ({
  assignmentData,
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  const { week_id } = useOrderlyPageParams("midweek_meeting_details");
  return (
    <>
      <IonButton
        fill="clear"
        expand="block"
        color="light"
        routerLink={orderlyPath("midweek_meeting_edit", {
          week_id,
          assignment_id: assignmentData.assignment_id,
        })}
      >
        <IonIcon icon={createOutline} slot="icon-only" size="large" />
      </IonButton>
    </>
  );
};
