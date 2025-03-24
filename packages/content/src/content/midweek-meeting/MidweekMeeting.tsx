import { orderlyPath } from "#shells/orderly/routes.js";
import { WeeksList } from "@amodeo/ui/util/ionic/week-list/WeeksList";
import { midweekMeeting } from "@amodeo/ui/util/ionic/icons/icons";

export const MidweekMeeting = () => {
  return (
    <div className="full centered">
      <WeeksList
        pathFunction={orderlyPath as any}
        page={"midweek_meeting_details"}
        icon={midweekMeeting}
      />
    </div>
  );
};
