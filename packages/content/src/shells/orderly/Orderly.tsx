// import { ORDERLY_ROUTES } from "@workspace/pages/ORDERLY_ROUTES";
// import { ORDERLY_ROUTES } from "@workspace/content/orderly";

// import { IonTabsApp } from "@workspace/ionic/IonTabsApp";

// import "@workspace/css/utilities";
// import "@workspace/css/jw_colors";
// import "@workspace/css/orderly";
import { ReactQueryProvider } from "@amodeo/data/react-query-provider";
import { IonTabsApp } from "@amodeo/ui/ionic/ion-tabs-app/IonTabsApp";
// import { UpdateNotification } from "@workspace/ionic/UpdateNotification";

export function Orderly({ useRegisterSW }: { useRegisterSW?: any }) {
  return (
    <ReactQueryProvider>
      <IonTabsApp 
      // pages={ORDERLY_ROUTES}
      ></IonTabsApp>
      {/* <UpdateNotification useRegisterSW={useRegisterSW} /> */}
    </ReactQueryProvider>
  );
}
