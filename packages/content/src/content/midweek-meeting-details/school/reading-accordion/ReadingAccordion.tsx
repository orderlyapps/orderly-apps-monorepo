import { IonAccordion, IonAccordionGroup } from "@ionic/react";
import { ReadingAccordionHeader } from "./reading-accordion-header/ReadingAccordionHeader.js";
import { ReadingAccordionContent } from "./reading-accordion-content/ReadingAccordionContent.js";

interface SchoolReadingAccordionProps {
  data: any;
  school: string;
}

export const ReadingAccordion = ({ data, school }: SchoolReadingAccordionProps) => {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <ReadingAccordionHeader data={data} school={school} />
        <ReadingAccordionContent data={data} school={school} />
      </IonAccordion>
    </IonAccordionGroup>
  );
}
