import { ReactQueryProvider } from "@amodeo/data/react-query-provider";
import { TabsApp } from "@amodeo/ui/ionic/tabs-app/TabsApp";
import { UpdateNotification } from "@amodeo/ui/ionic/update-notification/UpdateNotification";
import { ORDERLY_ROUTES } from "./routes.js";

import "@amodeo/ui/ionic/tabs-app/utils/ionicInit";
import "@amodeo/util/css/orderly";

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
