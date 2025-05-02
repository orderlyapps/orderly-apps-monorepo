import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Suspense } from "react";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import { MapList } from "../../../../../content/ministry/map-list/MapList.js";
import { orderlyPath } from "#shells/orderly/routes.js";
import { useState } from "react";
import { Searchbar } from "@amodeo/ui/ionic/searchbar/Searchbar";
import { filterCircle, filterCircleOutline } from "ionicons/icons";
import { useLocalStorage } from "usehooks-ts";

export default function MapListPage() {
  const [query, setQuery] = useLocalStorage<string>("mapListQuery", "");
  const [filterFavourites, setFilterFavourites] = useLocalStorage(
    "filterFavourites",
    false
  );
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Maps</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => setFilterFavourites(!filterFavourites)}>
              <IonIcon
                slot="icon-only"
                icon={filterFavourites ? filterCircle : filterCircleOutline}
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        {!filterFavourites && (
          <>
            <IonToolbar>
              <Searchbar
                onIonInput={(e) => {
                  setQuery(e.detail.value as string);
                }}
                value={query}
              ></Searchbar>
            </IonToolbar>
          </>
        )}
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <MapList pathFunction={orderlyPath}></MapList>
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
