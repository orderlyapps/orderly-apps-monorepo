// import { ORDERLY_ROUTES } from "@workspace/pages/ORDERLY_ROUTES";
// import { ORDERLY_ROUTES } from "@workspace/content/orderly";

import { ReactQueryProvider } from "@amodeo/data/react-query-provider";
import { TabsApp } from "@amodeo/ui/ionic/tabs-app/TabsApp";
import { UpdateNotification } from "@amodeo/ui/ionic/update-notification/UpdateNotification";

import "@amodeo/ui/ionic/tabs-app/utils/ionicInit";
import "@amodeo/util/css/orderly";
import { ORDERLY_ROUTES } from "./routes.js";

export function Orderly({ useRegisterSW }: { useRegisterSW?: any }) {
  return (
    <ReactQueryProvider>
      <TabsApp
      pages={ORDERLY_ROUTES}
      ></TabsApp>
      <UpdateNotification useRegisterSW={useRegisterSW} />
    </ReactQueryProvider>
  );
}
