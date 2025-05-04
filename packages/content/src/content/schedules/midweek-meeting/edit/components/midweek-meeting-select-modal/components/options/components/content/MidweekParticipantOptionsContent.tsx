import { MidweekAssignments } from "@amodeo/data/supabase/supabase-types";
import { IonGrid } from "@ionic/react";
import { ParticipantType } from "../../../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";
import { AverageAssignments } from "./components/AverageAssignments.js";
import { LastSpecificAssignment } from "./components/LastSpecificAssignment.js";
import { AssignmentGap } from "./components/AssignmentGap.js";
import { PreviousAssignments } from "./components/PreviousAssignments.js";
import { SelectParticipant } from "./components/SelectParticipant.js";
import { NextAssignments } from "./components/NextAssignments.js";

export function MidweekParticipantOptionsContent({
  participant,
  currentAssignment,
}: {
  participant: ParticipantType;
  currentAssignment: MidweekAssignments;
}) {
  return (
    <IonGrid>
      <AverageAssignments participant={participant} />

      <LastSpecificAssignment
        participant={participant}
        currentAssignment={currentAssignment}
      />

      <AssignmentGap participant={participant} />

      <PreviousAssignments participant={participant} />

      <NextAssignments participant={participant} />

      <SelectParticipant
        participant={participant}
        currentAssignment={currentAssignment}
      />
    </IonGrid>
  );
}
