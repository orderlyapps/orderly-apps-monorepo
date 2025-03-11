import { IonItem, IonLabel, IonList, IonText } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";

interface ReadingAccordionHeaderProps {
  data: Tables<"_view_midweek_meeting_schedule">;
  school: string;
}

export const ReadingAccordionHeader = ({ data, school }: ReadingAccordionHeaderProps) => {
  return (
    <IonList slot="header">
      <IonItem lines="none">
        <IonLabel>
          <IonText color="jw_slate_light">
            <strong>3. Bible Reading</strong>
          </IonText>
          <br />
          <div style={{ textAlign: "right" }}>
            <IonText className="ion-text-wrap">
              {formatName(
                data?.midweek_assignments[
                  ("school_" +
                    school +
                    "_bible_reading") as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
                ]
              )}
            </IonText>
          </div>
        </IonLabel>
      </IonItem>
    </IonList>
  );
};
