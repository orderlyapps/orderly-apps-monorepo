import { useMidweekMeetingDataQuery } from "@amodeo/data/react-query/midweek-meeting/tables/use-midweek-meeting-data-query";
import { useMidweekAssignmentsQuery } from "@amodeo/data/react-query/midweek-meeting/views/use-midweek-assignments-query";
import { useWeekendMeetingPdfQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-meeting-pdf-query";
import MidweekMeetingPDF from "@amodeo/feature/pdf/midweek-meeting/MidweekMeetingPDF";
import WeekendMeetingPDF from "@amodeo/feature/pdf/weekend-meeting/WeekendMeetingPDF";
import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { IonButton } from "@ionic/react";

export const PdfExports = ({
  children,
  modalProps,
}: {
  children?: React.ReactNode;
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { data: midweek_meeting_data } = useMidweekMeetingDataQuery({
    startDate: "2025-05-01",
    endDate: "2025-07-01",
  });
  const { data: midweek_assignments } = useMidweekAssignmentsQuery({
    startDate: "2025-05-01",
    endDate: "2025-07-01",
  });
  const {
    data: weekend_meeting_pdf,
    isPending,
    isError,
  } = useWeekendMeetingPdfQuery({
    startDate: "2025-04-21",
    endDate: "2025-06-30",
  });
  if (isPending) {
    return null;
  }
  if (isError) {
    return null;
  }
  return (
    <div className="full centered">
      <div>
        {weekend_meeting_pdf && (
          <WeekendMeetingPDF.Download data={weekend_meeting_pdf}>
            <IonButton>Weekend Meeting</IonButton>
          </WeekendMeetingPDF.Download>
        )}
      </div>
      <br />
      <div>
        {midweek_meeting_data && midweek_assignments && (
          <MidweekMeetingPDF.Download
            data={{ midweek_meeting_data, midweek_assignments }}
          >
            <IonButton>Midweek Meeting</IonButton>
          </MidweekMeetingPDF.Download>
        )}
      </div>
    </div>
  );
};
