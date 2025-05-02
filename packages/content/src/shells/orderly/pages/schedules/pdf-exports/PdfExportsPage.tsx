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
import { PdfExports } from "../../../../../content/schedules/pdf-exports/PdfExports.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";

export default function PdfExportsPage() {
  const { modalProps, pageProps } = useCardModal();
  return (
       <IonPage {...pageProps}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Pdf Exports</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <PdfExports modalProps={modalProps}></PdfExports>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

//generated using packages content turbo generators templates page.hbs