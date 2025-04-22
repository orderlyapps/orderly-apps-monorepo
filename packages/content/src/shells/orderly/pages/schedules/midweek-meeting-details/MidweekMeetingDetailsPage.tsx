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
import { MidweekMeetingDetails } from "../../../../../content/midweek-meeting-details_2/MidweekMeetingDetails.js";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";

export default function MidweekMeetingDetailsPage() {
  const { week_id } = useOrderlyPageParams("midweek_meeting_details");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>{formatWeekDate(week_id)}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <MidweekMeetingDetails />
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
