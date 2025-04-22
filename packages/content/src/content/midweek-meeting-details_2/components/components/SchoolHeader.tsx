import { IonListHeader } from "@ionic/react";
import { AssignmentProps } from "../Assignment.js";

export const SchoolHeader = ({ assignment, data }: AssignmentProps) => {
  if (!data.participants.counselor_2) return null;
  if (
    !(assignment === "counselor_2") &&
    !(assignment === "school_1_bible_reading")
  )
    return null;
  return (
    <IonListHeader>
      {assignment === "counselor_2" ? "Second School" : "Main Hall"}
    </IonListHeader>
  );
};
