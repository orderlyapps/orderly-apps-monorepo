import React from "react";
import { IonAccordion, IonItem } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { WeekHeader } from "./components/week-header/WeekHeader.js";
import { WeekContent } from "./components/week-content/WeekContent.js";
import { chevronExpandOutline } from "ionicons/icons";

type WeekendsProps = {
  week_id?: string;
  weekendMeetingData?: Tables<"_view_weekend_meeting_pdf">[];
};

export const Weekends = ({
  week_id = "",
  weekendMeetingData,
}: WeekendsProps): React.ReactElement => {
  const weekendMeetingDetails = weekendMeetingData?.find(
    (assignment: Tables<"_view_weekend_meeting_pdf">) =>
      assignment.week_id === week_id
  );

  return (
    <IonAccordion value={week_id} toggleIcon={chevronExpandOutline}>
      <IonItem slot="header">
        <WeekHeader
          week_id={week_id}
          weekendMeetingDetails={weekendMeetingDetails}
        />
      </IonItem>
      <WeekContent
        week_id={week_id}
        weekendMeetingDetails={weekendMeetingDetails}
      />
    </IonAccordion>
  );
};
