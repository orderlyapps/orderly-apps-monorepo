import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonList,
} from "@ionic/react";
import { useMidweekParticipantsList } from "../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";
import { MidweekParticipantOptionsContent } from "./components/MidweekParticipantOptionsContent.js";
import { useMidweekAssignmentsFormState } from "../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { MidweekParticipantOptionsHeader } from "./components/MidweekParticipantOptionsHeader.js";

export const MidweekParticipantOptions = () => {
  const { data, isPending, isError, currentAssignment } =
    useMidweekParticipantsList();
  const { sortValue } = useMidweekAssignmentsFormState();
  if (isPending) return null;
  if (isError) return null;

  // const filteredData = data?.filter((participant) => {
  //   return participant.isCurrentAssignee;
  // });

  const sortedData = data?.sort((a, b) => {
    return (b[sortValue] || Infinity) - (a[sortValue] || Infinity);
  });

  return (
    <IonList>
      <IonAccordionGroup>
        {sortedData?.map((participant) => {
          return (
            <IonAccordion key={participant.id} value={participant.id || ""}>
              <IonItem slot="header">
                <MidweekParticipantOptionsHeader
                  participant={participant}
                  sortValue={sortValue}
                />
              </IonItem>

              <IonItem slot="content" color={"medium"}>
                <MidweekParticipantOptionsContent
                  participant={participant}
                  currentAssignment={currentAssignment}
                />
              </IonItem>
            </IonAccordion>
          );
        })}
      </IonAccordionGroup>
    </IonList>
  );
};
