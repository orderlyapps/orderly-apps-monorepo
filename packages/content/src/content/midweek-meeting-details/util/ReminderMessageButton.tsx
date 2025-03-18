import { IonButton, IonIcon } from "@ionic/react";
import { chatboxOutline } from "ionicons/icons";

interface SchoolPartsListItemProps {
  participant: string;
  time?: string;
  messageDetails?: string;
}

export const ReminderMessageButton = ({
  participant,
  time,
  messageDetails,
}: SchoolPartsListItemProps) => {
  const smsHref = `sms:?body=${encodeURIComponent(
    `Hi ${participant},
Just checking if you're ok for your part on the midweek meeting? Here are the details...

${messageDetails && `PART: ${messageDetails}`}${time ? `\nTIME: ${time} min` : ""}
`
  )}`;

  return (
    <IonButton
      fill="clear"
      expand="block"
      href={smsHref}
      slot="end"
      className="ion-padding-start"
    >
      <IonIcon icon={chatboxOutline} slot="icon-only" size="large" />
    </IonButton>
  );
};
