import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonNote,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import {
  calendarOutline,
  peopleOutline,
  sparklesOutline,
} from "ionicons/icons";

type CleaningScheduleItem = {
  week: string;
  sanitation: string;
  cleaning: string;
};

const cleaningScheduleData: CleaningScheduleItem[] = [
  {
    week: "Jun 9-15",
    sanitation: "Group 2",
    cleaning: "N/A",
  },
  {
    week: "Jun 16-22",
    sanitation: "Group 3",
    cleaning: "N/A",
  },
  {
    week: "Jun 23-29",
    sanitation: "Group 4",
    cleaning: "N/A",
  },
  {
    week: "Jun 30 - Jul 6",
    sanitation: "Group 5",
    cleaning: "N/A",
  },
];

type CleaningProps = {
  children?: React.ReactNode;
  modalProps: ModalProps;
};

export const Cleaning = ({ children, modalProps }: CleaningProps) => {
  return (
    <div className="ion-padding">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className="ion-text-center">
            Cleaning Schedule
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonList>
            <IonListHeader>
              <IonGrid>
                <IonRow>
                  <IonCol size="6">Sanitation</IonCol>
                  <IonCol size="6">Cleaning</IonCol>
                </IonRow>
              </IonGrid>
            </IonListHeader>
            {cleaningScheduleData.map((item, index) => (
              <IonItem key={index}>
                <IonGrid>
                  <IonRow>
                    <IonCol size="12">
                      <IonLabel>
                        <strong>{item.week}</strong>
                      </IonLabel>
                    </IonCol>
                    <IonCol size="6">
                      <IonLabel>{item.sanitation}</IonLabel>
                    </IonCol>
                    <IonCol size="6">
                      <IonLabel>{item.cleaning}</IonLabel>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            ))}
          </IonList>
        </IonCardContent>
      </IonCard>
      {children}
    </div>
  );
};
