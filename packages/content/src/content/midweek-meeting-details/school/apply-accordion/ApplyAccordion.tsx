import { IonAccordion, IonAccordionGroup } from "@ionic/react";
import { ApplyAccordionHeader } from "./apply-accordion-header/ApplyAccordionHeader.js";
import { ApplyAccordionContent } from "./apply-accordion-content/ApplyAccordionContent.js";

interface SchoolPartsAccordionProps {
  data: any;
  school: string;
  part: string;
}

export const ApplyAccordion = ({ data, school, part }: SchoolPartsAccordionProps) => {
  return (
    <IonAccordionGroup>
      <IonAccordion value="first">
        <ApplyAccordionHeader data={data} school={school} part={part} />
        <ApplyAccordionContent data={data} school={school} part={part} />
      </IonAccordion>
    </IonAccordionGroup>
  );
}
