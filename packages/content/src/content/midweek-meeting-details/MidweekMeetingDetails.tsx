import { useMidweekMeetingScheduleDetailsQuery } from "@amodeo/data/react-query/midweek-meeting/views/use-midweek-meeting-schedule-details-query";
import { SchoolPartsList } from "./school-parts-list/SchoolPartsList.js";

export const MidweekMeetingDetails = ({ week }: { week: string }) => {
  const { data } = useMidweekMeetingScheduleDetailsQuery(week);

  return data ? <SchoolPartsList data={data} /> : null;
};
