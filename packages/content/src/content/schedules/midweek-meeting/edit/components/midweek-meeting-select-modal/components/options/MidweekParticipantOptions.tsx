import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonList,
} from "@ionic/react";
import { useMidweekParticipantsList } from "../../hooks/use-midweek-participants-list/use-midweek-participants-list.js";
import { MidweekParticipantOptionsContent } from "./components/content/MidweekParticipantOptionsContent.js";
import { useMidweekAssignmentsFormState } from "../../hooks/use-midweek-assignments-form-state/use-midweek-assignments-form-state.js";
import { MidweekParticipantOptionsHeader } from "./components/header/MidweekParticipantOptionsHeader.js";
import { useOrderlyPageParams } from "#shells/orderly/routes.js";

export const MidweekParticipantOptions = () => {
  const { week_id } = useOrderlyPageParams("midweek_meeting_edit");

  const { data, isPending, isError, currentAssignment } =
    useMidweekParticipantsList(week_id);

  const { sortValue } = useMidweekAssignmentsFormState();

  if (isPending) return null;
  if (isError) return null;

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
