// BuildTime

import { IonItem, IonLabel, IonNote, IonText } from "@ionic/react";
import { buildTime } from "@amodeo/util/dateTime/build-time/buildTime";

export const BuildTime = () => {
  return (
    <IonItem>
      <IonLabel>
        <strong>Build Time:</strong>
      </IonLabel>

      <div className="ion-text-end ion-padding-vertical">
        <IonText>{buildTime.formattedBuildTime}</IonText>
        <br />
        <IonNote>{buildTime.timeDifference}</IonNote>
      </div>
    </IonItem>
  );
};
