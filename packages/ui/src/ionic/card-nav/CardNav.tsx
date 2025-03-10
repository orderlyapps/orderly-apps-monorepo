import { IonCard, IonItem, IonIcon, IonLabel } from "@ionic/react";
import { chevronForward } from "ionicons/icons";
import { IonicThemeColors } from "../ionic-types.js";

export function CardNav({
  label,
  path,
  icon,
  color = "medium",
}: {
  label: string;
  path: string;
  icon: string;
  color?: IonicThemeColors;
}) {
  return (
    <div>
      <IonCard routerLink={path} className="ion-padding" color={color}>
        <IonItem lines="none" color={color}>
          <IonIcon slot="start" icon={icon} />
          <IonLabel>
            <strong>{label}</strong>
          </IonLabel>
          <IonIcon slot="end" icon={chevronForward} />
        </IonItem>
      </IonCard>
    </div>
  );
}
