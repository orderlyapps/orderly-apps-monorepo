import { lazy } from "react";

import {
  getPaths,
  getRoutes,
  getUseParams,
} from "@amodeo/ui/util/ionic/tabs-app/utils/pathFunctions";
import {
  schedules,
  // home,
  ministry,
  // publishers,
  settings,
} from "@amodeo/ui/util/ionic/icons/icons";

export const ORDERLY_PAGES = {
  map_details: {
    path: "/ministry/map-details",
    params: { mapID: "", fileType: "" },
    Component: lazy(
      () => import("./pages/ministry/map-details/MapDetailsPage.js")
    ),
  },
  map_list: {
    path: "/ministry/map-list",
    Component: lazy(() => import("./pages/ministry/map-list/MapListPage.js")),
  },
  midweek_meeting_details: {
    path: "/schedules/midweek-meeting-details",
    params: { week: "" },
    Component: lazy(
      () =>
        import(
          "./pages/schedules/midweek-meeting-details/MidweekMeetingDetailsPage.js"
        )
    ),
  },
  midweek_meeting: {
    path: "/schedules/midweek-meeting",
    Component: lazy(
      () => import("./pages/schedules/midweek-meeting/MidweekMeetingPage.js")
    ),
  },
  not_at_homes: {
    path: "/ministry/not-at-homes",
    Component: lazy(
      () => import("./pages/ministry/not-at-homes/NotAtHomesPage.js")
    ),
  },
  // home: {
  //   path: "/home",
  //   tab: "Home",
  //   icon: home,
  //   Component: lazy(
  //     () => import("./pages/home/home/HomePage.js")
  //   ),
  //   redirect: true,
  // },
  // publishers: {
  //   path: "/publishers",
  //   tab: "Publishers",
  //   icon: publishers,
  //   Component: lazy(
  //     () =>
  //       import(
  //         "../pages/orderly/publishers/orderly-publishers/OrderlyPublishersPage"
  //       )
  //   ),
  //   redirect: true,
  // },
  ministry: {
    path: "/ministry",
    tab: "Ministry",
    icon: ministry,
    Component: lazy(() => import("./pages/ministry/ministry/MinistryPage.js")),
    redirect: true,
  },
  schedules: {
    path: "/schedules",
    tab: "Schedules",
    icon: schedules,
    Component: lazy(
      () => import("./pages/schedules/schedules/SchedulesPage.js")
    ),
    redirect: true,
  },

  settings: {
    path: "/settings",
    tab: "Settings",
    icon: settings,
    Component: lazy(() => import("./pages/settings/settings/SettingsPage.js")),
  },
};

export const orderlyPath = getPaths(ORDERLY_PAGES);

export const useOrderlyPageParams = getUseParams(ORDERLY_PAGES);

export const ORDERLY_ROUTES = getRoutes(ORDERLY_PAGES);
