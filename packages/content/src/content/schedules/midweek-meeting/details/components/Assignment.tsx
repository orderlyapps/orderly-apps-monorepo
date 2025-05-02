import {
  MidweekAssignments,
  Tables,
} from "@amodeo/data/supabase/supabase-types";
import {
  IonAccordion,
  IonCol,
  IonGrid,
  IonItem,
  IonList,
  IonRow,
} from "@ionic/react";
import { SchoolHeader } from "./components/SchoolHeader.js";
import { Label } from "./components/Label.js";
import { Participant } from "./components/Participant.js";
import { Time } from "./components/Time.js";
import { Details } from "./components/Details.js";
import { Assistant } from "./components/Assistant.js";
import { Actions } from "./components/actions/Actions.js";
import { shouldHide } from "../../helpers/shouldHide.js";
import { getAssignmentData } from "../../helpers/getAssignmentData.js";

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
        <SchoolHeader assignmentData={assignmentData} />
        <IonItem lines="none">
          <Label assignmentData={assignmentData} />
          
          <Participant assignmentData={assignmentData} />
        </IonItem>
      </IonList>
      <IonItem slot="content" color={"medium"}>
        <IonGrid className={assignmentData.time && "ion-margin-top"}>
          <IonRow>
            <IonCol>
              <Assistant assignmentData={assignmentData} />
              <Time assignmentData={assignmentData} />
              <Details assignmentData={assignmentData} />
              <Actions assignmentData={assignmentData} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
    </IonAccordion>
  );
};
