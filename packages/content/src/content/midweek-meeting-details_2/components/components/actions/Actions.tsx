import { IonCol, IonGrid, IonRow } from "@ionic/react";
import { GetAssignmentDataReturnType } from "../../helper/types.js";
import { Message } from "./components/Message.js";
import { PDF } from "./components/PDF.js";
import { Edit } from "./components/Edit.js";

type MessageProps = {
  children?: React.ReactNode;
  assignmentData: GetAssignmentDataReturnType;
};

export const Actions = ({ children, assignmentData }: MessageProps) => {
  if (children) return <div>{children}</div>;
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <Message assignmentData={assignmentData} />
        </IonCol>
        <IonCol>
          <PDF assignmentData={assignmentData} />
        </IonCol>
        <IonCol>
          <Edit assignmentData={assignmentData} />
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};
