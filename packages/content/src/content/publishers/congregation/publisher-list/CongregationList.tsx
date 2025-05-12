import { usePublishersQuery } from "@amodeo/data/react-query/publishers/congregation/use-publishers-query";
import { IonItem, IonList, IonText } from "@ionic/react";
import { orderlyPath } from "#shells/orderly/routes.js";

export const Congregation = () => {
  const { data } = usePublishersQuery();
  return (
    <IonList>
      {data?.map((publisher) => (
        <IonItem
          key={publisher.id}
          routerLink={orderlyPath("publisher_details", {
            publisher_id: publisher.id,
          })}
        >
          <IonText>
            {publisher.last_name}, {publisher.first_name}
          </IonText>
        </IonItem>
      ))}
    </IonList>
  );
};
