import { IonAccordionGroup, IonAccordion, IonItem, IonList } from "@ionic/react";
import { usePublisherData } from "../publisher-data-provider/PublisherDataProvider.js";


export const MidweekParticipation = () => {
  const { midweek_participation } = usePublisherData();

  const searchString = midweek_participation?.join("");
  return (
    <IonAccordionGroup>
      <IonAccordion>
        <IonItem slot="header">Midweek Participation</IonItem>
        <IonList slot="content">
          {!midweek_participation && (
            <IonItem color="medium">None</IonItem>
          )}
          {searchString?.includes("chairman") && (
            <IonItem color="medium">Chairman</IonItem>
          )}
          {searchString?.includes("prayer") && (
            <IonItem color="medium">Prayers</IonItem>
          )}
          {searchString?.includes("counselor") && (
            <IonItem color="medium">Counselor</IonItem>
          )}
          {searchString?.includes("treasures") && (
            <IonItem color="medium">Treasures</IonItem>
          )}
          {searchString?.includes("gems") && (
            <IonItem color="medium">Spiritual Gems</IonItem>
          )}
          {searchString?.includes("bible_reading") && (
            <IonItem color="medium">Bible Reading</IonItem>
          )}
          {searchString?.includes("apply") && (
            <IonItem color="medium">Apply Yourself</IonItem>
          )}
          {searchString?.includes("assistant") && (
            <IonItem color="medium">Assistant</IonItem>
          )}
          {searchString?.includes("living") && (
            <IonItem color="medium">Living as Christians</IonItem>
          )}
          {midweek_participation?.includes("cbs_conductor") && (
            <IonItem color="medium">CBS Conductor</IonItem>
          )}
          {midweek_participation?.includes("cbs_reader") && (
            <IonItem color="medium">CBS Reader</IonItem>
          )}
        </IonList>
      </IonAccordion>
    </IonAccordionGroup>
  );
};
