import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Suspense } from "react";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeSelect } from "@amodeo/ui/ionic/theme-select/ThemeSelect";
import { BuildTime } from "@amodeo/ui/ionic/build-time/BuildTime";
import { CongregationSelect } from "@amodeo/ui/ionic/congregation-select/CongregationSelect";

export default function SettingsPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <IonList inset>
              <ThemeSelect />
              <BuildTime />
              <CongregationSelect />
              <div style={{ marginTop: "3rem" }}></div>
              {IS_ORDERLY_APP && (
                <>
                  <IonButton
                    fill="outline"
                    expand="block"
                    href={`sms://?&body=${encodeURIComponent(`Here is the link to the Proclaimer app 🙂\n\nhttps://proclaimer.pages.dev`)}`}
                    slot="end"
                    className="ion-margin"
                  >
                    Share Proclaimer App
                  </IonButton>
                </>
              )}
            </IonList>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
