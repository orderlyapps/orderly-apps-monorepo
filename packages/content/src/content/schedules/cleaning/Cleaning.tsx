import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import {
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

type CleaningScheduleItem = {
  week: string;
  sanitation: string;
  cleaning: string;
};

const cleaningScheduleData: CleaningScheduleItem[] = [
  {
    week: "Jun 30 - Jul 6",
    sanitation: "Group 5",
    cleaning: "N/A",
  },
  {
    week: "Jul 7-13",
    sanitation: "Group 6",
    cleaning: "Group 1",
  },
  {
    week: "Jul 14-20",
    sanitation: "Group 1",
    cleaning: "Group 2",
  },
  {
    week: "Jul 21-27",
    sanitation: "Convention",
    cleaning: "",
  },
  {
    week: "Jul 28-Aug 3",
    sanitation: "Group 2",
    cleaning: "Group 3",
  },
  {
    week: "Aug 4-10",
    sanitation: "Group 3",
    cleaning: "N/A",
  },
  {
    week: "Aug 11-17",
    sanitation: "Group 4",
    cleaning: "N/A",
  },
  {
    week: "Aug 18-24",
    sanitation: "Group 5",
    cleaning: "N/A",
  },
  {
    week: "Aug 25-Aug 31",
    sanitation: "Group 6",
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
