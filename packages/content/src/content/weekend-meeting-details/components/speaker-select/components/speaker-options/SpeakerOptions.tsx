import { useSpeakersQuery } from "@amodeo/data/react-query/weekend-meeting/use-speakers-query";
import { IonItem } from "@ionic/react";

export const SpeakerOptions = () => {
  const { data: speakers } = useSpeakersQuery();

  return (
    <>
      {speakers?.map((speaker) => (
        <IonItem key={speaker.id}>
          {speaker.first_name} {speaker.last_name}
        </IonItem>
      ))}
    </>
  );
};
