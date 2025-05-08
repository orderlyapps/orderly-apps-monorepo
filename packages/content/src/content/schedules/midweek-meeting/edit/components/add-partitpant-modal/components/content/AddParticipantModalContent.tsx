import { AssigmentData } from "#content/schedules/midweek-meeting/.shared/getData/getAssignmentData.js";
import {
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonToolbar,
} from "@ionic/react";
import { AddNewParticipant } from "./components/new/AddNewParticipant.js";
import { AddExistingParticipant } from "./components/existing/AddExistingParticipant.js";

export const AddParticipantModalContent = ({
  assignmentData,
}: {
  assignmentData: AssigmentData;
}) => {
  return (
    <>
      <IonToolbar>
        <IonSegment value="new" className="ion-margin-dd">
          <IonSegmentButton value="new" contentId="new">
            <IonLabel>New</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="existing" contentId="existing">
            <IonLabel>Existing</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
      <IonSegmentView>
        <IonSegmentContent id="new">
          <AddNewParticipant assignmentData={assignmentData} />
        </IonSegmentContent>
        <IonSegmentContent id="existing">
          <AddExistingParticipant assignmentData={assignmentData} />
        </IonSegmentContent>
      </IonSegmentView>
    </>
  );
};
