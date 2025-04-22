import {
  IonButton,
  IonIcon
} from "@ionic/react";
import { createOutline } from "ionicons/icons";
import { GetAssignmentDataReturnType } from "../../../helper/types.js";

export const Edit = ({
  assignmentData,
}: {
  assignmentData: GetAssignmentDataReturnType;
}) => {
  return (
    <>
      <IonButton fill="clear" expand="block" color="light">
        <IonIcon icon={createOutline} slot="icon-only" size="large" />
      </IonButton>
    </>
  );
};
