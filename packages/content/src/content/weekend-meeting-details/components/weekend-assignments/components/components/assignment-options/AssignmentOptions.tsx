import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonList,
} from "@ionic/react";
import { useParticipantsList } from "../../helper/use-participants-list/useParticipantsList.js";
import { AssignmentOptionsHeader } from "./components/AssignmentOptionsHeader.js";
import { AssignmentOptionsContent } from "./components/AssignmentOptionsContent.js";
import { useFilterAndSortParticipants } from "../../helper/use-filter-and-sort-participants/useFilterAndSortParticipants.js";
import { AssignmentSelectButton } from "./components/AssignmentSelectButton.js";
import { AssignmentDeleteButton } from "./components/AssignmentDeleteButton.js";

export const AssignmentOptions = ({
  assignmentType,
}: {
  assignmentType: "reader" | "chairman";
}) => {
  const { participants } = useParticipantsList(assignmentType);
  const filteredAndSortedParticipants = useFilterAndSortParticipants(
    participants,
    assignmentType
  );

  return (
    <IonAccordionGroup>
      {filteredAndSortedParticipants.map((participant: any) => {
        return (
          <IonAccordion key={participant.id} value={participant.id || ""}>
            <IonItem slot="header">
              <AssignmentOptionsHeader
                participant={participant}
                assignmentType={assignmentType}
              />
            </IonItem>
            <IonList slot="content" inset lines="none">
              <AssignmentOptionsContent
                participant={participant}
                assignmentType={assignmentType}
              />
              <IonItem color="light">
                <AssignmentSelectButton
                  participant={participant}
                  assignmentType={assignmentType}
                />
                <AssignmentDeleteButton
                  participant={participant}
                  assignmentType={assignmentType}
                />
              </IonItem>
            </IonList>
          </IonAccordion>
        );
      })}
    </IonAccordionGroup>
  );
};
