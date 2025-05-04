import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

export const Time = ({
  assignmentData: { time, padding },
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  return (
    <>
      {time && (
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol size="3" className="ion-text-end">
              <strong>{`Time: `}</strong>
            </IonCol>
            <IonCol className="ion-padding-start">{`${time} min`}</IonCol>
          </IonRow>
        </IonGrid>
      )}
      <div style={{ height: padding }} />
    </>
  );
};
