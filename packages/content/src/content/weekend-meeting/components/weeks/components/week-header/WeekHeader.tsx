import React from "react";
import { formatWeekDate } from "@amodeo/util/dateTime/format-week-dat/formatWeekDate";
import { IonItem, IonLabel, IonList, IonText } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { usePublishersQuery } from "@amodeo/data/react-query/publishers/tables/use-publishers-query";
import { formatName } from "@amodeo/util/formatters/formatName";
import { useOutlinesQuery } from "@amodeo/data/react-query/weekend-meeting/tables/use-outlines-query";
import { useCongregationsQuery } from "@amodeo/data/react-query/congregations/tables/use-congregations-query";

type WeekHeaderProps = {
  week_id: string;
  speakerAssignmentsDetails?: Tables<"speaker_assignments">;
};

export const WeekHeader = ({
  week_id,
  speakerAssignmentsDetails,
}: WeekHeaderProps): React.ReactElement => {
  const { data: publishers } = usePublishersQuery();
  const { data: congregations } = useCongregationsQuery();
  const { data: outlines } = useOutlinesQuery();

  const speaker = formatName(
    publishers?.find((p) => p.id === speakerAssignmentsDetails?.speaker_id)
  );

  const congregation =
    publishers?.find((p) => p.id === speakerAssignmentsDetails?.speaker_id)
      ?.congregation_id !== speakerAssignmentsDetails?.congregation_id &&
    congregations?.find(
      (c) =>
        c.id ===
        publishers?.find((p) => p.id === speakerAssignmentsDetails?.speaker_id)
          ?.congregation_id
    )?.name;

  const theme = outlines?.find(
    (p) => p.id === speakerAssignmentsDetails?.outline_id
  )?.theme;

  return (
    <IonList slot="header" lines="none">
      <IonItem>
        {week_id !== "2025-06-02" && week_id !== "2025-07-21" && (
          <>
            <IonLabel>
              <IonText color={"primary"}>
                <strong>{formatWeekDate(week_id)}</strong>
              </IonText>
              <br />
              <IonText>
                <strong>{theme || "TBC"}</strong>
              </IonText>
              <br />
              <IonText>
                {speaker || "TBC"} {congregation && `(${congregation})`}
              </IonText>
            </IonLabel>
          </>
        )}
        {week_id === "2025-06-02" && (
          <IonLabel>
            <IonText color={"primary"}>
              <strong>{formatWeekDate(week_id)}</strong>
            </IonText>
            <br />
            <IonText>
              <strong>CIRCUIT ASSEMBLY with Branch Representative</strong>
            </IonText>
          </IonLabel>
        )}
        {week_id === "2025-07-21" && (
          <IonLabel>
            <IonText color={"primary"}>
              <strong>{formatWeekDate(week_id)}</strong>
            </IonText>
            <br />
            <IonText>
              <strong>REGIONAL CONVENTION - Pure Worship</strong>
            </IonText>
          </IonLabel>
        )}
      </IonItem>
    </IonList>
  );
};
