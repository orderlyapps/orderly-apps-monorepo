import React from "react";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { IonLabel, IonText } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { useStore } from "@amodeo/data/zustand/stores/use-store";

type WeekHeaderProps = {
  week_id: string;
  weekendMeetingDetails?: Tables<"_view_weekend_meeting_pdf">;
};

export const WeekHeader = ({
  week_id,
  weekendMeetingDetails,
}: WeekHeaderProps): React.ReactElement => {
  if (week_id === "2025-06-02")
    return (
      <IonLabel>
        <IonText color={"primary"}>
          <strong>{formatWeekDate(week_id)}</strong>
        </IonText>
        <br />
        <IonText>
          <strong>CIRCUIT ASSEMBLY with Branch Representative</strong>
        </IonText>
      </IonLabel>
    );

  if (week_id === "2025-07-21")
    return (
      <IonLabel>
        <IonText color={"primary"}>
          <strong>{formatWeekDate(week_id)}</strong>
        </IonText>
        <br />
        <IonText>
          <strong>REGIONAL CONVENTION - Pure Worship</strong>
        </IonText>
      </IonLabel>
    );

  return (
    <IonLabel>
      <IonText color={"primary"}>
        <strong>{formatWeekDate(week_id)}</strong>
      </IonText>
      <br />
      <IonText>
        <strong>{weekendMeetingDetails?.outline_theme || "TBC"}</strong>
      </IonText>
      <br />
      <IonText>
        {weekendMeetingDetails?.speaker_first_name && (
          <>
            {`${weekendMeetingDetails?.speaker_first_name} ${weekendMeetingDetails?.speaker_last_name} ` ||
              "TBC"}
            {weekendMeetingDetails?.speakers_congregation_name !==
              useStore.getState().congregation.name &&
              `(${weekendMeetingDetails?.speakers_congregation_name})`}
          </>
        )}
      </IonText>
    </IonLabel>
  );
};
