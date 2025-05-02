import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { Suspense } from 'react';
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { MidweekMeeting } from "../../../../../content/schedules/midweek-meeting/list/MidweekMeeting.js";

export default function MidweekMeetingPage() {
  return (
       <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
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
};

//generated using packages content turbo generators templates page.hbs