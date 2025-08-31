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

type Assignee =
  | "Darcy Bray"
  | "Damian Amodeo"
  | "Kadri Demiri-Smith"
  | "John Bray"
  | "Matt Taylor"
  | "Anton Arets"
  | "Tom Bennies"
  | "Nigel Vincent"
  | "Simeon Bray"
  | "Denis McTackett"
  | "Tim Stott"
  | "Igor DeSouza"
  | "Blake Richmond"
  | "Steve Willder"
  | "Ron Zapp"
  | "Denis McTackett"
  | "Stephen Gurr"
  | "Lauchlan Davis"
  | "Tristan Roberts"
  | "Mark Blackwell"
  | "Callum McDonald"
  | "Rob Amos"
  | "Eric Graves"
  | "Ben Cizzio"
  | "Philip Woodhall"
  | "Matt Taylor"
  | "Jade Mitchell"
  | "Glenn Langham"
  | "";

type MeetingAssignment = {
  audio: Assignee;
  video: Assignee;
  zoom: Assignee;
  microphone1: Assignee;
  microphone2: Assignee;
  stage: Assignee;
  entrance: Assignee;
  auditorium: Assignee;
};

type ScheduleWeek = {
  week: string;
  midweek: MeetingAssignment;
  weekend: MeetingAssignment;
};

