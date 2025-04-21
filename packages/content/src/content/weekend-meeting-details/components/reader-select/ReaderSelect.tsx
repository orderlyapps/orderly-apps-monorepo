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
import { AssignmentSortSelect } from "../components/helper/assignment-sort-select/AssignmentSortSelect.js";
import { AssignmentFilters } from "../components/components/assignment-filters/AssignmentFilters.js";
import { AssignmentOptions } from "../components/components/assignment-options/AssignmentOptions.js";

export const ReaderSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data } = useWeekendAssignmentDetailsQuery(week_id);
  return (
    <>
      <IonItem onClick={() => setIsOpen(true)}>
        <IonLabel>
          <strong>Reader:</strong>
        </IonLabel>
        <IonText>{data?.reader && formatName(data?.reader)}</IonText>
      </IonItem>
      <IonModal {...modalProps} isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Reader</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList inset>
            <AssignmentSortSelect assignmentType="reader" />
            <AssignmentFilters assignmentType="reader" />
          </IonList>
          <IonList inset>
            <AssignmentOptions assignmentType="reader" />
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};
