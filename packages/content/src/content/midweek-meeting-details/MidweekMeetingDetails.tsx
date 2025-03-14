import { useMidweekMeetingScheduleDetailsQuery } from "@amodeo/data/react-query/midweek-meeting/views/use-midweek-meeting-schedule-details-query";
import { School } from "./school/School.js";

export const MidweekMeetingDetails = ({ week }: { week: string }) => {
  const { data } = useMidweekMeetingScheduleDetailsQuery(week);

  return data ? <School data={data} /> : null;
};
