import React, { useState } from "react";
import { WeekList } from "@amodeo/ui/ionic/week-list/WeekList";
import { useSpeakerAssignmentsQuery } from "@amodeo/data/react-query/weekend-meeting/tables/use-speaker-assignments-query";
import { Weekends } from "./components/weeks/Weekends.js";
import { useWeekendAssignmentsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-assignments-query";
import { IonAccordionGroup } from "@ionic/react";
import { useOutgoingSpeakersQuery } from "@amodeo/data/react-query/weekend-meeting/use-outgoing-speakers-query";

export const WeekendMeeting = () => {
  const [scheduleDates, setScheduleDates] = useState<{
    startDate: string;
    endDate: string;
  }>({
    startDate: "",
    endDate: "",
  });

  const { data: speakerAssignments } =
    useSpeakerAssignmentsQuery(scheduleDates);

  const { data: weekendAssignments } = useWeekendAssignmentsQuery(
    scheduleDates,
    { enabled: !!speakerAssignments }
  );

  const { data: outgoingSpeakers } = useOutgoingSpeakersQuery(scheduleDates, {
    enabled: !!weekendAssignments,
  });

  return (
    <IonAccordionGroup>
      <WeekList setScheduleDates={setScheduleDates}>
        <Weekends
          data={{ speakerAssignments, weekendAssignments, outgoingSpeakers }}
        />
      </WeekList>
    </IonAccordionGroup>
  );
};
