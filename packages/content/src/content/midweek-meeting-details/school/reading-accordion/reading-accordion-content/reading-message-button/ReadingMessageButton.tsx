import { IonButton, IonIcon, IonItem } from "@ionic/react";
import { chatboxOutline } from "ionicons/icons";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";

interface ReadingMessageButtonProps {
  data: {
    midweek_meeting_data: Tables<"midweek_meeting_data">;
    midweek_assignments: Tables<"_view_midweek_meeting_schedule">["midweek_assignments"];
  };
  school: string;
}

export const ReadingMessageButton = ({
  data,
  school,
}: ReadingMessageButtonProps) => {
  const smsHref = `sms:?body=${encodeURIComponent(
    `Hi ${
      data?.midweek_assignments[
        ("school_" +
          school +
          "_bible_reading") as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
      ]?.first_name
    },
Just checking if you're ok for your part on the midweek meeting? Here are the details...

PART: Bible Reading

TIME: 4 min
     
DETAILS: ${data?.midweek_meeting_data.mwb_tgw_bread}`
  )}`;

  return (
    <IonItem lines="none">
      <IonButton fill="clear" expand="block" href={smsHref} slot="end">
        <IonIcon icon={chatboxOutline} slot="icon-only" size="large" />
      </IonButton>
    </IonItem>
  );
};
