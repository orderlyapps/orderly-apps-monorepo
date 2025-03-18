import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";
import { IonItem, IonLabel, IonList, IonText } from "@ionic/react";

export const AccordionHeader = ({
  part,
  participant,
  color,
}: {
  part: string;
  participant?: Tables<"publishers">;
  color?: "" | "jw_slate_light" | "jw_brown_light" | "jw_red_light" | "medium";
}) => {
  return (
    <IonList slot="header">
      <IonItem lines="none">
        <IonLabel>
          <IonText color={color}>
            <strong>{part}</strong>
          </IonText>
          <br />
          <div style={{ textAlign: "right" }}>
            <IonText className="ion-text-wrap">
              {formatName(participant)}
            </IonText>
          </div>
        </IonLabel>
      </IonItem>
    </IonList>
  );
};
