import { useState } from "react";
import { WeekList } from "@amodeo/ui/ionic/week-list/WeekList";
import { Weekends } from "./components/weeks/Weekends.js";
import { IonAccordionGroup } from "@ionic/react";
import { useWeekendMeetingPdfQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-meeting-pdf-query";

export const WeekendMeeting = () => {
  const [scheduleDates, setScheduleDates] = useState({
    startDate: "",
    endDate: "",
  });

  const { data: weekendMeetingData } = useWeekendMeetingPdfQuery(scheduleDates);

  return (
    <IonAccordionGroup>
      <WeekList setScheduleDates={setScheduleDates}>
        <Weekends weekendMeetingData={weekendMeetingData} />
      </WeekList>
    </IonAccordionGroup>
  );
};
