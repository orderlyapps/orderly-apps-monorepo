import { orderlyPath } from "#shells/orderly/routes.js";
import { WeekList } from "@amodeo/ui/ionic/week-list/WeekList";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { IonItem, IonText } from "@ionic/react";
import { useState } from "react";

export const MidweekMeeting = () => {
  const [_scheduleDates, setScheduleDates] = useState({
    startDate: "",
    endDate: "",
  });
  return (
    <WeekList setScheduleDates={setScheduleDates}>
      <WeekItem></WeekItem>
    </WeekList>
  );
};

const WeekItem = ({
  week_id = "",
  isCurrentWeek,
}: {
  week_id?: string;
  isCurrentWeek?: boolean;
}) => {
  return (
    <IonItem
      detail
      routerLink={orderlyPath("midweek_meeting_details", { week_id })}
      lines="none"
      className="ion-margin"
    >
      {!isCurrentWeek && <strong>{formatWeekDate(week_id)}</strong>}
      {isCurrentWeek && (
        <IonText color="primary">
          <h4>
            <strong>This Week</strong>
          </h4>
        </IonText>
      )}
    </IonItem>
  );
};
