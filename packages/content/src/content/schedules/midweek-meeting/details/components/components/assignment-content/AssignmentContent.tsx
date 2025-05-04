import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { AssigmentData } from "../../../../.shared/getData/getAssignmentData.js";
import { Assistant } from "./components/assistant/Assistant.js";
import { Details } from "./components/details/Details.js";
import { Time } from "./components/time/Time.js";
import { Actions } from "./components/actions/Actions.js";

export function AssignmentContent({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) {
  return (
    <IonGrid className={assignmentData.time && "ion-margin-top"}>
      <IonRow>
        <IonCol>
          <Assistant assignmentData={assignmentData} />

          <Time assignmentData={assignmentData} />

          <Details assignmentData={assignmentData} />

          <Actions assignmentData={assignmentData} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
