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
    <IonGrid>
      <IonRow>
        <IonCol>
          <Assistant assignmentData={assignmentData} />

          <Time assignmentData={assignmentData} />

          <Details assignmentData={assignmentData} />

          {IS_ORDERLY_APP && (
            <>
              <Actions assignmentData={assignmentData} />
            </>
          )}
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
