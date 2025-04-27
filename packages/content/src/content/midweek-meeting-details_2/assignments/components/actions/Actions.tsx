import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { GetAssignmentDataReturnType } from "../../helper/types.js";
import { Message } from "./components/Message.js";
import { PDF } from "./components/PDF.js";
import { Edit } from "./components/Edit.js";
import { useSelectModal } from "#content/midweek-meeting-details_2/midweek-meeting-edit-modal/SelectModal.js";

type MessageProps = {
  assignmentData: GetAssignmentDataReturnType;
};

export const Actions = ({ assignmentData }: MessageProps) => {
  const isSchoolAssignment = assignmentData.assignment.startsWith("school");
  const { openModal } = useSelectModal("test");
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
        <IonCol onClick={() => openModal()}>
          <Edit assignmentData={assignmentData} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
