import { orderlyPath } from "#shells/orderly/routes.js";
import { WeekList } from "@amodeo/ui/ionic/week-list/WeekList";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { IonItem } from "@ionic/react";
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

const WeekItem = ({ week_id = "" }: { week_id?: string }) => {
  return (
    <IonItem
      detail
      routerLink={orderlyPath("midweek_meeting_details", { week_id })}
    >
      <strong>{formatWeekDate(week_id)}</strong>
    </IonItem>
  );
};
