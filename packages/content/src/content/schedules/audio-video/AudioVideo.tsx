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
  microphones: string[];
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
    week: "Jun 9-15",
    midweek: {
      audio: "Simeon Bray",
      video: "Glen Langham",
      zoom: "Callum McDonald",
      microphones: ["Matt Taylor", "Stephen Gurr"],
      stage: "Anton Arets",
      entrance: "Tom Bennies",
      auditorium: "Ron Zapp",
    },
    weekend: {
      audio: "Igor DeSouza",
      video: "Tristan Roberts",
      stage: "Tim Stott",
      zoom: "Damian Amodeo",
      microphones: ["Blake Richmond", "Kadri Demiri-Smith"],
      entrance: "John Bray",
      auditorium: "Mark Blackwell",
    },
  },
  {
    week: "Jun 16-22",
    midweek: {
      audio: "Phil Woodhall",
      video: "Darcy Bray",
      stage: "Kadri Demiri-Smith",
      zoom: "Denis McTackett",
      microphones: ["Lauchlan Davis", "Tim Stott"],
      entrance: "Ben Cizzio",
      auditorium: "John Bray",
    },
    weekend: {
      audio: "Denis McTackett",
      video: "Igor DeSouza",
      stage: "Phil Woodhall",
      zoom: "Steve Willder",
      microphones: ["Darcy Bray", "Matt Taylor"],
      entrance: "Damian Amodeo",
      auditorium: "Nigel Vincent",
    },
  },
  {
    week: "Jun 23-29",
    midweek: {
      audio: "Tim Stott",
      video: "Tom Bennies",
      stage: "Igor DeSouza",
      zoom: "Simeon Bray",
      microphones: ["Anton Arets", "Blake Richmond"],
      entrance: "Darcy Bray",
      auditorium: "Glenn Langham",
    },
    weekend: {
      audio: "Anton Arets",
      video: "Simeon Bray",
      stage: "Stephen Gurr",
      zoom: "John Bray",
      microphones: ["Callum McDonald", "Lauchlan Davis"],
      entrance: "Phil Woodhall",
      auditorium: "Tristan Roberts",
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
      <h3>{label}</h3>
      <p>{person}</p>
    </IonLabel>
  </IonItem>
);

const MicrophonesList = ({ microphones }: { microphones: string[] }) => (
  <IonItem lines="full">
    <IonLabel>
      <h3>Microphones</h3>
      <div className="ion-padding-top">
        {microphones.map((person, index) => (
          <IonChip key={index} color="primary">
            {person}
          </IonChip>
        ))}
      </div>
    </IonLabel>
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
          <MicrophonesList microphones={currentData.microphones} />
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
