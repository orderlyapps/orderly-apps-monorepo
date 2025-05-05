import {
  IonButton,
  IonIcon,
  IonPopover,
  IonContent,
  IonList,
  IonItem,
} from "@ionic/react";
import { chatboxOutline } from "ionicons/icons";
import { useState } from "react";
import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";
import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { sendSMS } from "#content/schedules/midweek-meeting/.shared/sendSMS.js";
import { getSMSContent } from "#content/schedules/midweek-meeting/.shared/getSMSContent.js";

export const Message = ({
  assignmentData,
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  return (
    <>
      <IonButton
        fill="clear"
        expand="block"
        color="light"
        onClick={() => setPopoverOpen(true)}
      >
        <IonIcon icon={chatboxOutline} slot="icon-only" size="large" />
      </IonButton>
      <IonPopover
        isOpen={popoverOpen}
        onDidDismiss={() => setPopoverOpen(false)}
      >
        <IonContent>
          <IonList>
            <IonItem
              onClick={() =>
                sendSMS(getSMSContent(assignmentData, "ASSIGNMENMT"))
              }
            >
              Assignment
            </IonItem>
            <IonItem
              onClick={() => sendSMS(getSMSContent(assignmentData, "FILL_IN"))}
            >
              Fill In Request
            </IonItem>
            <IonItem
              onClick={() => sendSMS(getSMSContent(assignmentData, "REMINDER"))}
            >
              Reminder
            </IonItem>
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
};
