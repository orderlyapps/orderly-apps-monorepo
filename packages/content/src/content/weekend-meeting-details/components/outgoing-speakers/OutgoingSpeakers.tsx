import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { usePublishersQuery } from "@amodeo/data/react-query/publishers/tables/use-publishers-query";
import { useOutgoingSpeakersQuery } from "@amodeo/data/react-query/weekend-meeting/use-outgoing-speakers-query";
import { IonItem } from "@ionic/react";

export const OutgoingSpeakers = () => {
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data: outgoingSpeakers } = useOutgoingSpeakersQuery(
    { startDate: week_id, endDate: week_id },
    { enabled: !!week_id }
  );
  const { data: publishers } = usePublishersQuery(!!outgoingSpeakers);

  const d = outgoingSpeakers?.find(
    (s: any) => s.week_id === week_id
  )?.outgoing_speakers;

  return (
    <div>
      {d &&
        d.map((s: any) => {
          return <IonItem key={s.id}>{s.speaker_id}</IonItem>;
        })}
    </div>
  );
};
