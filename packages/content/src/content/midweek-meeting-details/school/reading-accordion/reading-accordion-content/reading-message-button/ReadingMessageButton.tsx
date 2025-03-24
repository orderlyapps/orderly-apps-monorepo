import {
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonPopover,
} from "@ionic/react";
import { chatboxOutline } from "ionicons/icons";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { useState } from "react";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";

interface ReadingMessageButtonProps {
  data: {
    week_id: string | null;
    midweek_meeting_data: Tables<"midweek_meeting_data">;
    midweek_assignments: Tables<"_view_midweek_meeting_schedule">["midweek_assignments"];
  };
  school: string;
}

export const ReadingMessageButton = ({
  data,
  school,
}: ReadingMessageButtonProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const assignmentMessage = `Hi ${
    data?.midweek_assignments[
      ("school_" +
        school +
        "_bible_reading") as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
    ]?.first_name
  },
You have an upcoming Bible reading assignment. Here are the details...

DATE: ${formatWeekDate(data.week_id ?? "")}

PART: Bible Reading

TIME: 4 min
   
DETAILS: ${data?.midweek_meeting_data.mwb_tgw_bread}`;

  const fillInMessage = `Hi,

Are you available to fill in for the upcoming Bible reading assignment? Here are the details...

DATE: ${formatWeekDate(data.week_id ?? "")}

PART: Bible Reading

TIME: 4 min
   
DETAILS: ${data?.midweek_meeting_data.mwb_tgw_bread}`;

  const reminderMessage = `Hi ${
    data?.midweek_assignments[
      ("school_" +
        school +
        "_bible_reading") as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
    ]?.first_name
  },
Just checking if you're ok for your part on the midweek meeting? Here are the details...

PART: Bible Reading

TIME: 4 min
 
DETAILS: ${data?.midweek_meeting_data.mwb_tgw_bread}`;

  function sendSMS(message: string) {
    setPopoverOpen(false);
    const smsLink = `sms:/ /?&body=${encodeURIComponent(message)}`;
    window.location.href = smsLink;
  }

  return (
    <>
      <IonButton
        fill="clear"
        expand="block"
        slot="end"
        className="ion-padding-start"
        onClick={() => setPopoverOpen(true)}
      >
        <IonIcon icon={chatboxOutline} slot="icon-only" size="large" />
      </IonButton>
      <IonPopover
        isOpen={popoverOpen}
        onDidDismiss={() => setPopoverOpen(false)}
      >
        <IonContent >
          <IonList >
            <IonItem onClick={() => sendSMS(assignmentMessage)}>
              Assignment
            </IonItem>
            <IonItem onClick={() => sendSMS(fillInMessage)}>Fill In</IonItem>
            <IonItem onClick={() => sendSMS(reminderMessage)}>Reminder</IonItem>
          </IonList>
        </IonContent>
      </IonPopover>
    </>
  );
};
