import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Suspense } from "react";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { MapList } from "../../../../../content/map-list/MapList.js";
import { orderlyPath } from "#shells/orderly/routes.js";
import { useState } from "react";
import { Searchbar } from "@amodeo/ui/ionic/searchbar/Searchbar";

export default function MapListPage() {
  const [query, setQuery] = useState<string>("");
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Maps</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <Searchbar
            onIonInput={(e) => {
              setQuery(e.detail.value as string);
            }}
          ></Searchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <MapList pathFunction={orderlyPath} query={query}></MapList>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
