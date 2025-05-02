import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { GetAssignmentDataReturnType } from "../../helper/types.js";
import { Message } from "./components/Message.js";
import { PDF } from "./components/PDF.js";
import { Edit } from "./components/Edit.js";
import { useMidweekAssignmentsFormState } from "#content/midweek-meeting-details_2/select-modal/hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";

type MessageProps = {
  assignmentData: GetAssignmentDataReturnType;
};

export const Actions = ({ assignmentData }: MessageProps) => {
  const isSchoolAssignment = assignmentData.assignment.startsWith("school");
  return (
    <IonGrid className={assignmentData.time && "ion-margin-top"}>
      <IonRow>
        <IonCol>
          <Message assignmentData={assignmentData} />
        </IonCol>
        {isSchoolAssignment && (
          <>
            <IonCol>
              <PDF assignmentData={assignmentData} />
            </IonCol>
          </>
        )}
        <IonCol>
          <Edit assignmentData={assignmentData} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
