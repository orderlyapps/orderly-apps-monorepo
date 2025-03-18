import { MidweekMeetingData } from "#content/midweek-meeting-details/MidweekMeetingDetails.js";
import { IonAccordion, IonAccordionGroup } from "@ionic/react";
import { AccordionContent } from "../util/AccordionContent.js";
import { AccordionHeader } from "../util/AccordionHeader.js";

export const Chairman = ({ data }: { data: MidweekMeetingData }) => {
  return (
    <>
      <IonAccordionGroup>
        <IonAccordion>
          <AccordionHeader
            part="Chairman"
            participant={data?.midweek_assignments.chairman}
          />

          <AccordionContent
            name={data?.midweek_assignments.chairman?.first_name || ""}
            messageDetails={"Chairman"}
          />
        </IonAccordion>
      </IonAccordionGroup>
      <IonAccordionGroup>
        <IonAccordion>
          <AccordionHeader
            part="Opening Prayer"
            participant={data?.midweek_assignments.prayer_opening}
          />

          <AccordionContent
            messageDetails={"Opening Prayer"}
            name={data?.midweek_assignments.prayer_opening?.first_name || ""}
          />
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
};
