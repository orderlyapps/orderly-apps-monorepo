import { MidweekMeetingData } from "#content/midweek-meeting-details/MidweekMeetingDetails.js";
import { IonAccordion, IonAccordionGroup } from "@ionic/react";
import { AccordionContent } from "../util/AccordionContent.js";
import { AccordionHeader } from "../util/AccordionHeader.js";

export const Treasures = ({ data }: { data: MidweekMeetingData }) => {
  return (
    <>
      <IonAccordionGroup>
        <IonAccordion>
          <AccordionHeader
            part="1. Treasures"
            participant={data?.midweek_assignments.treasures}
            color="jw_slate_light"
          />

          <AccordionContent
            details={data?.midweek_meeting_data.mwb_tgw_talk || ""}
            name={data?.midweek_assignments.treasures?.first_name || ""}
            time={"10"}
            messageDetails={data?.midweek_meeting_data.mwb_tgw_talk || ""}
          />
        </IonAccordion>
      </IonAccordionGroup>

      <IonAccordionGroup>
        <IonAccordion>
          <AccordionHeader
            part="2. Spiritual Gems"
            participant={data?.midweek_assignments.gems}
            color="jw_slate_light"
          />

          <AccordionContent
            name={data?.midweek_assignments.gems?.first_name || ""}
            messageDetails={"Spiritual Gems"}
          />
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
};
