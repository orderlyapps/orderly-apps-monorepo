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
import {
  downloadPDF,
  midweekMeeting,
  weekendMeeting,
} from "@amodeo/ui/util/ionic/icons/icons";
import { orderlyPath } from "#shells/orderly/routes.js";
import { CardNav } from "@amodeo/ui/ionic/card-nav/CardNav";

export default function SchedulesPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Schedules</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <CardNav
              label="Midweek Meeting"
              path={orderlyPath("midweek_meeting")}
              icon={midweekMeeting}
            />
            <CardNav
              label="Weekend Meeting"
              path={orderlyPath("weekend_meeting")}
              icon={weekendMeeting}
            />
            {IS_ORDERLY_APP && (
              <CardNav
                label="PDF Exports"
                path={orderlyPath("pdf_exports")}
                icon={downloadPDF}
              />
            )}
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
