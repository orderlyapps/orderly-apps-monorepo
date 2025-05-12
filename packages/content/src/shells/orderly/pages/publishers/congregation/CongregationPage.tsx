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
import { Congregation } from "../../../../../content/publishers/congregation/list/CongregationList.js";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { useNewPublisherForm } from "../../../../../content/publishers/congregation/hooks/use-new-publisher-form.js";
import { AddPublisherModal } from "#content/publishers/congregation/modal/AddPublisherModal.js";
import { add } from "ionicons/icons";

export default function CongregationPage() {
  const { modalProps, pageProps } = useCardModal();

  const { openModal } = useNewPublisherForm();
  return (
    <IonPage {...pageProps}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Congregation</IonTitle>
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
            <AddPublisherModal modalProps={modalProps}></AddPublisherModal>
            <Congregation modalProps={modalProps}></Congregation>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
