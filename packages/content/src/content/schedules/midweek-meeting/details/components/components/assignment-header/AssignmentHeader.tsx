import { getAssignmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import { IonItem } from "@ionic/react";
import { SchoolHeader } from "./components/school-header/SchoolHeader.js";
import { Label } from "./components/label/Label.js";
import { Participant } from "./components/participant/Participant.js";

export function AssignmentHeader({
  assignmentData,
}: {
  assignmentData: ReturnType<typeof getAssignmentData>;
}) {
  return (
    <>
      <SchoolHeader assignmentData={assignmentData} />
      <IonItem lines="none">
        <Label assignmentData={assignmentData} />

        <Participant assignmentData={assignmentData} />
      </IonItem>
    </>
  );
}
