import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useUpsertSpeakerAssignmentMutation } from "@amodeo/data/react-query/weekend-meeting/mutations/use-upsert-speaker-assignment-mutation";
import { useSpeakersQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-speakers-query";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonList,
} from "@ionic/react";

export const SpeakerOptions = () => {
  const { data: speakers } = useSpeakersQuery();
  const handleSpeakerSelectClick =
    useStore.use.handleSelectSpeakerAssignmentClick();

  return (
    <IonAccordionGroup>
      {speakers?.map((speaker) => (
        <IonAccordion key={speaker.id} value={speaker.id || ""}>
          <IonItem slot="header">
            {speaker.first_name} {speaker.last_name}
          </IonItem>
          <IonList slot="content">
            {speaker &&
              speaker.outlines.map((o: any) => {
                return (
                  <IonItem
                    key={o.id}
                    onClick={() =>
                      handleSpeakerSelectClick({
                        speaker_id: speaker.id || "",
                        outline_id: o.id,
                      })
                    }
                  >
                    {o.id} - {o.theme}
                  </IonItem>
                );
              })}
          </IonList>
        </IonAccordion>
      ))}
    </IonAccordionGroup>
  );
};
