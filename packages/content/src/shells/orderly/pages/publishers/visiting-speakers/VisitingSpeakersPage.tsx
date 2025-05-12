import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Suspense } from "react";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { VisitingSpeakers } from "../../../../../content/publishers/visiting-speakers/VisitingSpeakers.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { useNewVisitingSpeakerForm } from "#content/publishers/visiting-speakers/hooks/use-new-visiting-speaker-form.js";
import { add } from "ionicons/icons";
import { AddVisitingSpeakerModal } from "#content/publishers/visiting-speakers/modal/AddVisitingSpeakerModal.js";

export default function VisitingSpeakersPage() {
  const { modalProps, pageProps } = useCardModal();
  const { openModal } = useNewVisitingSpeakerForm();
  return (
    <IonPage {...pageProps}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Visiting Speakers</IonTitle>{" "}
          <IonButtons slot="end">
            <IonButton onClick={() => openModal()}>
              <IonIcon icon={add} size="large" color="primary"></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <AddVisitingSpeakerModal modalProps={modalProps}></AddVisitingSpeakerModal>
            <VisitingSpeakers modalProps={modalProps}></VisitingSpeakers>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
