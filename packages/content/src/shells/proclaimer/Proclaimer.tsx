import { ReactQueryProvider } from "@amodeo/data/react-query-provider";
import { TabsApp } from "@amodeo/ui/ionic/tabs-app/TabsApp";
import { UpdateNotification } from "@amodeo/ui/ionic/update-notification/UpdateNotification";
import { ORDERLY_ROUTES } from "#shells/orderly/routes.js";

import "@amodeo/ui/ionic/tabs-app/utils/ionicInit";
import "@amodeo/util/css/proclaimer";

export function Proclaimer({ useRegisterSW }: { useRegisterSW?: any }) {
  return (
    <ReactQueryProvider>
      <TabsApp pages={ORDERLY_ROUTES} />
      <UpdateNotification useRegisterSW={useRegisterSW} />
    </ReactQueryProvider>
  );
}
