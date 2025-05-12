import { IonButton, IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";

export function EditButton({
  onClick,
  size = "large",
  slot = "end",
}: {
  onClick: () => void;
  size?: "small" | "large";
  slot?: "start" | "end";
}) {
  return (
    <IonButton slot={slot} fill="clear" onClick={onClick}>
      <IonIcon slot="icon-only" icon={createOutline} size={size}></IonIcon>
    </IonButton>
  );
}
