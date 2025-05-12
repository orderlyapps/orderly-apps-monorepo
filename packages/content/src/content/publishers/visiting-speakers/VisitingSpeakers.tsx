import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { IonList, IonItem, IonText } from "@ionic/react";
import { useVisitingSpeakersQuery } from "@amodeo/data/react-query/publishers/visiting-speakers/use-visiting-speakers-query";
import { orderlyPath } from "#shells/orderly/routes.js";

export const VisitingSpeakers = ({
  children,
  modalProps,
}: {
  children?: React.ReactNode;
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { data } = useVisitingSpeakersQuery();
  return (
    <IonList>
      {data?.map((publisher) => (
        <IonItem
          key={publisher.id}
          routerLink={orderlyPath("visiting_speaker_details")}
        >
          <IonText>
            {publisher.last_name}, {publisher.first_name}
          </IonText>
        </IonItem>
      ))}
    </IonList>
  );
};
