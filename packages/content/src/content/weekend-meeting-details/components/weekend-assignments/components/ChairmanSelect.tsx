import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useState } from "react";
import { formatName } from "@amodeo/util/formatters/formatName";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useWeekendAssignmentDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-assignment-details-query";
import { AssignmentSortSelect } from "./helper/assignment-sort-select/AssignmentSortSelect.js";
import { AssignmentFilters } from "./components/assignment-filters/AssignmentFilters.js";
import { AssignmentOptions } from "./components/assignment-options/AssignmentOptions.js";
import { AssignmentSelectAlert } from "./components/assignment-options/components/AssignmentSelectAlert.js";
import { AssignmentDeleteButton } from "./components/assignment-options/components/AssignmentDeleteButton.js";

export const ChairmanSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data } = useWeekendAssignmentDetailsQuery(week_id);

  // if (!data) {
  //   return null;
  // }
  return (
    <>
      <IonItem onClick={() => setIsOpen(true)}>
        <IonLabel>
          <strong>Chairman:</strong>
        </IonLabel>
        <IonText>{data?.chairman && formatName(data.chairman)}</IonText>
      </IonItem>
      <IonModal {...modalProps} isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Chairman</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList inset>
            <AssignmentSortSelect assignmentType="chairman" />
            <AssignmentFilters assignmentType="chairman" />
            <AssignmentDeleteButton
              participant={data?.chairman}
              assignmentType="chairman"
            />
          </IonList>
          <IonList inset>
            <AssignmentOptions assignmentType="chairman" />
          </IonList>
          <AssignmentSelectAlert assignmentType="chairman" />
        </IonContent>
      </IonModal>
    </>
  );
};
