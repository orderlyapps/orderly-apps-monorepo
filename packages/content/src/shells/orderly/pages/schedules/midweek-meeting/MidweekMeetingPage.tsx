import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Suspense } from "react";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { MidweekMeeting } from "../../../../../content/schedules/midweek-meeting/list/MidweekMeeting.js";
import { orderlyPath } from "#shells/orderly/routes.js";
import { chevronBack } from "ionicons/icons";

export default function MidweekMeetingPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink={orderlyPath("schedules")}
              routerDirection="back"
            >
              <IonIcon slot="start" icon={chevronBack} />
              Back
            </IonButton>
          </IonButtons>
          <IonTitle>Midweek Meeting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <MidweekMeeting></MidweekMeeting>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
