import { useCardModal } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import { usePublishersQuery } from "@amodeo/data/react-query/publishers/congregation/use-publishers-query";
import { IonItem, IonList, IonText } from "@ionic/react";
import { orderlyPath } from "#shells/orderly/routes.js";

export const Congregation = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const { data } = usePublishersQuery();
  return (
    <IonList>
      {data?.map((publisher) => (
        <IonItem
          key={publisher.id}
          routerLink={orderlyPath("publisher_details")}
        >
          <IonText>
            {publisher.last_name}, {publisher.first_name}
          </IonText>
        </IonItem>
      ))}
    </IonList>
  );
};
