import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { Message } from "./components/Message.js";
import { PDF } from "./components/PDF.js";
import { Edit } from "./components/Edit.js";
import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";
import { useSettings } from "#shells/orderly/pages/settings/settings/SettingsPage.js";

type MessageProps = {
  assignmentData: GetAssignmentDataReturnType;
};

export const Actions = ({ assignmentData }: MessageProps) => {
  const isSchoolAssignment = assignmentData.assignment_id.startsWith("school");
  const { canEdit } = useSettings();

  return (
    <IonGrid>
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
        {IS_ORDERLY_APP && canEdit && (
          <>
            <IonCol>
              <Edit assignmentData={assignmentData} />
            </IonCol>
          </>
        )}
      </IonRow>
    </IonGrid>
  );
};
