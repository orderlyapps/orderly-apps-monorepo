import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";
import { IonCol, IonGrid, IonRow } from "@ionic/react";

export const Assistant = ({
  assignmentData: { assistant, padding },
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  if (!assistant) return null;

  const { assistantsName, show, label } = assistant;

  return (
    <>
      {show && (
        <IonGrid className="ion-no-padding ">
          <IonRow>
            <IonCol size="3" className="ion-text-end">
              <strong>{label}</strong>
            </IonCol>
            <IonCol className="ion-padding-start">{assistantsName}</IonCol>
          </IonRow>
        </IonGrid>
      )}

      <div style={{ height: padding }} />
    </>
  );
};
