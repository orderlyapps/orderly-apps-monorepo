import { MidweekMeetingData } from "#content/midweek-meeting-details/MidweekMeetingDetails.js";
import { IonAccordion, IonAccordionGroup } from "@ionic/react";
import { AccordionContent } from "../util/AccordionContent.js";
import { AccordionHeader } from "../util/AccordionHeader.js";

export const Living = ({ data }: { data: MidweekMeetingData }) => {
  return (
    <>
      <IonAccordionGroup>
        <IonAccordion>
          <AccordionHeader
            part={data?.midweek_meeting_data.mwb_lc_part1_title || ""}
            participant={data?.midweek_assignments.living_1}
            color="jw_red_light"
          />

          <AccordionContent
            time={data?.midweek_meeting_data.mwb_lc_part1_time || ""}
            messageDetails={data?.midweek_meeting_data.mwb_lc_part1_title || ""}
            name={data?.midweek_assignments.living_1?.first_name || ""}
          />
        </IonAccordion>
      </IonAccordionGroup>

      {data?.midweek_meeting_data.mwb_lc_part2 && (
        <>
          <IonAccordionGroup>
            <IonAccordion>
              <AccordionHeader
                part={data?.midweek_meeting_data.mwb_lc_part2_title || ""}
                participant={data?.midweek_assignments.living_2}
                color="jw_red_light"
              />

              <AccordionContent
                time={data?.midweek_meeting_data.mwb_lc_part2_time || ""}
                messageDetails={
                  data?.midweek_meeting_data.mwb_lc_part2_title || ""
                }
                name={data?.midweek_assignments.living_2?.first_name || ""}
              />
            </IonAccordion>
          </IonAccordionGroup>
        </>
      )}

      <IonAccordionGroup>
        <IonAccordion>
          <AccordionHeader
            part={data?.midweek_meeting_data.mwb_lc_cbs_title || ""}
            color="jw_red_light"
            participant={data?.midweek_assignments.cbs_conductor}
          />

          <AccordionContent
            messageDetails={"Congregation Bible Study"}
            name={data?.midweek_assignments.cbs_conductor?.first_name || ""}
          />
        </IonAccordion>
      </IonAccordionGroup>

      <IonAccordionGroup>
        <IonAccordion>
          <AccordionHeader
            part="Reader"
            participant={data?.midweek_assignments.cbs_reader}
          />

          <AccordionContent
            name={data?.midweek_assignments.cbs_reader?.first_name || ""}
            messageDetails={"CBS Reader"}
          />
        </IonAccordion>
      </IonAccordionGroup>

      <IonAccordionGroup>
        <IonAccordion>
          <AccordionHeader
            part="Closing Prayer"
            participant={data?.midweek_assignments.prayer_closing}
          />

          <AccordionContent
            name={data?.midweek_assignments.prayer_closing?.first_name || ""}
            messageDetails={"Closing Prayer"}
          />
        </IonAccordion>
      </IonAccordionGroup>
    </>
  );
};
