import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Suspense } from "react";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { CardNav } from "@amodeo/ui/ionic/card-nav/CardNav";
import { notAtHomes } from "@amodeo/ui/util/ionic/icons/icons";
import { orderlyPath } from "#shells/orderly/routes.js";
import { locateOutline, locationOutline, mapOutline } from "ionicons/icons";

export default function MinistryPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Ministry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <CardNav
              label="Maps"
              path={orderlyPath("map_list")}
              icon={mapOutline}
            />
            <CardNav
              label="Not At Homes"
              path={orderlyPath("not_at_homes")}
              icon={locationOutline}
            />
            <CardNav
              label="Letter Writing"
              path={orderlyPath("letter_writing")}
              icon={notAtHomes}
            />
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
