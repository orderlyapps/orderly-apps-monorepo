import {
  MidweekAssignments,
  Tables,
} from "@amodeo/data/supabase/supabase-types";
import { IonAccordion, IonItem, IonList } from "@ionic/react";
import { getAssignmentData } from "../../.shared/getData/getAssignmentData.js";
import { shouldHide } from "../../.shared/shouldHide.js";
import { AssignmentHeader } from "./components/assignment-header/AssignmentHeader.js";
import { AssignmentContent } from "./components/assignment-content/AssignmentContent.js";

export type AssignmentProps = {
  assignment_id: MidweekAssignments;
  data: Tables<"_view_midweek_meeting_details">;
};

export const Assignment = ({ assignment_id, data }: AssignmentProps) => {
  if (shouldHide({ assignment_id, data })) return null;
  const assignmentData = getAssignmentData({ assignment_id, data });

  return (
    <IonAccordion value={assignment_id}>
      <IonList slot="header">
        <AssignmentHeader assignmentData={assignmentData} />
      </IonList>
      <IonItem slot="content" color={"medium"}>
        <AssignmentContent assignmentData={assignmentData}></AssignmentContent>
      </IonItem>
    </IonAccordion>
  );
};
