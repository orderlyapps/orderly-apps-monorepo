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
import { MidweekMeetingEdit } from "../../../../../content/midweek-meeting-edit/MidweekMeetingEdit.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";

export default function MidweekMeetingEditPage() {
  const { modalProps, pageProps } = useCardModal();
  const { week_id } = useOrderlyPageParams("midweek_meeting_edit");

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
            <MidweekMeetingEdit modalProps={modalProps}></MidweekMeetingEdit>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
