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
import { Cleaning } from "../../../../../content/schedules/cleaning/Cleaning.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";

export default function CleaningPage() {
  const { modalProps, pageProps } = useCardModal();
  return (
       <IonPage {...pageProps}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Cleaning</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Cleaning modalProps={modalProps}></Cleaning>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

//generated using packages content turbo generators templates page.hbs