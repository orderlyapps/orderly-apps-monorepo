import { useCardModal } from "@amodeo/ui/util/ionic/use-card-modal/useCardModal";
import { formatName } from "@amodeo/util/formatters/formatName";
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
import { useOrderlyPageParams } from "#shells/orderly/routes.js";
import { useWeekendAssignmentDetailsQuery } from "@amodeo/data/react-query/weekend-meeting/views/use-weekend-assignment-details-query";
import { FilterControls } from "./components/filter-controls/FilterControls.js";
import { ParticipantList } from "./components/participant-list/ParticipantList.js";
import { useChairmanFilters } from "./components/hooks/useChairmanFilters.js";
import { useParticipantStats } from "./components/hooks/useParticipantStats.js";
import { ParticipantWithStats } from "./components/types/ChairmanSelectTypes.js";

export const ChairmanSelect = ({
  modalProps,
}: {
  modalProps: ReturnType<typeof useCardModal>["modalProps"];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { week_id } = useOrderlyPageParams("weekend_meeting_details");
  const { data } = useWeekendAssignmentDetailsQuery(week_id);
  const { filters, updateFilter, setFilters } = useChairmanFilters();
  const { participantsWithStats } = useParticipantStats(week_id);

  const handleSelectParticipant = (participant: ParticipantWithStats) => {
    // Here you would implement the logic to update the chairman assignment
    // This is just a placeholder for now
    console.log("Selected participant:", participant);
    setIsOpen(false);
  };

  return (
    <>
      <IonItem onClick={() => setIsOpen(true)}>
        <IonLabel>
          <strong>Chairman:</strong>
        </IonLabel>
        <IonText>{data?.chairman && formatName(data?.chairman)}</IonText>
      </IonItem>
      <IonModal {...modalProps} isOpen={isOpen}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>ChairmanSelect</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList inset>
            <FilterControls
              filters={filters}
              updateFilter={updateFilter}
              setFilters={setFilters}
            />
            <ParticipantList
              participants={participantsWithStats}
              filters={filters}
              onSelectParticipant={handleSelectParticipant}
            />
          </IonList>
        </IonContent>
      </IonModal>
    </>
  );
};
