import { orderlyPath } from "#shells/orderly/routes.js";
import { CardNav } from "@amodeo/ui/ionic/card-nav/CardNav";
import { congregationIcon } from "@amodeo/ui/ionic/icons/congregation";
import { visitingSpeakerIcon } from "@amodeo/ui/ionic/icons/visiting-speakers";
import { IonItem, IonList, IonText } from "@ionic/react";

export const Publishers = () => (
  <IonList>
    {IS_ALPHA_VERSION && (
      <IonItem>
        <IonText>Alpha</IonText>
      </IonItem>
    )}
    <CardNav
      label="Congregation"
      path={orderlyPath("congregation")}
      color="medium"
      icon={congregationIcon}
    />
    <CardNav
      label="Visiting Speakers"
      path={orderlyPath("visiting_speakers")}
      color="medium"
      icon={visitingSpeakerIcon}
    />
  </IonList>
);
