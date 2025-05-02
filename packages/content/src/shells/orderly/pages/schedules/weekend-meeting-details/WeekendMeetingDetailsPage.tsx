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
import { WeekendMeetingEdit } from "../../../../../content/schedules/weekend-meeting/details/WeekendMeetingDetails.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";

export default function WeekendMeetingEditPage() {
  const { modalProps, pageProps } = useCardModal();
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  return (
    <IonPage {...pageProps}>
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
            <WeekendMeetingEdit modalProps={modalProps}></WeekendMeetingEdit>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
