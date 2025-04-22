import { IonButton, IonIcon } from "@ionic/react";
import { GetAssignmentDataReturnType } from "../../../helper/types.js";
import { downloadPDF } from "@amodeo/ui/util/ionic/icons/icons";
import MidweekAssignmentFormPDF from "@amodeo/feature/pdf/midweek-assignment-form/MidweekAssignmentFormPDF";

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
