import { IonItem, IonLabel, IonText } from "@ionic/react";
import { ReminderMessageButton } from "./ReminderMessageButton.js";
import { Tables } from "@amodeo/data/supabase/supabase-types";

export const AccordionContent = ({
  time,
  details,
  name,
  messageDetails,
}: {
  time?: string;
  details?: string;
  name: Tables<"publishers">["first_name"];
  messageDetails: string;
}) => {
  return (
    <IonItem slot="content" className="ion-padding">
      <IonLabel>
        {time && (
          <>
            <IonText>
              <strong style={{ lineHeight: "1.5" }}>Time: </strong>
              {time} minutes
            </IonText>
          </>
        )}
        {details && (
          <>
            <br />
            <IonText>
              <strong style={{ lineHeight: "1.5" }}>Details: </strong>
              {details}
            </IonText>
          </>
        )}
      </IonLabel>
      <ReminderMessageButton
        participant={name}
        time={time}
        messageDetails={messageDetails}
      />
    </IonItem>
  );
};
