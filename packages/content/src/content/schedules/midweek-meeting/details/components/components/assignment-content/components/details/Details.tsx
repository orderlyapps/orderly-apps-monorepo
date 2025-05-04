import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

export const Details = ({
  assignmentData: { details },
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  if (!details) return null;
  return (
    <IonGrid className="ion-no-padding">
      <IonRow>
        <IonCol size="3" className="ion-text-end">
          <strong>{`Details: `}</strong>
        </IonCol>
        <IonCol className="ion-padding-start">{details}</IonCol>
      </IonRow>
    </IonGrid>
  );
};
