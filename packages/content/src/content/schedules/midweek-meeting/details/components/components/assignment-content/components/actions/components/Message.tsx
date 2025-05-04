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

export const Message = ({
  assignmentData,
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  function getSMSContent(
    assignmentData: {
      time: any;
      details: any;
      assistant:
        | {
            assistantsName: string;
            show: boolean;
            label: string;
            assignment_id?: undefined;
          }
        | {
            assistantsName: string;
            show: boolean;
            label: string;
            assignment_id: string | number | symbol;
          }
        | null;
      label: any;
      color: string;
      participant: { name: string; first_name: any } | null;
      padding: string;
      date: string;
      school: {
        hasSecondSchool: boolean;
        number: string | null;
        label: string;
      };
      counsellor: { name: string };
      assignment_id: MidweekAssignments;
    },
    arg1: string
  ): any {
    throw new Error("Function not implemented.");
  }

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
