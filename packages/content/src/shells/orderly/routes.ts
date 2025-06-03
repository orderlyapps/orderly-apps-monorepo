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
  publishers,
  settings,
} from "@amodeo/ui/util/ionic/icons/icons";
import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";

export const ORDERLY_PAGES = {
  field_service:{
    path: '/schedules/field-service',
    // params: { id: '' },
    Component: lazy(
      () => import('./pages/schedules/field-service/FieldServicePage.js')
    ),
  },
  visiting_speaker_details: {
    path: "/publishers/visiting-speaker-details",
    // params: { id: '' },
    Component: lazy(
      () =>
        import(
          "./pages/publishers/visiting-speaker-details/VisitingSpeakerDetailsPage.js"
        )
    ),
  },
  publisher_details: {
    path: "/publishers/publisher-details",
    params: { publisher_id: "" },
    Component: lazy(
      () =>
        import("./pages/publishers/publisher-details/PublisherDetailsPage.js")
    ),
  },
  visiting_speakers: {
    path: "/publishers/visiting-speakers",
    // params: { id: '' },
    Component: lazy(
      () =>
        import("./pages/publishers/visiting-speakers/VisitingSpeakersPage.js")
    ),
  },
  congregation: {
    path: "/publishers/congregation",
    // params: { id: '' },
    Component: lazy(
      () => import("./pages/publishers/congregation/CongregationPage.js")
    ),
  },
  // publishers:{
  //   path: '/publishers/publishers',
  //   // params: { id: '' },
  //   Component: lazy(
  //     () => import('./pages/publishers/publishers/PublishersPage.js')
  //   ),
  // },
  midweek_meeting_edit: {
    path: "/schedules/midweek-meeting-edit",
    params: { assignment_id: "" as MidweekAssignments, week_id: "" },
    Component: lazy(
      () =>
        import(
          "./pages/schedules/midweek-meeting-edit/MidweekMeetingEditPage.js"
        )
    ),
  },
  pdf_exports: {
    path: "/schedules/pdf-exports",
    // params: { id: '' },
    Component: lazy(
      () => import("./pages/schedules/pdf-exports/PdfExportsPage.js")
    ),
  },
  weekend_meeting: {
    path: "/schedules/weekend-meeting",
    Component: lazy(
      () => import("./pages/schedules/weekend-meeting/WeekendMeetingPage.js")
    ),
  },
  weekend_meeting_details: {
    path: "/schedules/weekend-meeting-details",
    params: { week_id: "" },
    Component: lazy(
      () =>
        import(
          "./pages/schedules/weekend-meeting-details/WeekendMeetingDetailsPage.js"
        )
    ),
  },
  letter_writing: {
    path: "/ministry/letter-writing",
    // params: '{ id: '' }',
    Component: lazy(
      () => import("./pages/ministry/letter-writing/LetterWritingPage.js")
    ),
  },
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
    params: { week_id: "" },
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
  ...(IS_ORDERLY_APP && {
    publishers: {
      path: "/publishers",
      tab: IS_ORDERLY_APP ? "Publishers" : undefined,
      icon: publishers,
      Component: lazy(
        () => import("./pages/publishers/publishers/PublishersPage.js")
      ),
      redirect: true,
    },
  }),
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
