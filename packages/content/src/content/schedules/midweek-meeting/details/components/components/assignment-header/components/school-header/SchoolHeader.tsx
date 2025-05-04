import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";
import { IonListHeader } from "@ionic/react";

export const SchoolHeader = ({
  assignmentData: { school, assignment_id },
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  if (!school.hasSecondSchool) return null;
  if (
    !(assignment_id === "counselor_2") &&
    !(assignment_id === "school_1_bible_reading")
  )
    return null;
  return <IonListHeader>{school?.label}</IonListHeader>;
};
