import { IonButton, IonIcon } from "@ionic/react";
import { downloadPDF } from "@amodeo/ui/util/ionic/icons/icons";
import MidweekAssignmentFormPDF from "@amodeo/feature/pdf/midweek-assignment-form/MidweekAssignmentFormPDF";
import { GetAssignmentDataReturnType } from "#content/schedules/midweek-meeting/.shared/types.js";

export const PDF = ({
  assignmentData,
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  return (
    <>
      <MidweekAssignmentFormPDF.Download data={assignmentData}>
        <IonButton fill="clear" expand="block" color="light">
          <IonIcon icon={downloadPDF} slot="icon-only" size="large" />
        </IonButton>
      </MidweekAssignmentFormPDF.Download>
    </>
  );
};
