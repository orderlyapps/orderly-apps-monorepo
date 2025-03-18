import { IonAccordion, IonAccordionGroup, IonListHeader } from "@ionic/react";
import { Tables } from "@amodeo/data/supabase/supabase-types";
import { ApplyAccordion } from "./apply-accordion/ApplyAccordion.js";
import { ReadingAccordion } from "./reading-accordion/ReadingAccordion.js";
import { AccordionHeader } from "../util/AccordionHeader.js";
import { AccordionContent } from "../util/AccordionContent.js";

type SchoolPartsListProps = {
  data: {
    midweek_meeting_data: Tables<"midweek_meeting_data">;
    midweek_assignments: Tables<"_view_midweek_meeting_schedule">["midweek_assignments"];
  };
};

export const School = ({ data }: SchoolPartsListProps) => {
  const apply = Array.from(
    { length: parseInt(data?.midweek_meeting_data?.mwb_ayf_count || "0") },
    (_, i) => (i + 1).toString()
  );

  const schools = Array.from(
    { length: (data?.midweek_assignments.counselor_2 && 2) || 1 },
    (_, i) => (i + 1).toString()
  );

  return (
    <>
      {schools?.map((school: string) => (
        <div key={school}>
          {school === "1" && schools[1] && (
            <IonListHeader>Main Hall</IonListHeader>
          )}
          {school === "2" && (
            <>
              <IonListHeader>Second School</IonListHeader>
              <IonAccordionGroup>
                <IonAccordion>
                  <AccordionHeader
                    part={"Counsellor"}
                    participant={data?.midweek_assignments.counselor_2}
                    color="medium"
                  ></AccordionHeader>
                  <AccordionContent
                    name={
                      data?.midweek_assignments.counselor_2?.first_name || ""
                    }
                    messageDetails={"Second School Counsellor"}
                  ></AccordionContent>
                </IonAccordion>
              </IonAccordionGroup>
            </>
          )}
          {school === "3" && <IonListHeader>Fourth School</IonListHeader>}
          {school === "4" && <IonListHeader>Fourth School</IonListHeader>}
          {school === "5" && <IonListHeader>Fifth School</IonListHeader>}

          <ReadingAccordion
            data={data}
            school={school}
            assignment={"school_" + school + "_bible_reading"}
          />

          {data &&
            apply.map((part: string) => (
              <ApplyAccordion
                key={part}
                data={data}
                school={school}
                part={part}
              />
            ))}
        </div>
      ))}
    </>
  );
};
