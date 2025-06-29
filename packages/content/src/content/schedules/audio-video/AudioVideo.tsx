import { ModalProps } from "@amodeo/ui/ionic/use-card-modal/useCardModal";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonChip,
  IonSegment,
  IonSegmentButton,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonIcon,
} from "@ionic/react";
import { useState } from "react";
import {
  micOutline,
  videocamOutline,
  peopleOutline,
  chatbubbleOutline,
  laptopOutline,
  enterOutline,
  homeOutline,
} from "ionicons/icons";

type MeetingAssignment = {
  audio: string;
  video: string;
  zoom: string;
  microphone1: string;
  microphone2: string;
  stage: string;
  entrance: string;
  auditorium: string;
};

type ScheduleWeek = {
  week: string;
  midweek: MeetingAssignment;
  weekend: MeetingAssignment;
};

const scheduleData: ScheduleWeek[] = [
  {
    week: "Jun 30-Jul 6",
    midweek: {
      audio: "Darcy Bray",
      video: "Damian Amodeo",
      stage: "Kadri Demiri-Smith",
      zoom: "John Bray",
      microphone1: "Matt Taylor",
      microphone2: "Anton Arets",
      entrance: "Tom Bennies",
      auditorium: "Nigel Vincent",
    },
    weekend: {
      audio: "Simeon Bray",
      video: "Denis McTackett",
      stage: "Tim Stott",
      zoom: "Igor DeSouza",
      microphone1: "Blake Richmond",
      microphone2: "Phil Woodhall",
      entrance: "Steve Willder",
      auditorium: "Ron Zapp",
    },
  },
  {
    week: "Jul 7-13",
    midweek: {
      audio: "Phil Woodhall",
      video: "Igor DeSouza",
      stage: "Jade Mitchell",
      zoom: "Ron Zapp",
      microphone1: "Stephen Gurr",
      microphone2: "Tim Stott",
      entrance: "Darcy Bray",
      auditorium: "Rob Amos",
    },
    weekend: {
      audio: "Steve Willder",
      video: "Darcy Bray",
      stage: "Anton Arets",
      zoom: "Callum McDonald",
      microphone1: "Lauchlan Davis",
      microphone2: "Tristan Roberts",
      entrance: "Mark Blackwell",
      auditorium: "John Bray",
    },
  },
  {
    week: "Jul 14-Jul 20",
    midweek: {
      audio: "Tim Stott",
      video: "Simeon Bray",
      stage: "Darcy Bray",
      zoom: "Glenn Langham",
      microphone1: "Callum McDonald",
      microphone2: "Igor DeSouza",
      entrance: "Denis McTackett",
      auditorium: "Eric Graves",
    },
    weekend: {
      audio: "Igor DeSouza",
      video: "Tom Bennies",
      stage: "Simeon Bray",
      zoom: "Damian Amodeo",
      microphone1: "Kadri Demiri-Smith",
      microphone2: "Matt Taylor",
      entrance: "Ben Cizzio",
      auditorium: "Philip Woodhall",
    },
  },
  {
    week: "Jul 21-Jul 27",
    midweek: {
      audio: "",
      video: "",
      stage: "",
      zoom: "",
      microphone1: "",
      microphone2: "",
      entrance: "",
      auditorium: "",
    },
    weekend: {
      audio: "",
      video: "",
      stage: "",
      zoom: "",
      microphone1: "",
      microphone2: "",
      entrance: "",
      auditorium: "",
    },
  },
  {
    week: "Jul 28-Aug 3",
    midweek: {
      audio: "Anton Arets",
      video: "Ben Cizzio",
      stage: "Stephen Gurr",
      zoom: "Steve Willder",
      microphone1: "Jade Mitchell",
      microphone2: "Blake Richmond",
      entrance: "John Bray",
      auditorium: "Glenn Langham",
    },
    weekend: {
      audio: "",
      video: "",
      stage: "",
      zoom: "",
      microphone1: "",
      microphone2: "",
      entrance: "",
      auditorium: "",
    },
  },
];

const AssignmentItem = ({
  label,
  person,
}: {
  label: string;
  person: string;
}) => (
  <IonItem lines="full">
    <IonLabel>
      <strong>{label}</strong>
    </IonLabel>
    <IonText>{person}</IonText>
  </IonItem>
);

const WeekSchedule = ({ weekData }: { weekData: ScheduleWeek }) => {
  const [selectedSegment, setSelectedSegment] = useState<string>("midweek");

  const handleSegmentChange = (e: CustomEvent) => {
    setSelectedSegment(e.detail.value);
  };

  const currentData =
    selectedSegment === "midweek" ? weekData.midweek : weekData.weekend;

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{weekData.week}</IonCardTitle>
      </IonCardHeader>
      <IonSegment value={selectedSegment} onIonChange={handleSegmentChange}>
        <IonSegmentButton value="midweek">
          <IonLabel>Midweek</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="weekend">
          <IonLabel>Weekend</IonLabel>
        </IonSegmentButton>
      </IonSegment>
      <IonCardContent>
        <IonList>
          <AssignmentItem label="Video" person={currentData.video} />
          <AssignmentItem label="Audio" person={currentData.audio} />
          <AssignmentItem label="Stage" person={currentData.stage} />
          <AssignmentItem label="Zoom Attendant" person={currentData.zoom} />
          <AssignmentItem label="Microphone" person={currentData.microphone1} />
          <AssignmentItem label="Microphone" person={currentData.microphone2} />
          <AssignmentItem
            label="Entrance Attendant"
            person={currentData.entrance}
          />
          <AssignmentItem
            label="Auditorium Attendant"
            person={currentData.auditorium}
          />
        </IonList>
      </IonCardContent>
    </IonCard>
  );
};

export const AudioVideo = ({
  children,
  modalProps,
}: {
  children?: React.ReactNode;
  modalProps: ModalProps;
}) => {
  return (
    <div className="ion-padding">
      <IonGrid>
        {scheduleData.map((week, index) => (
          <IonRow key={index}>
            <IonCol>
              <WeekSchedule weekData={week} />
            </IonCol>
          </IonRow>
        ))}
      </IonGrid>
      {children}
    </div>
  );
};
