import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react";
import { GetAssignmentDataReturnType } from "../helper/types.js";

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
