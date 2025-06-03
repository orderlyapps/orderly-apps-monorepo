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
import { useSettings } from "../../settings/settings/SettingsPage.js";
import { PasswordProtect } from "../../PasswordProtect.js";

export default function SchedulesPage() {
  const { hasAccess } = useSettings();

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
            {hasAccess ? (
              <>
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
                <CardNav
                  label="Field Service"
                  path={orderlyPath("field_service")}
                  icon={weekendMeeting}
                />
                {IS_ORDERLY_APP && (
                  <CardNav
                    label="PDF Exports"
                    path={orderlyPath("pdf_exports")}
                    icon={downloadPDF}
                  />
                )}
              </>
            ) : (
              <PasswordProtect />
            )}
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
