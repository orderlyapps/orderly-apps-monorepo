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
import { CardNav } from "@amodeo/ui/ionic/card-nav/CardNav";
import { notAtHomes } from "@amodeo/ui/util/ionic/icons/icons";
import { orderlyPath } from "#shells/orderly/routes.js";
import { locationOutline, mapOutline } from "ionicons/icons";
import { useSettings } from "../../settings/settings/SettingsPage.js";
import { PasswordProtect } from "../../PasswordProtect.js";

export default function MinistryPage() {
  const { hasAccess } = useSettings();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Ministry</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            {hasAccess ? (
              <>
                <CardNav
                  label="Maps"
                  path={orderlyPath("map_list")}
                  icon={mapOutline}
                  // color="jw_brown"
                />
                <CardNav
                  label="Not At Homes"
                  path={orderlyPath("not_at_homes")}
                  icon={locationOutline}
                  // color="jw_brown"
                />
                <CardNav
                  label="Letter Writing"
                  path={orderlyPath("letter_writing")}
                  icon={notAtHomes}
                  // color="jw_brown"
                />
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
