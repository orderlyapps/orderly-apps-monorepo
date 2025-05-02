import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useOutgoingSpeakerDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-outgoing-speaker-details-query";
import { formatName } from "@amodeo/util/formatters/formatName";
import { IonItem } from "@ionic/react";

export const OutgoingSpeakers = () => {
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data } = useOutgoingSpeakerDetailsQuery(week_id, {
    enabled: !!week_id,
  });

  return (
    <div>
      {data?.outgoing_speakers &&
        data.outgoing_speakers.map((s: any, index: number) => {
          // console.log("🚀 ~ OutgoingSpeakers ~ s:", s.speaker);
          return <IonItem key={index}>{formatName(s.speaker)}</IonItem>;
        })}
    </div>
  );
};
