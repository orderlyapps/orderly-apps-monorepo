import { useMidweekMeetingScheduleDetailsQuery } from "@amodeo/data/react-query/midweek-meeting/views/use-midweek-meeting-schedule-details-query";

export const MidweekMeetingDetails = ({ week }: { week: string }) => {
  const { data } = useMidweekMeetingScheduleDetailsQuery(week);
  console.log("🚀 ~ MidweekMeetingDetails ~ data:", data);
  return <div className="full centered">{week}</div>;
};
