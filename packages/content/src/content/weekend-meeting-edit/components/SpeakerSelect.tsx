import { useSpeakersQuery } from "@amodeo/data/react-query/weekend-meeting/use-speakers-query";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { useStore } from "@amodeo/data/zustand/stores/use-store";
import { Searchbar } from "@amodeo/ui/ionic/searchbar/Searchbar";
import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { formatName } from "@amodeo/util/formatters/formatName";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonModal,
  IonText,
  IonToolbar,
} from "@ionic/react";

export const SpeakerSelect = ({
  modalProps,
  weekendMeeting,
  // outgoingSpeakers,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
  weekendMeeting: Tables<"_view_public_talks">;
  // outgoingSpeakers: Tables<"_view_outgoing_speakers">;
}) => {
  const { isSelectSpeakerModalOpen, speakerSearchQuery } =
    useStore.use.midweekMeeting();
  const { data } = useSpeakersQuery({ enabled: true });

  const filteredSpeakers = data?.filter(
    (s) =>
      s.first_name?.toLowerCase().includes(speakerSearchQuery.toLowerCase()) ||
      s.last_name?.toLowerCase().includes(speakerSearchQuery.toLowerCase())
  );

  return (
    <>
      <IonItem
        onClick={() => useStore.getState().setSelectSpeakerModalOpen(true)}
      >
        <IonLabel>
          <strong>Speaker:</strong>
        </IonLabel>
        <IonText>{formatName(weekendMeeting.speaker)}</IonText>
      </IonItem>
      <IonModal {...modalProps} isOpen={isSelectSpeakerModalOpen}>
        <IonHeader>
          <IonToolbar>
            <Searchbar
              onIonInput={(e) =>
                useStore
                  .getState()
                  .setSpeakerSearchQuery(e.detail.value as string)
              }
              value={speakerSearchQuery}
            ></Searchbar>
            <IonButtons slot="start">
              <IonButton
                onClick={() =>
                  useStore.getState().setSelectSpeakerModalOpen(false)
                }
              >
                Close
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {filteredSpeakers &&
            filteredSpeakers.map((s) => {
              return (
                <IonItem key={s.id}>
                  <IonLabel>
                    {s.last_name}, {s.first_name}
                  </IonLabel>
                </IonItem>
              );
            })}
        </IonContent>
      </IonModal>
    </>
  );
};
