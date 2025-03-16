import { IonItem, IonLabel, IonText } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { ReadingMessageButton } from "./reading-message-button/ReadingMessageButton.js";
import TemplatePDF from "@amodeo/feature/pdf/util/TemplatePDF";
import StudentAssignmentPDF from "@amodeo/feature/pdf/student-assignment/StudentAssignment";

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
            <strong style={{ lineHeight: "1.5" }}>Time: </strong>4 min
          </IonText>
          <br />
          <IonText>
            <strong style={{ lineHeight: "1.5" }}>Details: </strong>
            {data?.midweek_meeting_data.mwb_tgw_bread}
          </IonText>
        </IonLabel>
      </IonItem>

      <div style={{ height: "100vh" }}>
        <StudentAssignmentPDF.Render />
      </div>

      <ReadingMessageButton data={data} school={school} />
    </div>
  );
};
