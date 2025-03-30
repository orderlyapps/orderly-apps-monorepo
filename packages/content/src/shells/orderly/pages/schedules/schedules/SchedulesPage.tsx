import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Suspense } from "react";
import { LoadingSpinner } from "@amodeo/ui/ionic/loading-spinner/LoadingSpinner";
import { ErrorBoundary } from "react-error-boundary";
import {
  midweekMeeting,
  weekendMeeting,
} from "@amodeo/ui/util/ionic/icons/icons";
import { orderlyPath } from "#shells/orderly/routes.js";
import { CardNav } from "@amodeo/ui/ionic/card-nav/CardNav";
import MidweekMeetingPDF from "@amodeo/feature/pdf/midweek-meeting/MidweekMeeting";
import { useMidweekMeetingDataQuery } from "@amodeo/data/react-query/midweek-meeting/tables/use-midweek-meeting-data-query";
import { useMidweekAssignmentsQuery } from "@amodeo/data/react-query/midweek-meeting/views/use-midweek-assignments-query";

export default function SchedulesPage() {
  const { data: midweek_meeting_data } = useMidweekMeetingDataQuery({
    startDate: "2025-05-01",
    endDate: "2025-07-01",
  });
  const { data: midweek_assignments } = useMidweekAssignmentsQuery({
    startDate: "2025-05-01",
    endDate: "2025-07-01",
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Schedules</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Suspense fallback={<LoadingSpinner />}>
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            {midweek_meeting_data && midweek_assignments && (
              <MidweekMeetingPDF.Render
                data={{ midweek_meeting_data, midweek_assignments }}
              ></MidweekMeetingPDF.Render>
            )}
            {/* <CardNav
              label="Midweek Meeting"
              path={orderlyPath("midweek_meeting")}
              icon={midweekMeeting}
            />
            <CardNav
              label="Weekend Meeting"
              path={orderlyPath("weekend_meeting")}
              icon={weekendMeeting}
            /> */}
          </ErrorBoundary>
        </Suspense>
      </IonContent>
    </IonPage>
  );
}

//generated using packages content turbo generators templates page.hbs
