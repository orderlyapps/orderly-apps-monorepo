import { IonItem, IonGrid, IonRow, IonCol } from "@ionic/react";
import { AssigmentData } from "../../../.shared/getData/getAssignmentData.js";
import { Details } from "../../../details/components/components/assignment-content/components/details/Details.js";
import { Time } from "../../../details/components/components/assignment-content/components/time/Time.js";

export function AssignmentDetails({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) {
  return (
    <IonItem className="ion-margin-top" lines="none">
      <IonGrid className={assignmentData.time && "ion-margin-top"}>
        <IonRow>
          <IonCol>
            <Time assignmentData={assignmentData} />
            <Details assignmentData={assignmentData} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
}
