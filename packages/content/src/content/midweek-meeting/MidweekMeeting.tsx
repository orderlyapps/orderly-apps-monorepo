import { orderlyPath } from "#shells/orderly/routes.js";
import { WeeksList } from "@amodeo/ui/ionic/week-list/WeeksList";
import { midweekMeeting } from "@amodeo/ui/util/ionic/icons/icons";

export const MidweekMeeting = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="full centered">
      <WeeksList
        pathFunction={orderlyPath}
        page={"midweek_meeting_details"}
        icon={midweekMeeting}
      />
    </div>
  );
};