const scheduleData: ScheduleWeek[] = [
  {
    week: "Jul 28-Aug 3",
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
      audio: "Simeon Bray",
      video: "Denis McTackett",
      stage: "Tim Stott",
      zoom: "Igor DeSouza",
      microphone1: "Matt Taylor",
      microphone2: "Philip Woodhall",
      entrance: "Tristan Roberts",
      auditorium: "Ron Zapp",
    },
  },
  {
    week: "Aug 4 - 10",
    midweek: {
      audio: "Callum McDonald",
      video: "Igor DeSouza",
      stage: "Jade Mitchell",
      zoom: "John Bray",
      microphone1: "Stephen Gurr",
      microphone2: "Tim Stott",
      entrance: "Ben Cizzio",
      auditorium: "Rob Amos",
    },
    weekend: {
      audio: "Steve Willder",
      video: "Darcy Bray",
      stage: "Anton Arets",
      zoom: "Callum McDonald",
      microphone1: "Blake Richmond",
      microphone2: "Tom Bennies",
      entrance: "Mark Blackwell",
      auditorium: "John Bray",
    },
  },
  {
    week: "Aug 11 - 17",
    midweek: {
      audio: "John Bray",
      video: "Simeon Bray",
      stage: "Darcy Bray",
      zoom: "Glenn Langham",
      microphone1: "Lauchlan Davis",
      microphone2: "Igor DeSouza",
      entrance: "Philip Woodhall",
      auditorium: "Nigel Vincent",
    },
    weekend: {
      audio: "Igor DeSouza",
      video: "Tom Bennies",
      stage: "Simeon Bray",
      zoom: "Damian Amodeo",
      microphone1: "Kadri Demiri-Smith",
      microphone2: "Denis McTackett",
      entrance: "Glenn Langham",
      auditorium: "Philip Woodhall",
    },
  },
  {
    week: "Aug 18 - 24",
    midweek: {
      audio: "Darcy Bray",
      video: "Ben Cizzio",
      stage: "Kadri Demiri-Smith",
      zoom: "Simeon Bray",
      microphone1: "Jade Mitchell",
      microphone2: "Matt Taylor",
      entrance: "John Bray",
      auditorium: "Eric Graves",
    },
    weekend: {
      audio: "Igor DeSouza",
      video: "Damian Amodeo",
      stage: "Stephen Gurr",
      zoom: "Steve Willder",
      microphone1: "Tim Stott",
      microphone2: "Callum McDonald",
      entrance: "Darcy Bray",
      auditorium: "Tristan Roberts",
    },
  },
  {
    week: "Aug 25 - 31",
    midweek: {
      audio: "Anton Arets",
      video: "Simeon Bray",
      stage: "Callum McDonald",
      zoom: "Darcy Bray",
      microphone1: "Jade Mitchell",
      microphone2: "Blake Richmond",
      entrance: "Damian Amodeo",
      auditorium: "Glenn Langham",
    },
    weekend: {
      audio: "Simeon Bray",
      video: "Tristan Roberts",
      stage: "Igor DeSouza",
      zoom: "Steve Willder",
      microphone1: "Anton Arets",
      microphone2: "Lauchlan Davis",
      entrance: "Tom Bennies",
      auditorium: "Mark Blackwell",
    },
  },
  {
    week: "Sep 1-Sep 7",
    midweek: {
      audio: "Darcy Bray",
      video: "Ben Cizzio",
      stage: "Tim Stott",
      zoom: "Callum McDonald",
      microphone1: "Matt Taylor",
      microphone2: "Simeon Bray",
      entrance: "Denis McTackett",
      auditorium: "John Bray",
    },
    weekend: {
      audio: "Lauchlan Davis",
      video: "Simeon Bray",
      stage: "John Bray",
      zoom: "Ron Zapp",
      microphone1: "Blake Richmond",
      microphone2: "Tim Stott",
      entrance: "Steve Willder",
      auditorium: "Philip Woodhall",
    },
  },
  {
    week: "Sep 8-Sep 14",
    midweek: {
      audio: "Steve Willder",
      video: "Tom Bennies",
      stage: "Igor DeSouza",
      zoom: "Darcy Bray",
      microphone1: "Lauchlan Davis",
      microphone2: "Damian Amodeo",
      entrance: "Mark Blackwell",
      auditorium: "Tristan Roberts",
    },
    weekend: {
      audio: "Philip Woodhall",
      video: "Damian Amodeo",
      stage: "Jade Mitchell",
      zoom: "John Bray",
      microphone1: "Callum McDonald",
      microphone2: "Anton Arets",
      entrance: "Tristan Roberts",
      auditorium: "Rob Amos",
    },
  },
  {
    week: "Sep 15-Sep 21",
    midweek: {
      audio: "Anton Arets",
      video: "Igor DeSouza",
      stage: "Stephen Gurr",
      zoom: "Simeon Bray",
      microphone1: "Matt Taylor",
      microphone2: "Lauchlan Davis",
      entrance: "Darcy Bray",
      auditorium: "Ron Zapp",
    },
    weekend: {
      audio: "Tim Stott",
      video: "Darcy Bray",
      stage: "Anton Arets",
      zoom: "Tom Bennies",
      microphone1: "Stephen Gurr",
      microphone2: "Callum McDonald",
      entrance: "John Bray",
      auditorium: "Mark Blackwell",
    },
  },
  {
    week: "Sep 22-Sep 28",
    midweek: {
      audio: "Simeon Bray",
      video: "Denis McTackett",
      stage: "Callum McDonald",
      zoom: "Tristan Roberts",
      microphone1: "Kadri Demiri-Smith",
      microphone2: "Blake Richmond",
      entrance: "Philip Woodhall",
      auditorium: "Eric Graves",
    },
    weekend: {
      audio: "Damian Amodeo",
      video: "Simeon Bray",
      stage: "Philip Woodhall",
      zoom: "Steve Willder",
      microphone1: "Igor DeSouza",
      microphone2: "Tim Stott",
      entrance: "Tom Bennies",
      auditorium: "Nigel Vincent",
    },
  },
  {
    week: "Sep 29-Oct 5",
    midweek: {
      audio: "Igor DeSouza",
      video: "Tristan Roberts",
      stage: "Simeon Bray",
      zoom: "Ron Zapp",
      microphone1: "Anton Arets",
      microphone2: "Stephen Gurr",
      entrance: "Jade Mitchell",
      auditorium: "Darcy Bray",
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
        {scheduleData.map((week, index) => {

          if (index < 5) return null;
          return (
            <IonRow key={index}>
              <IonCol>
                <WeekSchedule weekData={week} />
              </IonCol>
            </IonRow>
          );
        })}
      </IonGrid>
      {children}
    </div>
  );
};
