import { IonItem, IonLabel, IonText } from "@ionic/react";
import { assignmentTypes } from "../../../helper/assignment-types/assignmentTypes.js";

export const AssignmentOptionsContent = ({
  participant,
  assignmentType,
}: {
  participant: any;
  assignmentType: "reader" | "chairman";
}) => {
  return (
    <>
      <IonItem color="light">
        <IonLabel>Average Assignments: </IonLabel>

        <IonText>
          {(participant.combined.averageAssignments?.weeksValue &&
            `${participant.combined.averageAssignments.weeksValue} ${participant.combined.averageAssignments.weeksValue > 1 ? "weeks" : "week"}`) ||
            "N/A"}
        </IonText>
      </IonItem>

      <IonItem color="light">
        <IonLabel>Last Assignment: </IonLabel>
        <IonText>
          {(participant.combined.previousAssignment?.weeksValue &&
            `${participant.combined.previousAssignment.weeksValue} ${participant.combined.previousAssignment.weeksValue > 1 ? "weeks" : "week"} (${participant.combined.previousAssignment.assignment === "chairman" ? "Chairman" : "Reader"})`) ||
            "N/A"}
        </IonText>
      </IonItem>
      {participant.combined.previousAssignment?.assignment !==
        assignmentType && (
        <>
          <IonItem color="light">
            <IonLabel>
              Last {assignmentTypes[assignmentType]} Assignment:{" "}
            </IonLabel>
            <IonText>
              {(participant[assignmentType || "reader"]?.previousAssignment
                ?.weeksValue &&
                `${participant[assignmentType || "reader"]?.previousAssignment?.weeksValue} ${(participant[assignmentType || "reader"]?.previousAssignment?.weeksValue as any) > 1 ? "weeks" : "week"}`) ||
                "N/A"}
            </IonText>
          </IonItem>
        </>
      )}

      {/* Safely check if weeksBetweenPreviousAndNextAssignment exists and has a weeksValue */}
      {participant.combined.weeksBetweenPreviousAndNextAssignment &&
        participant.combined.weeksBetweenPreviousAndNextAssignment
          .weeksValue && (
          <>
            <IonItem color="light">
              <IonLabel>Weeks Between Assignments</IonLabel>
              <IonText>
                {`${participant.combined.weeksBetweenPreviousAndNextAssignment.weeksValue} ${participant.combined.weeksBetweenPreviousAndNextAssignment.weeksValue > 1 ? "weeks" : "week"}` ||
                  "N/A"}
              </IonText>
            </IonItem>
          </>
        )}
      {
        <>
          <IonItem color="light">
            <IonLabel>Next Assignment: </IonLabel>
            <IonText>
              {(participant.combined.nextAssignment?.weeksValue &&
                `${participant.combined.nextAssignment.weeksValue} ${participant.combined.nextAssignment.weeksValue > 1 ? "weeks" : "week"} (${participant.combined.nextAssignment.assignment === "chairman" ? "Chairman" : "Reader"})`) ||
                "N/A"}
            </IonText>
          </IonItem>
        </>
      }
    </>
  );
};
