import { IonItem, IonLabel, IonText } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { ReadingMessageButton } from "./reading-message-button/ReadingMessageButton.js";

interface ReadingAccordionContentProps {
  data: Tables<"_view_midweek_meeting_schedule">;
  school: string;
}

export const ReadingAccordionContent = ({
  data,
  school,
}: ReadingAccordionContentProps) => {
  return (
    <div className="ion-padding" slot="content">
      <IonItem lines="none">
        <IonLabel>
          <IonText>
            <strong>Time: </strong>4 min
          </IonText>
        </IonLabel>
      </IonItem>

      <IonItem lines="none">
        <IonLabel>
          <IonText>
            <strong>Details: </strong>
            {data?.midweek_meeting_data.mwb_tgw_bread}
          </IonText>
        </IonLabel>
      </IonItem>
      <ReadingMessageButton data={data} school={school} />
    </div>
  );
};
