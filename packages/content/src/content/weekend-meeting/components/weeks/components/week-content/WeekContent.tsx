import React from "react";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonText,
} from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { formatName } from "@amodeo/util/formatters/formatName";
import { usePublishersQuery } from "@amodeo/data/react-query/publishers/tables/use-publishers-query";
import { useCongregationsQuery } from "@amodeo/data/react-query/congregations/tables/use-congregations-query";
import { orderlyPath } from "#shells/orderly/routes.js";

type WeekContentProps = {
  weekendAssignmentsDetails?: Tables<"_view_weekend_assignments">;
  outgoingSpeakersDetails?: Tables<"_view_outgoing_speakers_2">;
  week_id: string;
};

const LABEL_SIZE = "4";

export const WeekContent = ({
  weekendAssignmentsDetails,
  outgoingSpeakersDetails,
  week_id,
}: WeekContentProps): React.ReactElement => {
  const { data: publishers } = usePublishersQuery();
  const { data: congregations } = useCongregationsQuery();

  const chairman = formatName(
    publishers?.find((p) => p.id === weekendAssignmentsDetails?.chairman_id)
  );
  const reader = formatName(
    publishers?.find((p) => p.id === weekendAssignmentsDetails?.reader_id)
  );

  const outgoingSpeakers = outgoingSpeakersDetails?.outgoing_speakers.filter(
    (s) => s.congregation_id !== weekendAssignmentsDetails?.congregation_id
  );

  return (
    <IonList slot="content">
      <IonItem lines="none">
        <IonLabel>
          <IonGrid>
            {publishers?.find(
              (p) => p.id === weekendAssignmentsDetails?.chairman_id
            ) && (
              <>
                <IonRow>
                  <IonCol size={LABEL_SIZE}>
                    <IonText>
                      <strong>Chairman:</strong>
                    </IonText>
                  </IonCol>
                  <IonCol>
                    <IonText>{chairman || "TBC"}</IonText>
                  </IonCol>
                </IonRow>
              </>
            )}
            {publishers?.find(
              (p) => p.id === weekendAssignmentsDetails?.reader_id
            ) && (
              <>
                <IonRow>
                  <IonCol size={LABEL_SIZE}>
                    <IonText>
                      <strong>Reader:</strong>
                    </IonText>
                  </IonCol>
                  <IonCol>
                    <IonText>{reader || "TBC"}</IonText>
                  </IonCol>
                </IonRow>
              </>
            )}
            {outgoingSpeakers &&
              outgoingSpeakers.map((speaker, index) => (
                <IonRow key={speaker.speaker_id}>
                  <IonCol size={LABEL_SIZE}>
                    <IonText>
                      <strong>{index === 0 && "Outgoing:"}</strong>
                    </IonText>
                  </IonCol>
                  <IonCol>
                    <IonText>
                      {formatName(
                        publishers?.find((p) => p.id === speaker.speaker_id)
                      ) || "TBC"}
                      {" - "}
                      {speaker.outline_id}
                    </IonText>
                    <br />
                    <IonText>
                      (
                      {congregations?.find(
                        (c) => c.id === speaker.congregation_id
                      )?.name || "TBC"}
                      )
                    </IonText>
                  </IonCol>
                </IonRow>
              ))}
          </IonGrid>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonButton
          slot="end"
          fill="clear"
          routerLink={orderlyPath("weekend_meeting_details", { week_id })}
        >
          <strong>Edit</strong>
        </IonButton>
      </IonItem>
    </IonList>
  );
};
