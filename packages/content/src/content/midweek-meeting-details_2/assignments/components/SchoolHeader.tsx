import { IonListHeader } from "@ionic/react";
import { GetAssignmentDataReturnType } from "../helper/types.js";

export const SchoolHeader = ({
  assignmentData: { school, assignment },
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  if (!school.hasSecondSchool) return null;
  if (
    !(assignment === "counselor_2") &&
    !(assignment === "school_1_bible_reading")
  )
    return null;
  return <IonListHeader>{school?.label}</IonListHeader>;
};
