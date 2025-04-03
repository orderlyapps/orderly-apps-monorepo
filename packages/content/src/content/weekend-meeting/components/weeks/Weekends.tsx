import React from "react";
import { IonAccordion, IonItem } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { WeekHeader } from "./components/week-header/WeekHeader.js";
import { WeekContent } from "./components/week-content/WeekContent.js";
import { chevronExpandOutline } from "ionicons/icons";

type WeekendsProps = {
  week_id?: string;
  data: {
    speakerAssignments?: Tables<"speaker_assignments">[];
    weekendAssignments?: Tables<"_view_weekend_assignments">[];
    outgoingSpeakers?: Tables<"_view_outgoing_speakers_2">[];
  };
};

export const Weekends = ({
  week_id = "",
  data: { speakerAssignments, weekendAssignments, outgoingSpeakers },
}: WeekendsProps): React.ReactElement => {
  const speakerAssignmentsDetails = speakerAssignments?.find(
    (assignment: Tables<"speaker_assignments">) =>
      assignment.week_id === week_id
  );
  const weekendAssignmentsDetails = weekendAssignments?.find(
    (assignment: Tables<"_view_weekend_assignments">) =>
      assignment.week_id === week_id
  );

  const outgoingSpeakersDetails = outgoingSpeakers?.find(
    (assignment: Tables<"_view_outgoing_speakers_2">) =>
      assignment.week_id === week_id
  );

  return (
    <IonAccordion
      value={week_id}
      toggleIcon={chevronExpandOutline}
    >
      <IonItem slot="header" lines="none">
        <WeekHeader
          week_id={week_id}
          speakerAssignmentsDetails={speakerAssignmentsDetails}
        />
      </IonItem>
      <WeekContent
        week_id={week_id}
        weekendAssignmentsDetails={weekendAssignmentsDetails}
        outgoingSpeakersDetails={outgoingSpeakersDetails}
      />
    </IonAccordion>
  );
};
