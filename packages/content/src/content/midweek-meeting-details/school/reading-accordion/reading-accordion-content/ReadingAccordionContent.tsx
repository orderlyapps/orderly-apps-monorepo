import { IonButton, IonIcon, IonItem, IonLabel, IonText } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { ReadingMessageButton } from "./reading-message-button/ReadingMessageButton.js";
import StudentAssignmentPDF from "@amodeo/feature/pdf/student-assignment/StudentAssignment";
import { downloadPDF, notAtHomes } from "@amodeo/ui/util/ionic/icons/icons";

interface ReadingAccordionContentProps {
  data: Tables<"_view_midweek_meeting_schedule">;
  school: string;
  assignment: string;
}

export const ReadingAccordionContent = ({
  data,
  school,
  assignment,
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

      <IonItem >
        <IonButton fill="clear" expand="block" slot="end" className="ion-padding-end">
          <StudentAssignmentPDF.Download
            data={{
              data,
              school,
              assignment: "school_" + school + "_bible_reading",
            }}
          >
            <IonIcon icon={downloadPDF} slot="icon-only" size="large"></IonIcon>
          </StudentAssignmentPDF.Download>
        </IonButton>
        <ReadingMessageButton data={data} school={school} />
      </IonItem>
    </div>
  );
};
