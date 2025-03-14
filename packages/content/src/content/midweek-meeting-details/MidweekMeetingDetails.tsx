import { useMidweekMeetingScheduleDetailsQuery } from "@amodeo/data/react-query/midweek-meeting/views/use-midweek-meeting-schedule-details-query";
import { School } from "./school/School.js";
import TemplatePDF from "@amodeo/feature/pdf/util/TemplatePDF";

export const MidweekMeetingDetails = ({ week }: { week: string }) => {
  const { data } = useMidweekMeetingScheduleDetailsQuery(week);

  return data ? (
    <div
      className="full centered"
      style={{ backgroundColor: "lightgreen" }}
    >
      <TemplatePDF.Render />

      {/* <School data={data} /> */}
    </div>
  ) : null;
};
