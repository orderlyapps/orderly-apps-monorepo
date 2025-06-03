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
import { orderlyPath, useOrderlyPageParams } from "#shells/orderly/routes.js";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { MidweekMeetingDetails } from "#content/schedules/midweek-meeting/details/MidweekMeetingDetails.js";
import { chevronBack } from "ionicons/icons";

export default function MidweekMeetingDetailsPage() {
  const { week_id } = useOrderlyPageParams("midweek_meeting_details");

  // Convert week_id to a date, subtract 7 days, and format back to week_id string
  const previousWeekId = new Date(week_id);
  previousWeekId.setDate(previousWeekId.getDate() - 7);
  const previousWeek = previousWeekId.toISOString().split("T")[0] || week_id;

  // Convert week_id to a date, add 7 days, and format back to week_id string
  const nextWeekId = new Date(week_id);
  nextWeekId.setDate(nextWeekId.getDate() + 7);
  const nextWeek = nextWeekId.toISOString().split("T")[0] || week_id;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink={orderlyPath("midweek_meeting")}
              routerDirection="back"
            >
              <IonIcon slot="start" icon={chevronBack} />
              Back
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar color="medium">
          <IonButtons slot="start">
            <IonButton
              routerLink={orderlyPath("midweek_meeting_details", {
                week_id: previousWeek,
              })}
              routerDirection="back"
            >
              Previous
            </IonButton>
          </IonButtons>
          <IonTitle>{formatWeekDate(week_id)}</IonTitle>
          <IonButtons slot="end">
            <IonButton
              routerLink={orderlyPath("midweek_meeting_details", {
                week_id: nextWeek,
              })}
            >
              Next
            </IonButton>
          </IonButtons>
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
