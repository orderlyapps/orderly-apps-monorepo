import { orderlyPath } from "#shells/orderly/routes.js";
import { CardNav } from "@amodeo/ui/ionic/card-nav/CardNav";
import { congregationIcon } from "@amodeo/ui/ionic/icons/congregation";
import { visitingSpeakerIcon } from "@amodeo/ui/ionic/icons/visiting-speakers";
import { IonList } from "@ionic/react";

export const Publishers = () => (
  <IonList>
    <CardNav
      label="Congregation"
      path={orderlyPath("congregation")}
      color="jw_slate"
      icon={congregationIcon}
    />
    <CardNav
      label="Visiting Speakers"
      path={orderlyPath("visiting_speakers")}
      color="jw_slate"
      icon={visitingSpeakerIcon}
    />
  </IonList>
);
