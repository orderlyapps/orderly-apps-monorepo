import {
  IonAccordionGroup,
  IonAccordion,
  IonItem,
  IonList,
  IonText,
} from "@ionic/react";
import { usePublisherData } from "../../publisher-data-provider/PublisherDataProvider.js";

import { MidweekParticipationItem } from "./components/midweek-participation-item/MidweekParticipationItem.js";

export const assignmentTypes = [
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

export const MidweekParticipation = () => {
  const { midweek_participation } = usePublisherData();

  const searchString = midweek_participation?.join("");

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
          <AddParticipation />
        </IonList>
      </IonAccordion>
    </IonAccordionGroup>
  );
};

function AddParticipation() {
  const { openEditModal } = usePublisherData();

  return (
    <IonItem
      onClick={() => openEditModal({ detailsToEdit: "midweek_participation" })}
    >
      <IonText color="medium">Add</IonText>
    </IonItem>
  );
}
