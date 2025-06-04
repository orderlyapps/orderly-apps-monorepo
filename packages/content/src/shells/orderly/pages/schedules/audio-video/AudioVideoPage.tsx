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
import { AudioVideo } from "../../../../../content/schedules/audio-video/AudioVideo.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";

export default function AudioVideoPage() {
  const { modalProps, pageProps } = useCardModal();
  return (
       <IonPage {...pageProps}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Audio Video</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <AudioVideo modalProps={modalProps}></AudioVideo>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
};

//generated using packages content turbo generators templates page.hbs