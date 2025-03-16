import { IonAccordion, IonAccordionGroup } from "@ionic/react";
import { ReadingAccordionHeader } from "./reading-accordion-header/ReadingAccordionHeader.js";
import { ReadingAccordionContent } from "./reading-accordion-content/ReadingAccordionContent.js";

interface SchoolReadingAccordionProps {
  data: any;
  school: string;
  assignment: string;
}

export const ReadingAccordion = ({ data, school, assignment }: SchoolReadingAccordionProps) => {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <ReadingAccordionHeader data={data} school={school} />
        <ReadingAccordionContent data={data} school={school} assignment={assignment} />
      </IonAccordion>
    </IonAccordionGroup>
  );
}
