import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Suspense } from "react";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { MidweekMeetingEdit } from "../../../../../content/schedules/midweek-meeting/edit/MidweekMeetingEdit.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { orderlyPath, useOrderlyPageParams } from "#shells/orderly/routes.js";
import { chevronBack, chevronForward } from "ionicons/icons";

export default function MidweekMeetingEditPage() {
  const { modalProps, pageProps } = useCardModal();
  const { week_id, assignment_id } = useOrderlyPageParams(
    "midweek_meeting_edit"
  );

  // Convert week_id to a date, subtract 7 days, and format back to week_id string
  const previousWeekId = new Date(week_id);
  previousWeekId.setDate(previousWeekId.getDate() - 7);
  const previousWeek = previousWeekId.toISOString().split("T")[0] || week_id;

  // Convert week_id to a date, add 7 days, and format back to week_id string
  const nextWeekId = new Date(week_id);
  nextWeekId.setDate(nextWeekId.getDate() + 7);
  const nextWeek = nextWeekId.toISOString().split("T")[0] || week_id;

  return (
    <IonPage {...pageProps}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton
              routerLink={orderlyPath("midweek_meeting_details", {
                week_id,
              })}
              routerDirection="back"
            >
              <IonIcon slot="start" icon={chevronBack} />
              Back
            </IonButton>
          </IonButtons>
        </IonToolbar>

        <IonToolbar color={"medium"}>
          <IonButtons slot="start">
            <IonButton
              routerLink={orderlyPath("midweek_meeting_edit", {
                week_id: previousWeek,
                assignment_id,
              })}
              routerDirection="back"
            >
              Previous
            </IonButton>
          </IonButtons>

          <IonTitle>
            <IonText>{formatWeekDate(week_id)}</IonText>
          </IonTitle>

          <IonButtons slot="end">
            <IonButton
              routerLink={orderlyPath("midweek_meeting_edit", {
                week_id: nextWeek,
                assignment_id,
              })}
              routerDirection="forward"
            >
              Next
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <MidweekMeetingEdit modalProps={modalProps}></MidweekMeetingEdit>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
