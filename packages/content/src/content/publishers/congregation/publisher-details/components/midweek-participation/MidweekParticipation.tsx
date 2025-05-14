import {
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonList,
} from "@ionic/react";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";
import { MidweekAssignmentID } from "@amodeo/data/supabase/supabase-types";
import { archive, heart } from "ionicons/icons";
import { MidweekParticipationItem } from "./components/midweek-participation-item/MidweekParticipationItem.js";

export const MidweekParticipation = () => {
  const { midweek_participation } = usePublisherData();

  const searchString = midweek_participation?.join("");

  const assignmentTypes = [
    { id: "chairman", label: "Chairman" },
    { id: "prayer", label: "Prayer" },
    { id: "counselor", label: "Counselor" },
    { id: "treasures", label: "Treasures" },
    { id: "gems", label: "Gems" },
    { id: "bible_reading", label: "Bible Reading" },
    { id: "apply", label: "Apply" },
    { id: "assistant", label: "Assistant" },
    { id: "living", label: "Living" },
    { id: "cbs_conductor", label: "CBS Conductor" },
    { id: "cbs_reader", label: "CBS Reader" },
  ];
  return (
    <IonAccordionGroup>
      <IonAccordion>
        <IonItem slot="header">Midweek Participation</IonItem>
        <IonList slot="content">
          {!midweek_participation && <IonItem color="medium">None</IonItem>}
          {assignmentTypes.map(({ id, label }) => (
            <MidweekParticipationItem
              key={id}
              searchString={searchString ?? ""}
              searchQuery={id}
            >
              {label}
            </MidweekParticipationItem>
          ))}
        </IonList>
      </IonAccordion>
    </IonAccordionGroup>
  );
};


