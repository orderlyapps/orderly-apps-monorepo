import { IonItem, IonLabel, IonList, IonText } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";

interface ApplyAccordionHeaderProps {
  data: any;
  school: string;
  part: string;
}

export const ApplyAccordionHeader = ({ data, school, part }: ApplyAccordionHeaderProps) => {
  return (
    <IonList slot="header">
      <IonItem lines="none">
        <IonLabel>
          <IonText color="jw_brown_light">
            <strong>
              {
                data.midweek_meeting_data[
                  ("mwb_ayf_part" +
                    part +
                    "_title") as keyof Tables<"midweek_meeting_data">
                ]
              }
            </strong>
          </IonText>
          <br />
          <div style={{ textAlign: "right" }}>
            <IonText className="ion-text-wrap">
              {formatName(
                data?.midweek_assignments[
                  ("school_" +
                    school +
                    "_apply_" +
                    part) as keyof Tables<"_view_midweek_meeting_schedule">["midweek_assignments"]
                ]
              )}
            </IonText>
          </div>
        </IonLabel>
      </IonItem>
    </IonList>
  );
};
