import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonChip,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { timeOutline, locationOutline, personOutline } from "ionicons/icons";

type ScheduleDetail = {
  time: string;
  location: string;
  conductor: string;
};

type ScheduleDay = {
  day: string;
  details: ScheduleDetail[];
};

const scheduleData: ScheduleDay[] = [
  {
    day: "Sunday",
    details: [
      { time: "9:15 AM", location: "Kingdom Hall", conductor: "See below" },
    ],
  },
  {
    day: "Wednesday",
    details: [
      { time: "9:15 AM", location: "Kingdom Hall", conductor: "John Bray" },
      {
        time: "2:00 PM",
        location: "26 Stonehaven Dr, Metford",
        conductor: "Callum MacDonald",
      },
    ],
  },
  {
    day: "Thursday",
    details: [
      {
        time: "9:15 AM",
        location: "3 Nardoo St, Aberglasslyn",
        conductor: "Stephen Willder",
      },
    ],
  },
  {
    day: "Friday",
    details: [
      { time: "9:15 AM", location: "Kingdom Hall", conductor: "Damain Amodeo" },
      { time: "1:00 PM", location: "Kingdom Hall", conductor: "Ron Zapp" },
    ],
  },
  {
    day: "Saturday",
    details: [
      {
        time: "9:15 AM",
        location: "",
        conductor: "Group Overseers",
      },
    ],
  },
];

export const FieldService = ({
  children,
  modalProps,
}: {
  children?: React.ReactNode;
  modalProps: ModalProps;
}) => {
  return (
    <div className="ion-padding">
      <IonText color="primary">
        <h1>Field Service Schedule</h1>
      </IonText>

      {scheduleData.map((daySchedule, index) => (
        <IonCard key={index} className="ion-margin-bottom">
          <IonCardHeader>
            <IonCardTitle>{daySchedule.day}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonList>
              {daySchedule.details.map((detail, detailIndex) => (
                <IonItem
                  key={detailIndex}
                  lines={
                    detailIndex === daySchedule.details.length - 1
                      ? "none"
                      : "inset"
                  }
                >
                  <IonGrid>
                    <IonRow>
                      <IonCol size="12">
                        <IonChip color="primary">
                          <IonIcon icon={timeOutline} />
                          <IonLabel>{detail.time}</IonLabel>
                        </IonChip>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonItem lines="none" className="ion-no-padding">
                          <IonIcon
                            icon={locationOutline}
                            slot="start"
                            color="medium"
                          />
                          <IonLabel>{detail.location}</IonLabel>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonItem lines="none" className="ion-no-padding">
                          <IonIcon
                            icon={personOutline}
                            slot="start"
                            color="medium"
                          />
                          <IonLabel>{detail.conductor}</IonLabel>
                        </IonItem>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
      ))}
      <IonCard className="ion-margin-bottom">
        <IonCardHeader>
          <IonCardTitle>Sunday</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <IonList>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <IonChip color="primary">
                      <IonIcon icon={timeOutline} />
                      <IonLabel>9:15 AM</IonLabel>
                    </IonChip>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol size="12">
                    <IonItem lines="none" className="ion-no-padding">
                      <IonIcon
                        icon={locationOutline}
                        slot="start"
                        color="medium"
                      />
                      <IonLabel>Kingdom Hall</IonLabel>
                    </IonItem>
                  </IonCol>
                </IonRow>

                {[
                  {
                    date: "Jul 6",
                    detail: "Rural Witnessing",
                  },
                  {
                    date: "Jul 13",
                    detail: "Group 2",
                  },
                  {
                    date: "Jul 20",
                    detail: "Group 3",
                  },
                  {
                    date: "Jul 27",
                    detail: "Regional Convention",
                  },
                  {
                    date: "Aug 3",
                    detail: "Rural Witnessing",
                  },
                  {
                    date: "Aug 10",
                    detail: "Group 4",
                  },
                  {
                    date: "Aug 17",
                    detail: "Group 5",
                  },
                  {
                    date: "Aug 24",
                    detail: "Group 6",
                  },
                  {
                    date: "Aug 31",
                    detail: "Group 1",
                  },
                  {
                    date: "Sep 7",
                    detail: "Rural Witnessing",
                  },
                  {
                    date: "Sep 14",
                    detail: "Group 2",
                  },
                  {
                    date: "Sep 21",
                    detail: "Group 3",
                  },
                  {
                    date: "Sep 28",
                    detail: "Group 4",
                  },
                ].map((item, index) => (
                  <IonRow key={index}>
                    <IonCol size="12">
                      <IonItem lines="none" className="ion-no-padding">
                        <IonLabel>
                          <strong>{item.date}</strong>
                        </IonLabel>
                        <IonText>{item.detail}</IonText>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                ))}
              </IonGrid>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>
    </div>
  );
};
